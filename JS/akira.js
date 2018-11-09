//Scrolling events for transitions
var waypointMoto = new Waypoint({
  element: document.getElementById('moto-waypoint'),
  handler: function() {
      document.querySelector('.subHeading img').classList.add('is-reached');
  }
})

var waypointPerso = new Waypoint({
  element: document.getElementById('pill'),
  handler: function(direction) {
    document.querySelector('#pill img').classList.add('is-reached', 'is-reached-img');
    document.querySelector('#personnages h2').classList.add('is-reached-h2');
  },
  offset:500
})

var kanji = document.getElementById('kanji');
var waypointKanji = new Waypoint({
  element: kanji,
  handler: function(){
    kanji.classList.add('is-reached');
  },
  offset:500
})

var waypointFooter = new Waypoint ({
  element: document.querySelector('footer'),
  handler: function(direction){
    document.getElementById('footerImage').classList.add('is-reached');
    document.querySelector('.personnalInfo ul').classList.add('is-reached');
    if (direction == 'down'){
      document.querySelector('.verticalMenu').classList.remove('is-reached');
    }
    else{
      document.querySelector('.verticalMenu').classList.add('is-reached');
    }
  },
  offset: 450
})


//Scrolling events for dots/links handling
var verticalMenu = document.querySelector('.verticalMenu');
var dot1 = document.getElementById('dot1');
var dot2 = document.getElementById('dot2');
var dot3 = document.getElementById('dot3');
var link1 = document.getElementById('link1');
var link2 = document.getElementById('link2');
var link3 = document.getElementById('link3');

var waypointPart1 = new Waypoint({
  element: document.getElementById('histoire'),
  handler: function(direction) {
    if (direction == 'down'){
      dot1.classList.add('disabled');
      verticalMenu.classList.add('is-reached');
      link1.removeAttribute('href');
    }
    else{
      link2.setAttribute('href', '#pill');
      verticalMenu.classList.remove('is-reached');
    }
  },
  offset:200
})

var waypointPart2 = new Waypoint({
  element: document.getElementById('pill'),
  handler: function(direction) {
    if (direction == 'down'){
      dot1.classList.remove('disabled');
      dot2.classList.add('disabled');
      link1.setAttribute('href', '#histoire');
      link2.removeAttribute('href');
    }
    else
    {
      dot1.classList.add('disabled');
      dot2.classList.remove('disabled');
      link1.removeAttribute('href');
      link2.setAttribute('href', '#pill');
    }
  },
  offset:100
})

var waypointPart3 = new Waypoint({
  element: kanji,
  handler: function(direction){
    if (direction == 'down'){
    link2.setAttribute('href', '#pill');
    link3.removeAttribute('href');
    dot2.classList.remove('disabled');
    dot3.classList.add('disabled');
    }
    else{
      dot2.classList.add('disabled');
      dot3.classList.remove('disabled');
      link2.removeAttribute('href');
      link3.setAttribute('href', '#analyse');
    }
  },
  offset:220
})

var waypointLastPart = new Waypoint({
  element: document.querySelector('footer'),
  handler: function (direction){
    if (direction == 'down'){
      dot3.classList.remove('disabled');
      link3.setAttribute('href', '#analyse')
    }
    else{
      dot3.classList.add('disabled');
      link3.removeAttribute('href');
    }
  },
    offset: 150
})
