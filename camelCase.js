// CamelCase
// gets all text nodes
function getTextNodes() {
  var nodes = [];
  var walker = document.createTreeWalker(document, NodeFilter.SHOW_TEXT, null, null);
  var node = walker.nextNode();
  while (node) {
    nodes.push(node);
    node = walker.nextNode();
  }
  return nodes;
}

var textNodes = getTextNodes();

textNodes.forEach(function(textNode) {
  var text = textNode.textContent;

  if (text.indexOf(' ') !== -1) {
    var newText = camelize(text);

    textNode.textContent = newText;
  }
});
function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}