import React from 'react';
import { Rate, Tag } from 'antd';
import {
  PhoneFilled, MailFilled, GithubFilled, ZhihuCircleFilled,
  CheckCircleFilled, ScheduleFilled, EnvironmentFilled, HeartFilled, CrownFilled,
} from '@ant-design/icons';
import { getDefaultTitleNameMap } from '@/data/constant';
import { Avatar } from '../../Avatar';
import type { ResumeConfig, ThemeConfig } from '../../types';
import './index.less';

type Props = { value: ResumeConfig; theme: ThemeConfig };

const Wrapper: React.FC<{ className?: string; title: React.ReactNode; color: string; children: React.ReactNode }> = ({ className, title, color, children }) => (
  <div className={`section ${className || ''}`}>
    <div className="section-title" style={{ color }}>
      <span className="title">{title}</span>
      <span className="title-addon" />
    </div>
    <div className="section-body">{children}</div>
  </div>
);

export const Template2: React.FC<Props> = ({ value, theme }) => {
  const profile       = value?.profile;
  const titleNameMap  = value?.titleNameMap || getDefaultTitleNameMap();
  const educationList = value?.educationList || [];
  const workExpList   = value?.workExpList   || [];
  const projectList   = value?.projectList   || [];
  const skillList     = value?.skillList     || [];
  const workList      = value?.workList      || [];
  const aboutme       = (value?.aboutme?.aboutme_desc || '').split('\n');

  return (
    <div className="template2-resume resume-content">
      <div className="basic-info">
        {/* 个人信息 */}
        <div className="profile">
          <div className="profile-info">
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
          {!value?.avatar?.hidden && <Avatar avatarSrc={value?.avatar?.src} className="avatar" shape={value?.avatar?.shape} size={value?.avatar?.size} />}
        </div>

        {/* 教育背景 */}
        {educationList.length > 0 && (
          <Wrapper title={titleNameMap.educationList} className="section-education" color={theme.color}>
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
          </Wrapper>
        )}

        {/* 个人作品 */}
        {workList.length > 0 && (
          <Wrapper title={titleNameMap.workList} className="section-work" color={theme.color}>
            {workList.map((work, i) => (
              <div key={i}>
                <div><CrownFilled style={{ color: '#ffc107', marginRight: '8px' }} /><b className="info-name">{work.work_name}</b><a className="sub-info" href={work.visit_link}>访问链接</a></div>
                {work.work_desc && <div>{work.work_desc}</div>}
              </div>
            ))}
          </Wrapper>
        )}

        {/* 自我介绍 */}
        <Wrapper title="自我介绍" className="section-aboutme" color={theme.color}>
          {aboutme.map((d, i) => <div key={i}>{d}</div>)}
        </Wrapper>

        {/* 专业技能 */}
        {skillList.length > 0 && (
          <Wrapper title={titleNameMap.skillList} className="section-skill" color={theme.color}>
            {skillList.map((skill, i) => {
              const skills = (skill.skill_desc || '').split('\n').join('；');
              return skills ? (
                <div className="skill-item" key={i}>
                  <span><CheckCircleFilled style={{ color: '#ffc107', marginRight: '8px' }} />{skills}</span>
                  {skill.skill_level && <Rate allowHalf disabled value={skill.skill_level / 20} className="skill-rate" />}
                </div>
              ) : null;
            })}
          </Wrapper>
        )}
      </div>

      <div className="main-info">
        {/* 工作经历 */}
        {workExpList.length > 0 && (
          <Wrapper className="experience" title={titleNameMap.workExpList} color={theme.color}>
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
          </Wrapper>
        )}

        {/* 项目经历 */}
        {projectList.length > 0 && (
          <Wrapper className="skill" title={titleNameMap.projectList} color={theme.color}>
            <div className="section section-project">
              {projectList.map((project, i) => project ? (
                <div className="section-item" key={i}>
                  <div className="section-info">
                    <b className="info-name">{project.project_name}<span className="info-time">{project.project_time}</span></b>
                    {project.project_role && <Tag color={theme.tagColor}>{project.project_role}</Tag>}
                  </div>
                  <div className="section-detail"><span>项目描述：</span><span>{project.project_desc}</span></div>
                  <div className="section-detail"><span>主要工作：</span><span className="project-content">{project.project_content}</span></div>
                </div>
              ) : null)}
            </div>
          </Wrapper>
        )}
      </div>
    </div>
  );
};
