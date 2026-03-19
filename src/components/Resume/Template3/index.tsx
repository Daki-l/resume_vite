import React from 'react';
import { Rate, Tag, Badge, Card } from 'antd';
import {
  PhoneFilled, MailFilled, GithubFilled, ZhihuCircleFilled,
  TrophyFilled, CheckCircleFilled, ScheduleFilled, EnvironmentFilled,
  HeartFilled, CrownFilled,
} from '@ant-design/icons';
import { getDefaultTitleNameMap } from '@/data/constant';
import type { ResumeConfig, ThemeConfig } from '../../types';
import './index.less';

type Props = { value: ResumeConfig; theme: ThemeConfig };

const wrapper = ({ title, color }: { id?: string; title?: string; color: string }) =>
  (children: React.ReactNode) => (
    <section>
      <div className="section-header">
        <h1 style={{ background: color }}>{title}</h1>
      </div>
      <div className="section-body">{children}</div>
    </section>
  );

const CardWrapper: React.FC<{ title: React.ReactNode; className: string; color: string; children?: React.ReactNode }> = ({ title, color, className, children }) => (
  <Badge.Ribbon text={<div className="section-title">{title}</div>} color={color} placement="start">
    <Card className={className}>{children}</Card>
  </Badge.Ribbon>
);

export const Template3: React.FC<Props> = ({ value, theme }) => {
  const profile       = value?.profile;
  const titleNameMap  = value?.titleNameMap || getDefaultTitleNameMap();
  const educationList = value?.educationList || [];
  const workExpList   = value?.workExpList   || [];
  const projectList   = value?.projectList   || [];
  const skillList     = value?.skillList     || [];
  const awardList     = value?.awardList     || [];
  const workList      = value?.workList      || [];
  const aboutme       = (value?.aboutme?.aboutme_desc || '').split('\n');

  return (
    <div className="template3-resume resume-content">
      <div className="basic-info">
        {/* 个人信息 */}
        <div className="profile">
          {profile?.name && <div className="name">{profile.name}</div>}
          <div className="profile-list">
            {profile?.mobile     && <div className="mobile"><PhoneFilled     style={{ color: theme.color, opacity: 0.85 }} /> {profile.mobile}</div>}
            {profile?.email      && <div className="email"><MailFilled        style={{ color: theme.color, opacity: 0.85 }} /> {profile.email}</div>}
            {profile?.github     && <div className="github"><GithubFilled     style={{ color: theme.color, opacity: 0.85 }} /> <span style={{ cursor: 'pointer' }} onClick={() => window.open(profile.github)}>{profile.github}</span></div>}
            {profile?.zhihu      && <div className="github"><ZhihuCircleFilled style={{ color: theme.color, opacity: 0.85 }} /> <span style={{ cursor: 'pointer' }} onClick={() => window.open(profile.zhihu)}>{profile.zhihu}</span></div>}
            {profile?.workExpYear && <div className="work-exp-year"><ScheduleFilled    style={{ color: theme.color, opacity: 0.85 }} /> 工作经验: {profile.workExpYear}</div>}
            {profile?.workPlace   && <div className="work-place"><EnvironmentFilled style={{ color: theme.color, opacity: 0.85 }} /> 期望工作地: {profile.workPlace}</div>}
            {profile?.positionTitle && <div className="expect-job"><HeartFilled style={{ color: theme.color, opacity: 0.85 }} /> 职位: {profile.positionTitle}</div>}
          </div>
        </div>

        {/* 教育背景 */}
        {educationList.length > 0 && (
          <CardWrapper title={titleNameMap.educationList} className="section section-education" color={theme.color}>
            {educationList.map((edu, i) => {
              const [start, end] = edu.edu_time;
              return (
                <div key={i} className="education-item">
                  <div>
                    <span><b>{edu.school}</b><span style={{ marginLeft: '8px' }}>{edu.major && <span>{edu.major}</span>}{edu.academic_degree && <span className="sub-info" style={{ marginLeft: '4px' }}>({edu.academic_degree})</span>}</span></span>
                    <span className="sub-info" style={{ float: 'right' }}>{start}{end ? ` ~ ${end}` : ' 至今'}</span>
                  </div>
                </div>
              );
            })}
          </CardWrapper>
        )}

        {/* 个人作品 */}
        {workList.length > 0 && (
          <CardWrapper title={titleNameMap.workList} className="section section-work" color={theme.color}>
            {workList.map((work, i) => (
              <div key={i}>
                <div><CrownFilled style={{ color: '#ffc107', marginRight: '8px' }} /><b className="info-name">{work.work_name}</b><a className="sub-info" href={work.visit_link}>访问链接</a></div>
                {work.work_desc && <div>{work.work_desc}</div>}
              </div>
            ))}
          </CardWrapper>
        )}

        {/* 自我介绍 */}
        <CardWrapper title="自我介绍" className="section section-aboutme" color={theme.color}>
          {aboutme.map((d, i) => <div key={i}>{d}</div>)}
        </CardWrapper>

        {/* 专业技能 */}
        {skillList.length > 0 && (
          <CardWrapper title={titleNameMap.skillList} className="section section-skill" color={theme.color}>
            {skillList.map((skill, i) => {
              const skills = (skill.skill_desc || '').split('\n').join('；');
              return skills ? (
                <div className="skill-item" key={i}>
                  <span><CheckCircleFilled style={{ color: '#ffc107', marginRight: '8px' }} />{skills}</span>
                  {skill.skill_level && <Rate allowHalf disabled value={skill.skill_level / 20} className="skill-rate" />}
                </div>
              ) : null;
            })}
          </CardWrapper>
        )}

        {/* 更多信息 */}
        {awardList.length > 0 && (
          <CardWrapper title={titleNameMap.awardList} className="section section-award" color={theme.color}>
            {awardList.map((award, i) => (
              <div key={i}>
                <TrophyFilled style={{ color: '#ffc107', marginRight: '8px' }} />
                <b className="info-name">{award.award_info}</b>
                {award.award_time && <span className="sub-info award-time">({award.award_time})</span>}
              </div>
            ))}
          </CardWrapper>
        )}
      </div>

      <div className="main-info">
        {/* 工作经历 */}
        {workExpList.length > 0 && wrapper({ title: titleNameMap?.workExpList, color: theme.color })(
          <div className="section section-work-exp">
            {workExpList.map((work, i) => {
              const [start = null, end = null] = typeof work.work_time === 'string' ? work.work_time.split(',') : work.work_time;
              return work ? (
                <div className="section-item" key={i}>
                  <div className="section-info">
                    <b className="info-name">{work.company_name}<span className="sub-info">{work.department_name}</span></b>
                    <span className="info-time">{start}{end ? ` ~ ${end}` : ' 至今'}</span>
                  </div>
                  <div className="work-description">{work.work_desc}</div>
                </div>
              ) : null;
            })}
          </div>
        )}

        {/* 项目经历 */}
        {projectList.length > 0 && wrapper({ title: titleNameMap?.projectList, color: theme.color })(
          <div className="section section-project">
            {projectList.map((project, i) => project ? (
              <div className="section-item" key={i}>
                <div className="section-info">
                  <b className="info-name">{project.project_name}<span className="info-time">{project.project_time}</span></b>
                  {project.project_role && <Tag color={theme.tagColor}>{project.project_role}</Tag>}
                </div>
                <div className="section-detail"><b>项目描述：</b><span>{project.project_desc}</span></div>
                <div className="section-detail"><b>主要工作：</b><span className="project-content">{project.project_content}</span></div>
              </div>
            ) : null)}
          </div>
        )}
      </div>
    </div>
  );
};
