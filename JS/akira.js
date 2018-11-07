var waypointMoto = new Waypoint({
  element: document.getElementById('moto-waypoint'),
  handler: function() {
      document.querySelector('.subHeading img').classList.add('is-reached-moto');
  }
})

var waypointPerso = new Waypoint({
  element: document.getElementById('pill'),
  handler: function() {
    document.querySelector('#pill img').classList.add('is-reached-perso', 'is-reached-img');
    document.querySelector('#personnages h2').classList.add('is-reached-perso');
  },
  offset:400
})

var kanji = document.getElementById('kanji');
var waypointKanji = new Waypoint({
  element: kanji,
  handler: function(){
    kanji.classList.add('is-reached-kanji');
  },
  offset:500
})