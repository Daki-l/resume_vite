import React from 'react';
import './index.less';

type Props = {
  template: string;
  onChange: (v: string) => void;
};

const TEMPLATES = [
  { id: 'template1', description: '默认模板（适用于单页）', emoji: '📄' },
  { id: 'template2', description: '简易模板', emoji: '📋' },
  { id: 'template3', description: '简易模板（适用于多页）', emoji: '📑' },
];

export const Templates: React.FC<Props> = props => (
  <div className="templates">
    {TEMPLATES.map(item => (
      <div
        key={item.id}
        className={`template-item${item.id === props.template ? ' selected' : ''}`}
        onClick={() => props.onChange(item.id)}
      >
        <div className="template-preview">{item.emoji}</div>
        <span className="template-id">{item.id}</span>
        <span className="template-description">{item.description}</span>
      </div>
    ))}
  </div>
);
