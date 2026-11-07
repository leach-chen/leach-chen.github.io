# Leach Chen — 智能交互实验室

一个可以直接发布到 GitHub Pages 的静态网站。围绕 LLM、深度学习与神经网络，以曜黑、琥珀和薄荷青呈现三维神经网络、损失景观与注意力矩阵。没有第三方库、在线图片或字体依赖，不需要安装依赖和构建。桌面首屏会根据视窗高度排布，让标题、神经网络和完整的推理链路一起展示。

## 鼠标交互

- 移动到首屏网络附近：附近节点亮起，连线增强，视角随鼠标转动。
- 点击页面：触发扩散脉冲；在神经网络附近点击，可以看到节点依次被点亮。
- 移动鼠标：轻量粒子轨迹、附近节点连线，以及平滑跟随的细线光圈。
- 移动到项目卡片：卡片倾斜，局部光晕跟随；损失景观改变视角，注意力矩阵突出对应列。
- 移动到主要按钮：轻微的磁吸反馈。
- 首屏下方的推理链路：五个阶段自动演示；悬停预览，点击锁定，支持暂停、继续与重播。也可使用方向键、Home 和 End 切换阶段，手机直接点选。

手机使用自动播放的轻量动画，不启用鼠标特效。推理链路以 Token → Embedding → Attention → FFN → Output 展示简化的概念流程，实际模型中的 Transformer 模块会重复堆叠。所有图形都是概念可视化，不使用真实模型运行数据，也不发送模型请求。

## 本地预览

直接双击 `index.html` 即可。也可以在本文件夹运行 `python -m http.server 8080`，然后打开 http://localhost:8080 。

## 发布为 `xxx.github.io`

1. 使用 [leach-chen](https://github.com/leach-chen) 账号在 GitHub 创建公开仓库，名称为 `leach-chen.github.io`。
2. 将**本文件夹里的内容**上传到仓库根目录，让 `index.html` 直接位于仓库根目录。不要只上传外层 `github-pages` 文件夹。
3. 在仓库 **Settings → Pages → Build and deployment** 中选择 **Deploy from a branch**，分支选择 `main`，文件夹选择 `/ (root)`，保存。
4. 等 GitHub 完成发布后，访问 [https://leach-chen.github.io/](https://leach-chen.github.io/)。

如果仓库已存在，请先备份原网站，再替换需要的文件。若上传页面没有包含 `.nojekyll` 也没有关系：本网站也兼容默认的 Jekyll 静态发布。

## 改成你自己的主页

- **名称与介绍**：已设置为 `Leach Chen`，可以在 `index.html` 编辑页面标题、描述与介绍文字。
- **GitHub 联系地址**：两个联系入口均已设置为 [https://github.com/leach-chen](https://github.com/leach-chen)。
- **邮箱联系**：如果希望直接发邮件，将联系按钮的地址改成 `mailto:你的邮箱`，同时删除该链接上的 `target="_blank"`。
- **实验说明**：页面中的项目标题和分类在 `index.html`；弹窗中的详细介绍在 `neural.js` 的 `projects` 对象。
- **主题色**：编辑 `styles.css` 顶部的 `--orange`、`--bg`、`--ink`。
- **图标**：替换 `assets/favicon.svg`。

目前三个实验是随网站附带的概念可视化，可以直接保留，也可以替换成自己的真实项目。网站没有表单和服务器，不会收集访客信息。

## 动效与兼容

支持桌面、平板与手机。系统启用“减少动态效果”时显示静态图形，停止动画和鼠标动效；离开可视区域的图形暂停绘制，切换浏览器标签页时暂停动画。全部图形使用 Canvas 2D，不依赖 WebGL。分享按钮在 HTTPS / localhost 下复制网页地址；直接打开本地文件时会提示先发布网站。

推荐使用当前版本的 Chrome、Edge、Firefox 或 Safari。
