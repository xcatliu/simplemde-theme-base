var initialValue = `# SimpleMDE Theme Base

*斜体*，**粗体**，~~被删除的文本~~。

标题：

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

行内代码：\`alert('Hello World')\`

块级代码：

\`\`\`js
var str = 'Hello World';
alert(str);
\`\`\`

块级引用：

> 码字 md —— 干净精致的 Markdown 编辑器

无序列表：

- 无序列表
- 无序列表
  - 二级无序列表
  - 二级无序列表
- 无序列表

有序列表：

1. 有序列表
2. 有序列表
  1. 二级有序列表
  2. 二级有序列表
3. 有序列表

水平分割线：

---

超链接：[Mobi.css](http://getmobicss.com/zh-cn/) 是一个轻量灵活的移动端 CSS 框架。

图片：

![Xcat](http://blog.xcatliu.com/assets/about/xcatliu_512.png)

表格：

| 第一列 | 第二列 | 第三列 |
| -------- | -------- | -------- |
| 1.1     | 1.2     | 1.3     |
| 2.1     | 2.2     | 2.3     |

HTML 代码：

<p style="color:red;">红色的字</p>

[SimpleMDE]: https://simplemde.com/
`;

var simplemde = new SimpleMDE({
  autosave: {
    enabled: true,
    uniqueId: 'simplemde-theme-base'
  },
  element: document.getElementById('simplemde-theme-base-textarea'),
  initialValue: initialValue,
  insertTexts: {
    image: ['![](http://', ')']
  },
  placeholder: 'Input your markdown',
  showIcons: [
    'heading-1',
    'heading-2',
    'heading-3'
  ]
});