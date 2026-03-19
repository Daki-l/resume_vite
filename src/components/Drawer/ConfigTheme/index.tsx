import React, { useEffect } from 'react';
import { ColorPicker } from 'antd';
import type { ThemeConfig } from '../../types';

type Props = ThemeConfig & {
  onChange: (v: Partial<ThemeConfig>) => void;
};

export const ConfigTheme: React.FC<Props> = props => {
  useEffect(() => {
    let $style = document.getElementById('dynamic');
    if (!$style) {
      $style = document.createElement('style');
      $style.setAttribute('id', 'dynamic');
      document.head.insertBefore($style, null);
    }
    $style.innerHTML = `:root { --primary-color: ${props.color}; --tag-color: ${props.tagColor}; }`;
  }, [props.color, props.tagColor]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span>主题色</span>
        <ColorPicker
          value={props.color}
          onChange={(_, hex) => props.onChange({ color: hex })}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span>Tag 标签色</span>
        <ColorPicker
          value={props.tagColor}
          onChange={(_, hex) => props.onChange({ tagColor: hex })}
        />
      </div>
    </div>
  );
};
