import type { ResumeConfig } from '@/components/types';

/** 初始化常量 */
export const RESUME_INFO: ResumeConfig = {
	avatar: {
		src: undefined,
		hidden: false,
	},
	profile: {
		name: 'xxx',
		email: '137******@163.com',
		mobile: '137********',
		github: 'https://github.com/daki-l',
		zhihu: '',
		workExpYear: '',
		workPlace: '上海',
		positionTitle: '前端工程师',
	},
	"educationList": [
		{
			"edu_time": ["2013.09", "2017.06"],
			"school": "本科院校",
			"major": "计算机科学与技术",
			"academic_degree": "本科"
		}
	],
	"awardList": [
		{
			"award_info": "主导大中型 SaaS 平台 Vue 3 架构升级，实现数百家连锁门店业务平滑迁移，前端性能提升 60%",
			"award_time": "2024"
		},
		{
			"award_info": "落地 AI Copilot 工作流与 SSE 流式交互，利用 AI 辅助编码使基础 UI 交付效率提升 300%",
			"award_time": "2025"
		},
		{
			"award_info": "设计前端多态跨端统一架构，实现同一套代码支撑 3 种产品形态，团队研发效能提升 40%",
			"award_time": "2022"
		}
	],
	"workExpList": [
		{
			"company_name": "xxx科技有限公司",
			"department_name": "前端研发部",
			"work_time": ["2020.03", "至今"],
			"work_desc": "1. 作为前端核心骨干，负责公司主力 SaaS 产品线架构设计与技术演进，支撑上万家门店的高并发日常流转\n2. 负责前端业务多态架构规划，设计满足「标准版/小店通/移动端」等多产品线并行的统一前端底座\n3. 主导跨代际技术升级（Vue 2 至 Vue 3），制定渐进式迁移方案、建立 TypeScript 规范并平稳落地\n4. 搭建并维护前端工程化基建（统一业务组件库、自动化构建、性能监控），显著缩短新需求交付周期\n5. 积极探索 AI 技术在业务场景与前端开发流中的落地，主导开发搭载大模型的智能小程序"
		},
		{
			"company_name": "腾讯科技有限公司",
			"department_name": "企业协作平台部",
			"work_time": ["2017.07", "2020.02"],
			"work_desc": "1. 参与 Kylin B2B 企业协作平台开发，服务腾讯内部 30,000+ DAU\n2. 基于内部 UI 框架层开发业务组件，封装高复用性的表单引擎、流程设计器等企业级复杂组件\n3. 负责前端性能优化与构建调优，建立本地 Mock 体系，将构建时间大幅缩短，提升联调效率"
		}
	],
	"skillList": [
		{
			"skill_name": "Vue.js / 前端框架",
			"skill_desc": "精通 Vue 2/3 生态及响应式底层原理，擅长处理大型 B 端表单、复杂状态管理及组件库架构搭建。",
			"skill_level": 95
		},
		{
			"skill_name": "SaaS 架构设计",
			"skill_desc": "拥有丰富的多租户（Multi-tenant）、多品牌门店权限隔离、动态路由、字典配置化架构设计经验。",
			"skill_level": 92
		},
		{
			"skill_name": "微信小程序开发",
			"skill_desc": "精通原生小程序开发，熟练应用分包加载、全局状态管理（MobX）及跨端兼容与首屏秒开优化。",
			"skill_level": 90
		},
		{
			"skill_name": "前端工程化",
			"skill_desc": "熟练使用 Vite/Webpack 进行构建调优，具备搭建前端质量监控体系、CI/CD 及规范化脚手架的能力。",
			"skill_level": 90
		},
		{
			"skill_name": "AI 交互落地与工具提效",
			"skill_desc": "熟练掌握 SSE 长连接流式通信、长文本动态重绘。熟练运用 AI 编码助手大幅提升前端基础研发能效。",
			"skill_level": 88
		},
		{
			"skill_name": "JavaScript / TypeScript",
			"skill_desc": "扎实的 JS 基础，熟练应用 TypeScript 进行复杂类型体操与业务类型系统构建，有效降低运行时异常。",
			"skill_level": 88
		}
	],
	"projectList": [
		{
			"project_name": "xxx AI — 微信小程序（AI 场景与工程探索）",
			"project_role": "前端核心开发者",
			"project_time": "2025.10 - 至今",
			"project_desc": "基于原生小程序开发的 AI 美发助手平台，集成智能对话与多模态图像生成功能，并作为团队「AI 辅助研发提效」的标杆试验项目。",
			"project_content": "【项目亮点与行动】\n★ AI 研发流提效：运用 Cursor 等 AI 辅助工具进行页面框架与基础逻辑生成，将基础 UI 开发效率提升 300%\n★ 攻克 AI 交互难点：手动介入处理复杂的 SSE（Server-Sent Events）流式传输，解决打字机效果、Markdown 动态富文本渲染及多轮会话状态管理\n★ 多品牌数据隔离架构：基于 MobX 构建跨页面状态管理方案，设计并实现了同一账户在多品牌连锁间切换访问的隔离机制与动态资源加载\n★ 工程化与性能优化：设计统一的三段式布局体系（page-header/content/footer），利用分包加载策略将业务模块拆分，确保在长列表与流式通信下的小程序性能底线\n\n【项目成果】\n• 成功落地具备复杂 AI 交互的 C 端产品，首屏性能及流式响应体验极佳\n• 验证了「AI 辅助编码 + 人工把控核心架构」的现代前端开发模式，大幅缩短项目冷启动周期"
		},
		{
			"project_name": "xxxx V2（SaaS 平台 Vue 3 重构）",
			"project_role": "前端架构负责人",
			"project_time": "2024.06 - 至今",
			"project_desc": "新一代美容行业 SaaS 管理底座，服务海量连锁门店。基于 Vue 3 + Vite 体系全面重构，解决历史技术债务并提升系统性能。",
			"project_content": "【项目亮点与行动】\n★ 架构升级演进：主导从 Vue 2 稳步迁移至 Vue 3 + Composition API + Pinia，制定渐进式重构方案以保障核心业务不中断\n★ 多租户配置体系：设计基于远程配置的多租户系统字典（chainMap[custId][module][config]），优雅满足不同连锁品牌的个性化差异诉求\n★ 组件库基建：抽象提炼并封装业务组件库，包含高频复用的动态表单、高级表格、弹窗等 30+ 核心组件\n★ 类型安全与体验优化；引入 Vite 与 Socket.io 优化本地开发热更新及线上实时消息推送机制\n\n【项目成果】\n• 系统性能呈指数级提升：开发环境冷启动时间从 45s 断崖式降至 3s，线上首屏加载时间优化至 1.8s\n• 研发体验改善：TS 类型覆盖率达 85%，运行时 Bug 率下降 40%；新功能交付效率提升 50%"
		},
		{
			"project_name": "xxxx管理中心 Plus（多态统一前端架构）",
			"project_role": "前端骨干开发者",
			"project_time": "2020.10 - 2024.05",
			"project_desc": "面向行业的大型综合 SaaS 管理系统。支持标准版、小店通（mini）、移动支付等多产品形态并行业务。",
			"project_content": "【项目亮点与行动】\n★ 多态统一架构：设计基于环境变量在构建时动态注入产品类型的方案，实现一套核心代码服务 3 种产品形态\n★ 动态路由与权限域：开发极具扩展性的动态路由加载机制，基于细粒度的自定义权限指令（v-permission）实现按钮级与元素级的渲染拦截\n★ 业务服务层解耦：重构 API 架构，建立按业务域划分的服务层（services/），实现 auth、bill 等基础能力的跨项目复用\n★ 主题与打包优化：集成 webpack-theme-color-replacer 实现 10+ 品牌色动态无缝切换；通过 splitChunks 精细化拆包\n\n【项目成果】\n• 极致降本增效：多产品线代码复用率高达 70%，维护成本陡降 65%\n• 前端包体积大幅瘦身，从 8MB 精简至 3.2MB，路由配置代码由于动态化改造减少了 60%"
		},
		{
			"project_name": "Kylin B2B 企业协作平台（腾讯）",
			"project_role": "前端开发工程师",
			"project_time": "2017.07 - 2020.02",
			"project_desc": "基于内部 KylinUI 框架构建的企业级 B2B 协作平台，承载复杂的企服流转逻辑，服务内部 30,000+ 高频活跃用户。",
			"project_content": "【项目亮点与行动】\n★ 复杂业务组件封装：深挖内部 UI 框架，手写研发高度定制化的 FormItemRuleGenerator、流程设计器等复杂交互组件\n★ API 代理与联调基建：实现多环境、多租户的复杂 API 代理配置；建立 Mock 数据体系，彻底解耦前后端联调依赖\n★ 性能与状态调优：引入 store2 替代重型 Vuex 以处理轻量级状态；通过 babel-plugin-dynamic-import 实施路由懒加载与按需打包\n\n【项目成果】\n• 系统首屏加载时间从 5.8s 大幅优化至 2.3s\n• Webpack 构建耗时从 8 分钟压缩至 3 分钟，团队联调及并行开发效率提升 30%"
		}
	],
	"aboutme": {
		"aboutme_desc": "8 年深耕前端研发领域，兼具大厂严谨的工程规范（腾讯）与 SaaS 独角兽企业（xxx）应对复杂业务架构的实战能力。专注于大中型 B 端/企业级 SaaS 平台的架构演进、性能调优及多租户（Multi-tenant）体系搭建。\n\n技术底座扎实：精通 Vue 生态及微信小程序矩阵开发。主导过超大规模系统的 Vue 3 渐进式跨代升级，以及支撑「多产品形态、多品牌连锁」的前端统一架构设计。善于通过封装组件库、制定动态路由及微权限策略，将系统的维护成本降低 60% 以上。\n\n拥抱前沿与提效：对 AI 时代的研发模式演进具有敏锐嗅觉。熟练掌握大型 LLM 模型在前端的工程落地（如 SSE 流式传输、长文本渲染），并能熟练驾驭 AI 辅助工具（Cursor等）将基础前端研发效能提升 300%。\n\n我是业务驱动型的技术骨干，追求代码质量与极端场景下的性能表现。期待加入一家注重技术落地与业务长期价值的优秀企业，共同打磨具有行业壁垒的高品质产品。"
	},
	// 国际化
	locales: {
		'en-US': {
			"educationList": [
				{
					"edu_time": ["2013.09", "2017.06"],
					"school": "University Name",
					"major": "Computer Science and Technology",
					"academic_degree": "Bachelor's Degree"
				}
			],
			"awardList": [
				{
					"award_info": "Led the Vue 3 architecture upgrade for a large-scale SaaS platform, enabling a smooth migration for hundreds of chain stores and boosting frontend performance by 60%.",
					"award_time": "2024"
				},
				{
					"award_info": "Implemented AI Copilot workflows and SSE streaming interactions, leveraging AI-assisted coding to increase basic UI delivery efficiency by 300%.",
					"award_time": "2025"
				},
				{
					"award_info": "Designed a multi-product unified frontend architecture, enabling a single codebase to support 3 product variants and increasing team R&D efficiency by 40%.",
					"award_time": "2022"
				}
			],
			"workExpList": [
				{
					"company_name": "xxx Technology Co., Ltd.",
					"department_name": "Frontend R&D Department",
					"work_time": ["2020.03", "Present"],
					"work_desc": "1. Acted as a core frontend engineer, responsible for the architecture design and technical evolution of the main SaaS product line, supporting the high-concurrency daily operations of over 10,000 stores.\n2. Planned the multi-product frontend architecture, designing a unified frontend foundation to support concurrent product lines like Standard Edition, Mini Edition, and Mobile POS.\n3. Led the cross-generation technology upgrade (Vue 2 to Vue 3), formulated a progressive migration plan, established TypeScript standards, and ensured a smooth deployment.\n4. Built and maintained frontend engineering infrastructure (unified business component library, automated CI/CD builds, performance monitoring), significantly shortening the delivery cycle of new features.\n5. Actively explored the application of AI technologies in business scenarios and frontend workflows, leading the development of a smart Mini Program powered by Large Language Models (LLMs)."
				},
				{
					"company_name": "Tencent Technology Co., Ltd.",
					"department_name": "Enterprise Collaboration Platform Dept.",
					"work_time": ["2017.07", "2020.02"],
					"work_desc": "1. Participated in the development of the Kylin B2B Enterprise Collaboration Platform, serving over 30,000 Daily Active Users (DAU) internally.\n2. Developed business components based on the internal UI framework, encapsulating highly reusable enterprise-level complex components such as form engines and workflow designers.\n3. Responsible for frontend performance optimization and build tuning, established a local Mock system, significantly reducing build times and improving API integration efficiency."
				}
			],
			"skillList": [
				{
					"skill_name": "Vue.js Ecosystem",
					"skill_desc": "Expert in Vue 2/3 ecosystem and reactive underlying principles, excelling in large-scale B2B dynamic forms, complex state management, and component library architecture.",
					"skill_level": 95
				},
				{
					"skill_name": "SaaS Architecture Design",
					"skill_desc": "Extensive experience in designing Multi-tenant systems, multi-brand store permission isolation, dynamic routing, and dictionary-configured architectures.",
					"skill_level": 92
				},
				{
					"skill_name": "WeChat Mini Program",
					"skill_desc": "Proficient in native Mini Program development, adept at applying sub-packaging, global state management (MobX), cross-platform compatibility, and first-screen instant loading optimization.",
					"skill_level": 90
				},
				{
					"skill_name": "Frontend Engineering",
					"skill_desc": "Proficient in Vite/Webpack build tuning, capable of building frontend quality monitoring systems, CI/CD pipelines, and standardized CLI scaffolding.",
					"skill_level": 90
				},
				{
					"skill_name": "AI Interaction & Tooling",
					"skill_desc": "Proficient in SSE (Server-Sent Events) long-connection streaming and dynamic rendering of long texts. Skilled in using AI coding assistants (Cursor/Copilot) to significantly boost R&D efficiency.",
					"skill_level": 88
				},
				{
					"skill_name": "JavaScript / TypeScript",
					"skill_desc": "Solid JS foundation; proficient in applying TypeScript for complex type gymnastics and business type system construction, effectively reducing runtime exceptions.",
					"skill_level": 88
				}
			],
			"projectList": [
				{
					"project_name": "xxx AI — WeChat Mini Program (AI & Engineering Exploration)",
					"project_role": "Core Frontend Developer",
					"project_time": "2025.10 - Present",
					"project_desc": "A native Mini Program-based AI hair styling assistant integrating smart dialogue and multi-modal image generation. Served as the benchmark project for the team's 'AI-assisted R&D efficiency' initiative.",
					"project_content": "【Highlights & Actions】\n★ AI R&D Efficiency: Utilized AI coding tools like Cursor to generate page frameworks and basic logic, boosting basic UI development efficiency by 300%.\n★ AI Interaction Challenges: Manually handled complex Server-Sent Events (SSE) streaming transmission, resolving typewriter effects, Markdown dynamic rich text rendering, and multi-round conversation state management.\n★ Multi-brand Data Isolation: Built a cross-page state management solution based on MobX, implementing an isolation mechanism and dynamic resource loading for switching between multiple brand chains under a single account.\n★ Performance Optimization: Designed a unified three-section layout system and utilized sub-packaging strategies to decouple business modules, ensuring performance baselines under long-list rendering and streaming communication.\n\n【Results】\n• Successfully delivered a B2C product with complex AI interactions, achieving excellent first-screen performance and streaming response experience.\n• Validated the modern frontend paradigm of 'AI-assisted coding + human-controlled core architecture', drastically shortening the project's cold start cycle."
				},
				{
					"project_name": "xxx Smart Beauty V2 (Vue 3 SaaS Platform Refactor)",
					"project_role": "Frontend Architecture Lead",
					"project_time": "2024.06 - Present",
					"project_desc": "Next-generation SaaS management foundation for the beauty industry, serving massive chain stores. Comprehensively refactored based on Vue 3 + Vite to resolve technical debt and enhance performance.",
					"project_content": "【Highlights & Actions】\n★ Architecture Upgrade: Led the steady migration from Vue 2 to Vue 3 + Composition API + Pinia, formulating a progressive refactoring plan to ensure core business continuity.\n★ Multi-tenant Configuration System: Designed a multi-tenant system dictionary based on remote configuration (chainMap[custId][module][config]), elegantly accommodating the personalized needs of different chain brands.\n★ Component Library Infrastructure: Abstracted and encapsulated a business component library, including 30+ core components such as dynamic forms, advanced tables, and modals with high reusability.\n★ Type Safety & Experience: Comprehensively introduced TypeScript; integrated Vite and Socket.io to optimize local Hot Module Replacement (HMR) and online real-time message pushing mechanisms.\n\n【Results】\n• Exponential Performance Leap: Development environment cold start time plummeted from 45s to 3s, and online first-screen loading time was optimized to 1.8s.\n• TS type coverage reached 85%, runtime bug rate dropped by 40%, and new feature delivery efficiency increased by 50%."
				},
				{
					"project_name": "xxx Management Center Plus (Multi-product Unified Architecture)",
					"project_role": "Core Frontend Developer",
					"project_time": "2020.10 - 2024.05",
					"project_desc": "A large-scale comprehensive SaaS management system supporting concurrent business lines across Standard Edition, Mini Edition, and Mobile Payment interfaces.",
					"project_content": "【Highlights & Actions】\n★ Multi-product Unified Architecture: Designed a solution to dynamically inject product types during build time via environment variables, enabling a single core codebase to serve 3 distinct product variants.\n★ Dynamic Routing & Permissions: Developed a highly extensible dynamic routing loading mechanism, implementing button-level and element-level rendering interception based on fine-grained custom permission directives (v-permission).\n★ Business Service Layer Decoupling: Refactored the API architecture by establishing a service layer (services/) divided by business domains, achieving cross-project reusability of basic capabilities like Auth and Billing.\n★ Theme & Build Optimization: Integrated webpack-theme-color-replacer to achieve seamless dynamic switching of 10+ brand colors; implemented precise code splitting via splitChunks.\n\n【Results】\n• Extreme Cost Reduction: Code reusability across multiple product lines reached 70%, and maintenance costs plummeted by 65%.\n• Frontend bundle size was significantly slimmed down from 8MB to 3.2MB, and routing configuration code was reduced by 60%."
				},
				{
					"project_name": "Kylin B2B Enterprise Collaboration Platform (Tencent)",
					"project_role": "Frontend Software Engineer",
					"project_time": "2017.07 - 2020.02",
					"project_desc": "An enterprise-level B2B collaboration platform built on the internal KylinUI framework, handling complex enterprise service workflows and serving 30,000+ highly active internal users.",
					"project_content": "【Highlights & Actions】\n★ Complex Component Encapsulation: Delved into the internal UI framework to hand-code highly customized complex interactive components such as FormItemRuleGenerator and workflow designers.\n★ API Proxy & Integration: Implemented complex API proxy configurations for multi-environment and multi-tenant setups; established a Mock data system to completely decouple frontend and backend integration dependencies.\n★ Performance & State Tuning: Introduced store2 to replace heavy-weight Vuex for lightweight state management; implemented route lazy loading and on-demand bundling via babel-plugin-dynamic-import.\n\n【Results】\n• System first-screen loading time was drastically optimized from 5.8s to 2.3s.\n• Webpack build time was compressed from 8 minutes to 3 minutes, boosting team parallel development efficiency by 30%."
				}
			],
			"aboutme": {
				"aboutme_desc": "8 years of deep-rooted experience in frontend R&D, combining the rigorous engineering standards of top-tier tech giants (Tencent) with the practical ability to handle complex business architectures from SaaS unicorns (xxx). Dedicated to the architectural evolution, performance tuning, and multi-tenant system construction of large-to-medium B2B/Enterprise SaaS platforms.\n\nSolid Technical Foundation: Expert in the Vue ecosystem and WeChat Mini Program matrix development. Led the progressive cross-generation Vue 3 upgrade for ultra-large-scale systems and designed the unified frontend architecture supporting 'multi-product variants and multi-brand chains'. Adept at reducing system maintenance costs by over 60% through component library encapsulation, dynamic routing formulation, and micro-permission strategies.\n\nEmbracing the Cutting Edge & Efficiency: Possess a keen sense for the evolution of R&D paradigms in the AI era. Proficient in the engineering implementation of Large Language Models (LLMs) on the frontend (e.g., SSE streaming, long text rendering), and highly skilled in leveraging AI coding assistants (like Cursor) to boost fundamental frontend R&D efficiency by 300%.\n\nI am a business-driven technical core member who pursues code quality and performance under extreme scenarios. I look forward to joining an outstanding enterprise that values technological implementation and long-term business value, working together to polish high-quality products with industry barriers."
			}
		},
	},
};
