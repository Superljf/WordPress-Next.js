## Project Structure

```bash
WordPress-Next.js/
├── app/                      # Next.js 应用主目录
│   ├── api/                  # API 路由处理
│   ├── posts/               # 博客文章相关页面
│   ├── pages/               # 静态页面
│   ├── layout.tsx           # 根布局组件
│   └── page.tsx             # 首页组件
├── components/              # React 组件
│   ├── craft/              # 设计系统组件
│   ├── nav/                # 导航相关组件
│   ├── posts/              # 文章相关组件
│   ├── theme/              # 主题相关组件
│   └── ui/                 # UI 通用组件
├── lib/                    # 工具库和函数
│   ├── utils.ts           # 通用工具函数
│   ├── wordpress.ts       # WordPress API 函数
│   └── wordpress.d.ts     # WordPress 类型定义
├── public/                 # 静态资源文件
├── styles/                 # 样式文件
├── types/                  # 类型定义文件
├── menu.config.ts         # 菜单配置
└── site.config.ts         # 站点配置
```
