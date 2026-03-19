import React from 'react';
import { GithubFilled } from '@ant-design/icons';
import './footer.less';

const Footer: React.FC = () => (
  <footer>
    <div>
      <span>Made with ❤️</span>
      <span className="author" style={{ marginLeft: 8 }}>
        by <a href="https://github.com/visiky/resume" target="_blank" rel="noreferrer">visiky</a>
      </span>
    </div>
    <a
      href="https://github.com/visiky/resume.git"
      style={{ position: 'absolute', right: '8px', fontSize: '12px' }}
      target="_blank"
      rel="noreferrer"
    >
      <GithubFilled style={{ color: '#fff', marginRight: '4px' }} /> 项目代码
    </a>
  </footer>
);

export default Footer;
