import React from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import IndexPage from '@/pages/index';

const App: React.FC = () => (
	<ConfigProvider locale={zhCN}>
		<IndexPage />
	</ConfigProvider>
);

export default App;
