// Selects the <div> with ID "app"
var app = document.querySelector('#app');

// Creates a <ul> tag in the html body
var authorsList = document.createElement('ul');

// Adds class: "authors" to the <ul> elements in authorsList
authorsList.classList.add('authors');

// Stores author names into an array
var authors = [
  'Haruki Murakami',
  'Kenzaburo Oe',
  'Yukio Mishima'
];

// Creates <li> element
function renderLiTag(name) {
  return '<li class="author">' + name + '<li>';
};
// Invokes renderLiTag() function
renderLiTag(name);

//
function render(authors) {
  var liTags = authors.map(function(author) {
    return renderLiTag(author);
  });
  var html = liTags.join('');
  return html;
};
// Invokes render() function
render(authors);

authorsList.innerHTML = render[authors];
app.appendChild(authorsList);
