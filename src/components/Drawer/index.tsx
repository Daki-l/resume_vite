import React, { useState, useRef, useMemo } from 'react';
import {
  Drawer as AntdDrawer,
  Button,
  Collapse,
  Modal,
  Radio,
  Popover,
  Input,
} from 'antd';
import { DeleteFilled, InfoCircleFilled, MenuOutlined } from '@ant-design/icons';
import { FormCreator } from '../FormCreator';
import { getDefaultTitleNameMap } from '@/data/constant';
import { MODULES, CONTENT_OF_MODULE } from '@/helpers/contant';
import type { ResumeConfig, ThemeConfig } from '../types';
import { ConfigTheme } from './ConfigTheme';
import { Templates } from './Templates';
import useThrottle from '@/hooks/useThrottle';
import './index.less';

const { Panel } = Collapse;

type Props = {
  value: ResumeConfig;
  onValueChange: (v: Partial<ResumeConfig>) => void;
  theme: ThemeConfig;
  onThemeChange: (v: Partial<ThemeConfig>) => void;
  template: string;
  onTemplateChange: (v: string) => void;
  style?: object;
};

// ─── 原生 HTML5 拖拽排序行 ───────────────────────────────────────────────────
const DraggableRow: React.FC<{
  index: number;
  onDragStart: (i: number) => void;
  onDrop: (i: number) => void;
  children: React.ReactNode;
}> = ({ index, onDragStart, onDrop, children }) => {
  const [isOver, setIsOver] = useState(false);

  return (
    <div
      draggable
      onDragStart={() => onDragStart(index)}
      onDragOver={e => { e.preventDefault(); setIsOver(true); }}
      onDragLeave={() => setIsOver(false)}
      onDrop={() => { setIsOver(false); onDrop(index); }}
      style={{
        cursor: 'move',
        borderTop: isOver ? '2px solid #1890ff' : '2px solid transparent',
        transition: 'border-color 0.15s',
      }}
    >
      {children}
    </div>
  );
};

