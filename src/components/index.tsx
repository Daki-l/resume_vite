import React, { useCallback, useState, useEffect } from 'react';
import { Button, Affix, Upload, Spin, message } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { useModeSwitcher } from '@/hooks/useModeSwitcher';
import { getDefaultTitleNameMap } from '@/data/constant';
import { getSearchObj } from '@/helpers/location';
import { customAssign } from '@/helpers/customAssign';
import { copyToClipboard } from '@/helpers/copy-to-board';
import { exportDataToLocal } from '@/helpers/export-to-local';
import { getConfig, saveToLocalStorage } from '@/helpers/store-to-local';
import { normalizeCssColor } from '@/helpers/sanitize';
import { Drawer } from './Drawer';
import { Resume } from './Resume';
import type { ResumeConfig, ThemeConfig } from './types';
import './index.less';

const DEFAULT_THEME: ThemeConfig = { color: '#2f5785', tagColor: '#8bc34a' };

const normalizeConfig = (v: Partial<ResumeConfig>) => ({
	...v,
	titleNameMap: {
		...getDefaultTitleNameMap(),
		...(v.titleNameMap && typeof v.titleNameMap === 'object' ? v.titleNameMap : {}),
	},
} as ResumeConfig);

export const Page: React.FC = () => {
	const query = getSearchObj();
	const user = query.user || 'local';

	const [, mode, changeMode] = useModeSwitcher({});
	const [config, setConfig] = useState<ResumeConfig | undefined>();
	const [loading, setLoading] = useState(true);
	const [showEditTip, setShowEditTip] = useState(true);
	const [theme, setTheme] = useState<ThemeConfig>(DEFAULT_THEME);

	// 确保 URL 有 template 参数
	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		if (!params.get('template')) {
			params.set('template', 'template1');
			window.location.replace(`${window.location.pathname}?${params.toString()}`);
		}
	}, []);

	const changeConfig = (v: Partial<ResumeConfig>) => {
		setConfig(normalizeConfig(v));
	};

	// 加载简历数据（本地缓存 → 内置默认值）
	useEffect(() => {
		getConfig('zh-CN', 'master', user).then(data => {
			changeConfig(customAssign({}, data));
			setLoading(false);
		});
	}, [user]);

	const onConfigChange = useCallback((v: Partial<ResumeConfig>) => {
		const newC = Object.assign({}, config, v) as ResumeConfig;
		const normalizedConfig = normalizeConfig(newC);
		setConfig(normalizedConfig);
		saveToLocalStorage(user, normalizedConfig);
	}, [config, user]);

	const onThemeChange = useCallback((v: Partial<ThemeConfig>) => {
		setTheme(prev => ({
			color: normalizeCssColor(v.color, prev.color),
			tagColor: normalizeCssColor(v.tagColor, prev.tagColor),
		}));
	}, []);

	const updateTemplate = (value: string) => {
		const params = new URLSearchParams(window.location.search);
		params.set('template', value);
		window.location.href = `${window.location.pathname}?${params.toString()}`;
	};

	// 导入 JSON 配置
	const importConfig = (file: any) => {
		if (window.FileReader) {
			const reader = new FileReader();
			reader.onload = () => {
				try {
					const newConfig: any = JSON.parse(reader.result as string);
					onThemeChange(newConfig.theme || {});
					const { theme: _t, ...rest } = newConfig;
					onConfigChange(rest);
					message.success('上传配置已应用');
				} catch {
					message.error('上传文件有误，请重新上传');
				}
			};
			reader.readAsText(file);
		} else {
			message.error('当前浏览器不支持 FileReader，建议使用 Chrome');
		}
		return false; // 阻止默认上传行为
	};

	const getConfigJson = () => JSON.stringify({ ...config, theme });

	const copyConfig = () => {
		copyToClipboard(getConfigJson());
		message.success('已复制到剪贴板');
	};

	const exportConfig = () => exportDataToLocal(getConfigJson(), `${user}'s resume info`);

	const template = query.template || 'template1';

	return (
		<React.Fragment>
			<Spin spinning={loading}>
				{mode === 'edit' && showEditTip && (
					<div className="resume-alert">
						<span>💡 编辑后请点击「保存简历」导出 JSON，下次导入继续使用。</span>
						<Button
							type="text"
							size="small"
							className="resume-alert-close"
							icon={<CloseOutlined />}
							aria-label="关闭提示"
							onClick={() => setShowEditTip(false)}
						/>
					</div>
				)}
				<div className="page">
					{config && (
						<Resume value={config} theme={theme} template={template} />
					)}
					{mode === 'edit' && config && (
						<React.Fragment>
							<Affix offsetTop={0}>
								<div className="btn-group">
									<Drawer
										value={config!}
										onValueChange={onConfigChange}
										theme={theme}
										onThemeChange={onThemeChange}
										template={template}
										onTemplateChange={updateTemplate}
									/>
									<Button type="primary" onClick={copyConfig}>复制配置</Button>
									<Button type="primary" onClick={exportConfig}>保存简历</Button>
									<Upload accept=".json" showUploadList={false} beforeUpload={importConfig}>
										<Button className="btn-upload">导入配置</Button>
									</Upload>
									<Button type="primary" onClick={() => window.print()}>下载 PDF</Button>
								</div>
							</Affix>
						</React.Fragment>
					)}
				</div>
			</Spin>
		</React.Fragment>
	);
};

export default Page;
