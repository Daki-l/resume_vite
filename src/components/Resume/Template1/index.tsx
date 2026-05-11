import React from 'react';
import { Rate, Tag } from 'antd';
import {
	MobileFilled, MailFilled, GithubFilled, ZhihuCircleFilled,
	TrophyFilled, CheckCircleFilled, ScheduleFilled, CrownFilled,
	EnvironmentFilled, HeartFilled,
} from '@ant-design/icons';
import { getDefaultTitleNameMap } from '@/data/constant';
import { getResumeModuleKeys } from '@/helpers/contant';
import { normalizeHttpUrl, openExternalUrl } from '@/helpers/sanitize';
import { Avatar } from '../../Avatar';
import type { ResumeConfig, ThemeConfig } from '../../types';
import './index.less';

type Props = { value: ResumeConfig; theme: ThemeConfig };

const getPublicImageUrl = (name: string) => `${import.meta.env.BASE_URL}images/${name}.png`;

const wrapper = ({ id, title, color }: { id?: string; title?: string; color: string }) =>
	(children: React.ReactNode) => (
		<section>
			<div className="section-header">
				{id && <img src={getPublicImageUrl(id)} alt="" width="26px" height="26px" />}
				<h1 style={{ background: color }}>{title}</h1>
			</div>
			<div className="section-body">{children}</div>
		</section>
	);

