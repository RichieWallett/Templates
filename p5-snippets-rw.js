// Tutorial t.ly/qqlI
// When you are writing multi-line code, you cannot use a tab to indent your code in the JSON syntax. You can only use 2 spaces to indent
/* Syntax
// Code Snippet 2
  "Snippet name": {
    "scope": "language1, language2" 
    "prefix": ["trigger word 1, trigger word 2"],
    "body": ["your code snippet"],
    "description": "description of the code"
  }
}
*/

{
// Code Snippet 1
  "Snippet name 01": {
    "scope": "javascript, webgl" 
    "prefix": "p5-transform",
    "body": [
      "push();",
      "pop();",
      ],
    "description": "This is a p5.js snippet about transform https://p5js.org/reference/#group-Transform"
  },

// Intelisence
"p5": {
  "prefix": "windowResized",
  "body": [
    "function windowResized() {",
    "  resizeCanvas(windowWidth, windowHeight);",
    "}"
  ],
  "description": "This is a p5.js snippet that allows the window to redraw on wisndow resize"
}

// Embed in markdown
```js
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
```

//Highlight.js
<pre>
  <code class="language-javascript">
    function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
  </code>
</pre>
