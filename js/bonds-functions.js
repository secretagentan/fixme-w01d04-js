var renderFilm = function(film) {
  var title = '<strong class="title">' + film.title + '</strong>';
  var actor = '<em> starring <span class=".actor">' + filmactor "</span></em>';
  return ('<div class="film">' + title + actor + '</div>');
}

var render (films function() {
  var html = flims.map(function(film) {
    return renderFilm(film);
  })join('');
  return html;
}

document.querySelector('bond films').innerHTML = render(bondFilms);