export const Template1: React.FC<Props> = ({ value, theme }) => {
	const profile = value?.profile;
	const titleNameMap = value?.titleNameMap || getDefaultTitleNameMap();
	const educationList = value?.educationList || [];
	const workExpList = value?.workExpList || [];
	const projectList = value?.projectList || [];
	const skillList = value?.skillList || [];
	const awardList = value?.awardList || [];
	const workList = value?.workList || [];
	const aboutme = (value?.aboutme?.aboutme_desc || '').split('\n');
	const moduleKeys = getResumeModuleKeys(value?.moduleOrder);
	const basicModuleKeys = moduleKeys.filter(key => !['workExpList', 'projectList'].includes(key));
	const mainModuleKeys = moduleKeys.filter(key => ['workExpList', 'projectList'].includes(key));

	const basicModuleRenderers: Record<string, () => React.ReactNode> = {
		profile: () => (
			<>
				{!value?.avatar?.hidden && (
					<Avatar avatarSrc={value?.avatar?.src} className="avatar" shape={value?.avatar?.shape} size={value?.avatar?.size} />
				)}
				<div className="profile">
					{profile?.name && <div className="name">{profile.name}</div>}
					<div className="profile-list">
						{profile?.mobile && <div className="email"><MobileFilled style={{ color: theme.color, opacity: 0.85 }} /> {profile.mobile}</div>}
						{profile?.email && <div className="email"><MailFilled style={{ color: theme.color, opacity: 0.85 }} /> {profile.email}</div>}
						{profile?.github && <div className="github"><GithubFilled style={{ color: theme.color, opacity: 0.85 }} /> <span style={{ cursor: 'pointer' }} onClick={() => openExternalUrl(profile.github)}>{profile.github}</span></div>}
						{profile?.zhihu && <div className="github"><ZhihuCircleFilled style={{ color: theme.color, opacity: 0.85 }} /> <span style={{ cursor: 'pointer' }} onClick={() => openExternalUrl(profile.zhihu)}>{profile.zhihu}</span></div>}
						{profile?.workExpYear && <div className="work-exp-year"><ScheduleFilled style={{ color: theme.color, opacity: 0.85 }} /> 工作经验: {profile.workExpYear}</div>}
						{profile?.workPlace && <div className="work-place"><EnvironmentFilled style={{ color: theme.color, opacity: 0.85 }} /> 期望工作地: {profile.workPlace}</div>}
						{profile?.positionTitle && <div className="expect-job"><HeartFilled style={{ color: theme.color, opacity: 0.85 }} /> 职位: {profile.positionTitle}</div>}
					</div>
				</div>
			</>
		),
		aboutme: () => aboutme.join('').trim() ? (
			<section className="section section-aboutme">
				<div className="section-title" style={{ color: theme.color }}>{titleNameMap?.aboutme}</div>
				{aboutme.map((d, i) => <div key={i}>{d}</div>)}
			</section>
		) : null,
		educationList: () => educationList.length > 0 ? (
			<section className="section section-education">
				<div className="section-title" style={{ color: theme.color }}>{titleNameMap?.educationList}</div>
				{educationList.map((edu, i) => {
					const [start, end] = edu.edu_time;
					return (
						<div key={i} className="education-item">
							<div><b>{edu.school}</b><span className="sub-info" style={{ float: 'right' }}>{start}{end ? ` ~ ${end}` : ' 至今'}</span></div>
							<div>{edu.major && <span>{edu.major}</span>}{edu.academic_degree && <span className="sub-info" style={{ marginLeft: '4px' }}>({edu.academic_degree})</span>}</div>
						</div>
					);
				})}
			</section>
		) : null,
		workList: () => workList.length > 0 ? (
			<section className="section section-work">
				<div className="section-title" style={{ color: theme.color }}>{titleNameMap?.workList}</div>
				{workList.map((work, i) => {
					const visitLink = normalizeHttpUrl(work.visit_link);

					return (
						<div key={i}>
							<div><CrownFilled style={{ color: '#ffc107', marginRight: '8px' }} /><b className="info-name">{work.work_name}</b>{visitLink && <a className="sub-info" href={visitLink} target="_blank" rel="noreferrer">访问链接</a>}</div>
							{work.work_desc && <div>{work.work_desc}</div>}
						</div>
					);
				})}
			</section>
		) : null,
		skillList: () => skillList.length > 0 ? (
			<section className="section section-skill">
				<div className="section-title" style={{ color: theme.color }}>{titleNameMap?.skillList}</div>
				{skillList.map((skill, i) => skill ? (
					<React.Fragment key={i}>
						<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
							<b className="info-name">{skill.skill_name}</b>
							<Rate allowHalf disabled value={(skill.skill_level || 0) / 20} className="skill-rate" />
						</div>
						{(skill.skill_desc || '').split('\n').map((d, j) => d ? (
							<div className="skill-detail-item" key={j}><CheckCircleFilled style={{ color: '#ffc107', marginRight: '8px' }} />{d}</div>
						) : null)}
					</React.Fragment>
				) : null)}
			</section>
		) : null,
		awardList: () => awardList.length > 0 ? (
			<section className="section section-award">
				<div className="section-title" style={{ color: theme.color }}>{titleNameMap?.awardList}</div>
				{awardList.map((award, i) => (
					<div key={i}>
						<TrophyFilled style={{ color: '#ffc107', marginRight: '8px' }} />
						<b className="info-name">{award.award_info}</b>
						{award.award_time && <span className="sub-info award-time">({award.award_time})</span>}
					</div>
				))}
			</section>
		) : null,
	};

	const mainModuleRenderers: Record<string, () => React.ReactNode> = {
		workExpList: () => workExpList.length > 0 ? wrapper({ id: 'work-experience', title: titleNameMap?.workExpList, color: theme.color })(
			<div className="section section-work-exp">
				{workExpList.map((work, i) => {
					const wt: any = work.work_time;
					const [start = null, end = null] = typeof wt === 'string'
						? wt.split(',') : (wt || []);
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
		) : null,
		projectList: () => projectList.length > 0 ? wrapper({ id: 'skill', title: titleNameMap?.projectList, color: theme.color })(
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
		) : null,
	};

	return (
		<div className="template1-resume resume-content">
			<div className="basic-info">
				{basicModuleKeys.map(key => (
					<React.Fragment key={key}>{basicModuleRenderers[key]?.()}</React.Fragment>
				))}
			</div>

			<div className="main-info">
				{mainModuleKeys.map(key => (
					<React.Fragment key={key}>{mainModuleRenderers[key]?.()}</React.Fragment>
				))}
			</div>
		</div>
	);
};
