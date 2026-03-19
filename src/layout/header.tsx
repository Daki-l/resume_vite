import React from 'react';
import { useModeSwitcher, getMode } from '@/hooks/useModeSwitcher';
import './header.less';

const Header: React.FC = () => {
  const mode = getMode();
  const [ModeSwitcher] = useModeSwitcher({});

  return (
    <header>
      <span>简历生成器</span>
      <span>
        {ModeSwitcher}
        {mode === 'read' && (
          <span className="action-link" onClick={() => window.print()}>下载 PDF</span>
        )}
      </span>
    </header>
  );
};

export default Header;
