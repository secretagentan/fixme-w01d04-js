var pluckTitles = function(films) {
  return films.map(function(film) {
    return film.title;
  });
};

var renderFilm = function(film) {
  var title = '<strong class="title">' + film.title + '</strong>';
  var actor = '<em> starring <span class="actor">' + film.actor + '</span></em>';
  return ('<div class="film">' + title + actor + '</div>');
}

var render = function(films) {
  var html = bondFilms.map(function(film) {
    return renderFilm(film);
  }).join('');
  return html;
}

document.querySelector('.bond-films').innerHTML = render(bondFilms);
