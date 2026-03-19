import React from 'react';
import { ColorPicker as AntdColorPicker } from 'antd';
import './index.less';

type ColorPickerProps = {
  value: string;
  onChange?: (value: string) => void;
  canChangeColor?: boolean;
  style?: React.CSSProperties;
  className?: string;
};

export const ColorPicker: React.FC<ColorPickerProps> = ({
  value: color,
  onChange,
  style,
  canChangeColor = true,
  className,
}) => (
  <AntdColorPicker
    value={color}
    disabled={!canChangeColor}
    onChange={(_, hex) => onChange?.(hex)}
  >
    <div
      style={{ backgroundColor: color, width: 24, height: 24, borderRadius: 4, cursor: 'pointer', ...style }}
      className={className || 'color-block'}
    />
  </AntdColorPicker>
);
