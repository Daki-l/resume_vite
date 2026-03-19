/**
 * 替代 store-to-local.ts：移除 lodash / react-intl / fetch-resume
 * - localStorage 读写简历配置
 * - 本地数据源（无 GitHub 拉取）
 */
import { message } from 'antd';
import type { ResumeConfig } from '@/components/types';
import { customAssign } from '@/helpers/customAssign';
import { RESUME_INFO } from '@/data/resume';

export const LOCAL_KEY = (user?: string) => `${user ?? ''}resume-config`;

let saveTimer: ReturnType<typeof setTimeout> | null = null;

export async function getConfig(
  _lang: string,
  _branch: string,
  user: string
): Promise<ResumeConfig> {
  // 先从本地 localStorage 读取
  if (typeof localStorage !== 'undefined') {
    const config = localStorage.getItem(LOCAL_KEY(user));
    try {
      const result = JSON.parse(config || '');
      if (result) return Promise.resolve(result);
    } catch (_) {}
  }
  // 没有则返回内置初始数据
  return Promise.resolve(
    customAssign({}, RESUME_INFO) as ResumeConfig
  );
}

export const saveToLocalStorage = (user: string, config: ResumeConfig) => {
  // 节流：5s 内只保存一次
  if (saveTimer) return;
  saveTimer = setTimeout(() => {
    saveTimer = null;
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(LOCAL_KEY(user), JSON.stringify(config));
      message.success('已缓存在本地', 0.65);
    }
  }, 5000);
  // 立即写，5s 后再允许下次
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(LOCAL_KEY(user), JSON.stringify(config));
  }
};
