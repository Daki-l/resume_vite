import React from 'react';
import {
  ProfileTwoTone,
  ContactsTwoTone,
  SmileTwoTone,
  TrophyTwoTone,
  TagsTwoTone,
  RocketTwoTone,
  ProjectTwoTone,
  ToolTwoTone,
  ScheduleTwoTone,
} from '@ant-design/icons';
import type { ResumeConfig } from '@/components/types';

export const MODULES = ({ titleNameMap }: { intl?: any; titleNameMap?: ResumeConfig['titleNameMap'] }) => {
  const defaults: Record<string, string> = {
    avatar: '头像设置',
    profile: '个人信息',
    educationList: '教育背景',
    aboutme: '自我介绍',
    awardList: '更多信息',
    workList: '个人作品',
    skillList: '专业技能',
    workExpList: '工作经历',
    projectList: '项目经历',
  };

  const icons: Record<string, React.ReactNode> = {
    avatar: <ContactsTwoTone />,
    profile: <ProfileTwoTone />,
    educationList: <ScheduleTwoTone />,
    aboutme: <SmileTwoTone />,
    awardList: <TrophyTwoTone />,
    workList: <ToolTwoTone />,
    skillList: <RocketTwoTone />,
    workExpList: <TagsTwoTone />,
    projectList: <ProjectTwoTone />,
  };

  return Object.keys(defaults).map(key => ({
    key,
    icon: icons[key],
    name: (titleNameMap && titleNameMap[key]) || defaults[key],
  }));
};

export const CONTENT_OF_MODULE = (_?: any) => ({
  avatar: [
    { type: 'checkbox', attributeId: 'hidden', displayName: '隐藏头像', formItemProps: { valuePropName: 'checked' }, cfg: { checked: false } },
    { type: 'input', attributeId: 'src', displayName: '头像地址', cfg: { placeholder: 'https://xxx.png' } },
    { type: 'select', attributeId: 'shape', displayName: '头像形状', cfg: { defaultValue: 'circle', options: [{ value: 'circle', label: '圆形' }, { value: 'square', label: '方形' }] } },
  ],
  profile: [
    { type: 'input', attributeId: 'name', displayName: '姓名', formItemProps: { rules: [{ required: true }] } },
    { type: 'input', attributeId: 'mobile', displayName: '手机号码', formItemProps: { rules: [{ required: true }] } },
    { type: 'input', attributeId: 'email', displayName: '邮箱', formItemProps: { rules: [{ required: true }] } },
    { type: 'input', attributeId: 'github', displayName: 'Github', cfg: { placeholder: 'https://github.com/xxx' } },
    { type: 'input', attributeId: 'zhihu', displayName: '知乎', cfg: { placeholder: 'https://zhihu.com/people/xxx' } },
    { type: 'input', attributeId: 'workExpYear', displayName: '工作经验' },
    { type: 'input', attributeId: 'workPlace', displayName: '期望工作地' },
    { type: 'input', attributeId: 'positionTitle', displayName: '职位' },
  ],
  educationList: [
    { type: 'input', attributeId: 'edu_time', displayName: '起始时间', formItemProps: { rules: [{ required: true }] } },
    { type: 'input', attributeId: 'school', displayName: '学校', formItemProps: { rules: [{ required: true }] } },
    { type: 'input', attributeId: 'major', displayName: '专业' },
    { type: 'input', attributeId: 'academic_degree', displayName: '学历' },
  ],
  projectList: [
    { type: 'input', attributeId: 'project_time', displayName: '起止时间', formItemProps: { rules: [{ required: true }] } },
    { type: 'input', attributeId: 'project_name', displayName: '项目名称' },
    { type: 'input', attributeId: 'project_role', displayName: '担任角色' },
    { type: 'textArea', attributeId: 'project_desc', displayName: '项目描述', cfg: { autoSize: { minRows: 6 }, showCount: true } },
    { type: 'textArea', attributeId: 'project_content', displayName: '主要工作', cfg: { autoSize: { minRows: 6 }, showCount: true }, formItemProps: { style: { marginTop: 25 } } },
  ],
  workExpList: [
    { type: 'input', attributeId: 'work_time', displayName: '起止时间', formItemProps: { rules: [{ required: true }] } },
    { type: 'input', attributeId: 'company_name', displayName: '公司名称', formItemProps: { rules: [{ required: true }] } },
    { type: 'input', attributeId: 'department_name', displayName: '部门' },
    { type: 'textArea', attributeId: 'work_desc', displayName: '职位或描述' },
  ],
  workList: [
    { type: 'input', attributeId: 'work_name', displayName: '作品名称' },
    { type: 'input', attributeId: 'work_desc', displayName: '作品描述' },
    { type: 'input', attributeId: 'visit_link', displayName: '作品链接' },
  ],
  skillList: [
    { type: 'input', attributeId: 'skill_name', displayName: '技能项' },
    { type: 'number', attributeId: 'skill_level', displayName: '掌握程度', cfg: { step: 20, min: 0, max: 100, formatter: (v: any) => `${v}%`, parser: (v: any) => v?.replace('%', '') } },
    { type: 'textArea', attributeId: 'skill_desc', displayName: '技能描述' },
  ],
  awardList: [
    { type: 'input', attributeId: 'award_time', displayName: '获奖时间', formItemProps: { rules: [{ required: true }] } },
    { type: 'input', attributeId: 'award_info', displayName: '奖项内容', formItemProps: { rules: [{ required: true }] } },
  ],
  aboutme: [
    { type: 'textArea', attributeId: 'aboutme_desc', displayName: '', cfg: { autoSize: { minRows: 4 }, showCount: true } },
  ],
});
