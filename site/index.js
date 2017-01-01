var initialValue = `# SimpleMDE Theme Base`;

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
  placeholder: 'Input your markdown'
});