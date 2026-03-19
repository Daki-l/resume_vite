import React from 'react';
import { Popover } from 'antd';
import { getSearchObj } from '@/helpers/location';
import './index.less';

export function getMode(): string {
  const query = getSearchObj();
  return query.mode || 'read';
}

function setUrlParam(key: string, value: string) {
  const params = new URLSearchParams(window.location.search);
  params.set(key, value);
  window.location.href = `${window.location.pathname}?${params.toString()}`;
}

export const useModeSwitcher = (_: { className?: string }): [JSX.Element, string, (v: string) => void] => {
  const mode = getMode();
  const query = getSearchObj();

  const changeMode = (value: string) => {
    if (value === mode) return;
    setUrlParam('mode', value);
  };

  // 本地工具：user 参数不存在时，可以直接进入编辑
  const element = (
    <div className="mode-switcher">
      {mode !== 'edit' && (
        <span className="mode-item" onClick={() => changeMode('edit')}>编辑</span>
      )}
      {mode === 'edit' && !query.user && (
        <Popover content="本地模式，直接预览">
          <span className="mode-item" onClick={() => changeMode('read')}>预览</span>
        </Popover>
      )}
      {mode === 'edit' && query.user && (
        <span className="mode-item" onClick={() => changeMode('read')}>预览</span>
      )}
    </div>
  );

  return [element, mode, changeMode];
};
