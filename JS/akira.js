//Scrolling events
var waypointMoto = new Waypoint({
  element: document.getElementById('moto-waypoint'),
  handler: function() {
      document.querySelector('.subHeading img').classList.add('is-reached-moto');
  }
})


var waypointSideMenu = new Waypoint({
element: document.getElementById('histoire'),
handler: function() {
  document.querySelector('.verticalMenu').classList.toggle('is-reached');
}
})

var waypointPerso = new Waypoint({
  element: document.getElementById('pill'),
  handler: function() {
    document.querySelector('#pill img').classList.add('is-reached', 'is-reached-img');
    document.querySelector('#personnages h2').classList.add('is-reached');
  },
  offset:500
})

var kanji = document.getElementById('kanji');
var waypointKanji = new Waypoint({
  element: kanji,
  handler: function(){
    kanji.classList.add('is-reached-kanji');
  },
  offset:500
})

var waypointFooter = new Waypoint ({
  element: document.querySelector('footer'),
  handler: function(){
    document.getElementById('footerImage').classList.add('is-reached-personnalInfo');
    document.querySelector('.personnalInfo ul').classList.add('is-reached-personnalInfo');
    document.querySelector('.verticalMenu').classList.toggle('is-reached');
  },
  offset: 400
})