export const Drawer: React.FC<Props> = props => {
  const [visible, setVisible] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState<string | null>(null);
  const [currentContent, updateCurrentContent] = useState<any>(null);
  const [panelType, setPanelType] = useState('template');
  const dragIndexRef = useRef<number>(-1);

  const updateContent = useThrottle(
    (v: any) => {
      const newConfig = { ...currentContent, ...v };
      updateCurrentContent(newConfig);
      props.onValueChange({ [childrenDrawer!]: newConfig });
    },
    [currentContent],
    800
  );

  const swapItems = (moduleKey: string, fromIdx: number, toIdx: number) => {
    if (fromIdx === toIdx || !props.value) return;
    const arr = [...((props.value as any)[moduleKey] || [])];
    const [item] = arr.splice(fromIdx, 1);
    arr.splice(toIdx, 0, item);
    props.onValueChange({ [moduleKey]: arr });
  };

  const deleteItem = (moduleKey: string, idx: number) => {
    if (!props.value) return;
    const arr: any[] = (props.value as any)[moduleKey] || [];
    props.onValueChange({ [moduleKey]: arr.filter((_, i) => i !== idx) });
  };

  const modules = useMemo(() => {
    return MODULES({ titleNameMap: props.value?.titleNameMap });
  }, [props.value?.titleNameMap]);

  const contentOfModule = useMemo(() => CONTENT_OF_MODULE(), []);

  const DEFAULT_TITLE_MAP = getDefaultTitleNameMap();
  const isList = childrenDrawer?.endsWith('List') ?? false;

  // ── 列表型模块（带拖拽排序）
  const renderModuleList = ({ icon, key, name }: any, idx: number, values: any[]) => {
    const header = (
      <>
        <span className="item-icon">{icon}</span>
        <span className="item-name">
          {DEFAULT_TITLE_MAP[key] ? (
            <Input
              placeholder={DEFAULT_TITLE_MAP[key]}
              variant="borderless"
              defaultValue={name}
              onChange={e => {
                props.onValueChange({
                  titleNameMap: { ...(props.value.titleNameMap || {}), [key]: e.target.value },
                });
              }}
              style={{ padding: 0 }}
            />
          ) : name}
        </span>
      </>
    );

    const list = values.map((value, i) => (
      <DraggableRow
        key={i}
        index={i}
        onDragStart={fi => { dragIndexRef.current = fi; }}
        onDrop={ti => swapItems(key, dragIndexRef.current, ti)}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0' }}>
          <MenuOutlined style={{ color: '#bbb', fontSize: 12, flexShrink: 0 }} />
          <div
            style={{ flex: 1, cursor: 'pointer' }}
            onClick={() => {
              setChildrenDrawer(key);
              updateCurrentContent({ ...value, dataIndex: i });
            }}
          >
            {`${i + 1}. ${Object.values(value || {}).join(' - ')}`}
          </div>
          <DeleteFilled
            style={{ color: '#ff4d4f', cursor: 'pointer' }}
            onClick={() => {
              Modal.confirm({
                content: '确认删除？',
                onOk: () => deleteItem(key, i),
              });
            }}
          />
        </div>
      </DraggableRow>
    ));

    return (
      <div className="module-item" key={idx}>
        <Collapse defaultActiveKey={[]} ghost>
          <Panel header={header} key={idx}>
            <div className="list-value-item">
              {list}
              <div
                className="btn-append"
                onClick={() => { setChildrenDrawer(key); updateCurrentContent(null); }}
              >
                继续添加
              </div>
            </div>
          </Panel>
        </Collapse>
      </div>
    );
  };

  // ── 单项模块（无列表）
  const renderModuleListItem = ({ icon, key, name }: any) => (
    <div className="module-item" key={key}>
      <Collapse
        defaultActiveKey={[]}
        ghost
        expandIcon={() => <span style={{ display: 'inline-block', width: '12px' }} />}
      >
        <Panel
          header={
            <span onClick={() => { updateCurrentContent(props.value ? (props.value as any)[key] : {}); setChildrenDrawer(key); }}>
              <span className="item-icon">{icon}</span>
              <span className="item-name">{name}</span>
            </span>
          }
          className="no-content-panel"
          key="no-content-panel"
        />
      </Collapse>
    </div>
  );

  const moduleContent = (
    <div className="module-list">
      {modules.map((module, idx) => {
        if (!module.key.endsWith('List')) return renderModuleListItem(module);
        if (!props.value) return null;
        const values = ((props.value as any)[module.key] || []) as any[];
        return renderModuleList(module, idx, values);
      })}

      <AntdDrawer
        title={modules.find(m => m.key === childrenDrawer)?.name}
        width={450}
        onClose={() => setChildrenDrawer(null)}
        open={!!childrenDrawer}
      >
        <FormCreator
          config={(contentOfModule as any)[childrenDrawer!]}
          value={currentContent}
          isList={isList}
          onChange={v => {
            if (isList) {
              const arr: any[] = [...((props.value as any)[childrenDrawer!] || [])];
              if (currentContent) {
                arr[currentContent.dataIndex] = { ...currentContent, ...v };
              } else {
                arr.push(v);
              }
              props.onValueChange({ [childrenDrawer!]: arr });
              setChildrenDrawer(null);
              updateCurrentContent(null);
            } else {
              updateContent(v);
            }
          }}
        />
      </AntdDrawer>
    </div>
  );

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)} style={props.style}>
        进行配置
        <Popover content="点击配置简历模块">
          <InfoCircleFilled style={{ marginLeft: '4px' }} />
        </Popover>
      </Button>
      <AntdDrawer
        title={
          <Radio.Group value={panelType} onChange={e => setPanelType(e.target.value)}>
            <Radio.Button value="template">选择模板</Radio.Button>
            <Radio.Button value="module">配置简历</Radio.Button>
          </Radio.Group>
        }
        width={480}
        closable={false}
        onClose={() => setVisible(false)}
        open={visible}
      >
        {panelType === 'module' ? moduleContent : (
          <>
            <ConfigTheme {...props.theme} onChange={v => props.onThemeChange(v)} />
            <Templates template={props.template} onChange={v => props.onTemplateChange(v)} />
          </>
        )}
      </AntdDrawer>
    </>
  );
};
