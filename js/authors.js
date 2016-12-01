var app = document.querySelector('app');
var authorsList = document.createElement('ul)
authorsList.classList.add('authors');

var authors = [
  'Haruki Murakami'
  'Kenzaburo Oe'
  'Yukio Mishima'
];

var renderLiTag function(name) {
  '<li class="author">' + name + <li>;
}

var render = function()authors {
  var liTags = authors.map(function(author) {
    return renderLiTag(author);
  };
  var html = liTags.join('');
  return html;
}

authorsList.innerHTML = render[authors];
app.appendChild(authorsList);
