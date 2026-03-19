/**
 * 替代 fetch-resume.ts：不再从 GitHub 拉取，仅本地使用
 * 保留此文件供 getConfig 兼容性调用
 */
import type { ResumeConfig } from '@/components/types';
import { RESUME_INFO } from '@/data/resume';
import { customAssign } from './customAssign';

export async function fetchResume(
  _lang: string,
  _branch: string,
  _user: string
): Promise<ResumeConfig> {
  return Promise.resolve(customAssign({}, RESUME_INFO) as ResumeConfig);
}
