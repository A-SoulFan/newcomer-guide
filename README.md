# pc-new-guide-line (v0.0.1)

>### 运行前安装
>>`npm install`
>### 实时调试
>>`npm run serve`
>### 打包
>>`npm run build`
>### 代码检测
>>`npm run lint`

## 项目地址
[https://gitee.com/asoul-fan/PcNewGuideLine](https://gitee.com/asoul-fan/PcNewGuideLine.git)

## 环境
* 使用 [Node.js 14.17.5](http://nodejs.cn/download/current/) 官网**LTS**版本
* 使用 [Ant Design of Vue](https://www.antdv.com/docs/vue/introduce-cn/)

## Commit时备注
* 增加从未有过的**功能**，即新增**功能性**提交：`<feat>: +提交说明`
* 不改变**功能**，即新增**非功能性**提交： `<refactor>: +提交说明`
* 优化之前的代码，即更新**功能性**提交： `<update>: +提交说明`
* 提交说明可以使用**中文**

## 分支规范
多分支开发遵从 [GITFLOW](https://datasift.github.io/gitflow/IntroducingGitFlow.html#:~:text=GitFlow%20is%20a%20branching%20model,and%20scaling%20the%20development%20team.) 规范

## 代码规范
* 变量命名优先遵循eslint+babel自带规范,若无提示,默认使用驼峰命名法(camelCase)
* **请不要随意格式化他人的文件**
* 在引入非官方依赖前需要联系负责人确认
* 新人提交的代码需要进行code review
* 引入了babel-plugin-import,在每次引用antd组件时需写成 `import { 组件名 } from 'ant-design-vue';`格式
