import React, { useEffect, useState } from 'react';
import { Form, Input, InputNumber, Button, Checkbox, Select } from 'antd';
import type { FormItemProps } from 'antd';
import { ColorPicker as AntdColorPicker } from 'antd';

type FieldConfig = {
  type: string;
  attributeId: string;
  displayName?: string;
  formItemProps?: FormItemProps;
  cfg?: Record<string, any>;
};

type Props = {
  config: FieldConfig[];
  value: Record<string, any>;
  onChange: (v: any) => void;
  isList: boolean;
};

const FieldComponent = (type: string, cfg: Record<string, any> = {}) => {
  switch (type) {
    case 'checkbox': return <Checkbox {...cfg} />;
    case 'select':   return <Select {...cfg} />;
    case 'input':    return <Input {...cfg} />;
    case 'number':   return <InputNumber {...cfg} />;
    case 'textArea': return <Input.TextArea {...cfg} />;
    case 'color-picker': return <AntdColorPicker {...cfg} />;
    default:         return <Input />;
  }
};

export const FormCreator: React.FC<Props> = props => {
  const [fields, setFields] = useState<any[]>([]);

  useEffect(() => {
    const data = Object.keys(props.value || {}).map(k => ({ name: [k], value: (props.value as any)[k] }));
    setFields(data);
  }, [props.value]);

  const handleChange = (values: any) => {
    if ('edu_time' in values && typeof values.edu_time === 'string') {
      values.edu_time = values.edu_time.split(',');
    }
    if ('work_time' in values && typeof values.work_time === 'string') {
      values.work_time = values.work_time.split(',');
    }
    props.onChange(values);
  };

  const formProps: any = {
    [props.isList ? 'onFinish' : 'onValuesChange']: handleChange,
  };

  return (
    <div>
      <Form
        labelCol={{ span: 6 }}
        initialValues={props.value}
        fields={fields}
        {...formProps}
      >
        {(props.config || []).map(c => (
          <Form.Item
            key={c.attributeId}
            label={c.displayName}
            wrapperCol={c.displayName ? { span: 18 } : { span: 24 }}
            name={c.attributeId}
            {...(c.formItemProps || {})}
          >
            {FieldComponent(c.type, {
              ...(c.cfg || {}),
              value: (props.value || {})[c.attributeId],
            })}
          </Form.Item>
        ))}
        {props.isList && (
          <Form.Item wrapperCol={{ offset: 6 }}>
            <Button type="primary" htmlType="submit">提交</Button>
          </Form.Item>
        )}
      </Form>
    </div>
  );
};
