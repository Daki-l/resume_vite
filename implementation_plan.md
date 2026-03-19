# resume-master 最小依赖重构方案

## 背景

原项目使用 **Gatsby + pnpm + 50+ 依赖**，`node_modules` 约 800MB。  
目标：**保留 React + Ant Design 组件体系**，去掉 Gatsby，改用 **Vite + npm**，最小化依赖。

## 依赖对比

| 类别 | 原来 | 重构后 |
|------|------|--------|
| 构建工具 | gatsby (含~300个传递依赖) | **vite** (轻量) |
| React | react 17 + react-dom | react 18 + react-dom |
| UI组件库 | antd 4 + @ant-design/icons | **antd 5**（CSS-in-JS，无需 less） |
| 国际化 | react-intl | ❌ 移除，纯中文 |
| 工具类 | lodash-es / query-string / classnames / array-move | ❌ 原生 JS 替代 |
| URL 压缩分享 | json-url (lzma) | ❌ 移除 |
| 颜色选择器 | react-color | ✅ antd 5 内置 ColorPicker |
| 拖拽排序 | react-dnd | ❌ 移除（表单顺序固定） |
| SEO | react-helmet | ❌ Vite index.html 直接设置 |
| 包管理器 | pnpm | **npm** |
| 代码规范 | husky / lint-staged / prettier | ❌ 移除 |
| 部署 | gh-pages / gatsby build | `npm run build`（vite build） |
| 其他移除 | cross-env / cross-fetch / react-svg / gatsby-plugin-* | ❌ 全部移除 |

**重构后 dependencies（3个）：** `react` `react-dom` `antd`  
**重构后 devDependencies（5个）：** `vite` `@vitejs/plugin-react` `typescript` `@types/react` `@types/react-dom`

## 代码变更

### 新增 / 替换

#### [NEW] `vite.config.ts`
```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
  resolve: { alias: { '@': '/src' } },
});
```

#### [NEW] `index.html`
Vite 标准入口，替代 Gatsby 页面路由。

#### [MODIFY] [package.json](file:///F:/zhuomian/user/lin/project/tools/simple-resume/package.json)
替换脚本：`dev` → `vite`，[build](file:///F:/zhuomian/user/lin/project/config/generate_resumes.py#197-275) → `vite build`，`preview` → `vite preview`

#### [MODIFY] [src/pages/index.tsx](file:///F:/zhuomian/user/lin/project/tools/resume-master/src/pages/index.tsx)
- 移除 `react-helmet`、`react-intl`、`gatsby-*` 相关代码
- 简化为标准 React 组件入口

#### [NEW] `src/main.tsx`
Vite 标准入口替代 gatsby-browser（挂载 `<App />`）

#### [MODIFY] [src/components/index.tsx](file:///F:/zhuomian/user/lin/project/tools/resume-master/src/components/index.tsx)
- 移除 `lodash-es` → 用 `Object.assign` / `structuredClone` 替代
- 移除 `query-string` → 用 `URLSearchParams` 替代
- 移除 `json-url` → 移除 handleSharing 功能
- 移除 `react-intl` → 直接写中文字符串
- `react-color` → `<ColorPicker>` from antd 5

#### [MODIFY] `src/helpers/*.ts`
- [fetch-resume.ts](file:///F:/zhuomian/user/lin/project/tools/resume-master/src/helpers/fetch-resume.ts) → 改为从本地 `public/resume.json` 读取（无需 GitHub API）
- [store-to-local.ts](file:///F:/zhuomian/user/lin/project/tools/resume-master/src/helpers/store-to-local.ts) → 保留 localStorage 逻辑，移除 lodash
- [customAssign.ts](file:///F:/zhuomian/user/lin/project/tools/resume-master/src/helpers/customAssign.ts) → 用原生 JS 重写（移除 lodash）

#### [DELETE] 以下文件/目录
- [gatsby-config.js](file:///F:/zhuomian/user/lin/project/tools/resume-master/gatsby-config.js)、[gatsby-node.js](file:///F:/zhuomian/user/lin/project/tools/resume-master/gatsby-node.js)
- [i18n.config.js](file:///F:/zhuomian/user/lin/project/tools/resume-master/i18n.config.js)、[i18n.formatter.js](file:///F:/zhuomian/user/lin/project/tools/resume-master/i18n.formatter.js)
- `src/i18n/` 目录
- [.babelrc](file:///F:/zhuomian/user/lin/project/tools/resume-master/.babelrc)、[.eslintrc.js](file:///F:/zhuomian/user/lin/project/tools/resume-master/.eslintrc.js)、[.prettierrc](file:///F:/zhuomian/user/lin/project/tools/resume-master/.prettierrc)、[.prettierignore](file:///F:/zhuomian/user/lin/project/tools/resume-master/.prettierignore)、[.eslintignore](file:///F:/zhuomian/user/lin/project/tools/resume-master/.eslintignore)
- `.husky/`、`.github/`、`scripts/`
- [pnpm-lock.yaml](file:///F:/zhuomian/user/lin/project/tools/resume-master/pnpm-lock.yaml)
- [tsconfig.json](file:///F:/zhuomian/user/lin/project/tools/resume-master/tsconfig.json) → 换为 Vite 标准 tsconfig

### [NO CHANGE] 保留不动
- `src/components/Resume/` 三套模板组件
- `src/components/Drawer/` 编辑器抽屉
- `src/components/FormCreator/` 表单生成器
- `src/components/Avatar/`
- [src/data/resume.ts](file:///F:/zhuomian/user/lin/project/tools/resume-master/src/data/resume.ts)（初始数据）
- `src/helpers/` 大部分逻辑
- `static/` 目录（作为 `public/` 复用）

## 验证计划

```bash
# 1. 安装依赖
npm install
# 期望：8 个包，数秒完成

# 2. 开发模式
npm run dev
# 期望：Vite 在 <1s 内启动

# 3. 构建
npm run build
# 期望：dist/ 目录生成
```

浏览器验证：编辑器表单、预览、主题切换、导入/导出JSON、下载PDF。
