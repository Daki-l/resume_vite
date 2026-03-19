import type { ResumeConfig } from '@/components/types';

export function getDefaultTitleNameMap(_?: any): ResumeConfig['titleNameMap'] {
  return {
    educationList: '教育背景',
    workExpList: '工作经历',
    projectList: '项目经历',
    skillList: '个人技能',
    awardList: '更多信息',
    workList: '个人作品',
    aboutme: '自我介绍',
  };
}
