var initialValue = `# Intro
Go ahead, play around with the editor! Be sure to check out **bold** and *italic* styling, or even [links](https://google.com). You can type the Markdown syntax, use the toolbar, or use shortcuts like \`cmd-b\` or \`ctrl-b\`.

## Lists
Unordered lists can be started using the toolbar or by typing \`* \`, \`- \`, or \`+ \`. Ordered lists can be started by typing \`1. \`.

#### Unordered
* Lists are a piece of cake
* They even auto continue as you type
* A double enter will end them
* Tabs and shift-tabs work too

#### Ordered
1. Numbered lists...
2. ...work too!

## What about images?
![Yes](https://i.imgur.com/sZlktY7.png)

## Others

### Code blocks

\`\`\`js
var str = 'Hello World';
alert(str);
\`\`\`

### Blockquotes

> The base theme for [SimpleMDE](https://simplemde.com/), you can easily create your custom theme based on this.

### Horizontal rules

---

### Tables

| First | Second | Third |
| ----- | ------ | ----- |
| 1.1   | 1.2    | 1.3   |
| 2.1   | 2.2    | 2.3   |

### HTML codes

<p><span style="color:red">Red text</span> and <mark>marked text</mark>.</p>`;

var simplemde = new SimpleMDE({
  element: document.getElementById('simplemde-theme-base-textarea'),
  initialValue: initialValue
});
