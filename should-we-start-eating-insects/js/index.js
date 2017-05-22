// Uncomment to initialise WOW.js
new WOW().init();

$(document).ready(function(){
  $('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});

const map = document.getElementById('map');
const country = document.querySelectorAll('.insect');
const toolTip = document.getElementById('tooltip');
const message = toolTip.innerHTML;

// grab the country name and display
function showCountryName() {
    let countryName = event.target.getAttribute('title');
    toolTip.innerHTML = countryName;
}

// show the default text
function hideCountryName() {
  toolTip.innerHTML = message;
}

// set event listener on the map
map.addEventListener('mouseover', function(event){
  // if the mouse hovers over a country
  if (event.target.classList.contains('land')) {
    showCountryName();
  }
  else {
    hideCountryName();
  }
});
