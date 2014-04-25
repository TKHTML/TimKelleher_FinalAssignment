
$(function() {
  var header = $('header');
  var backgrounds = ['url(images/headerbg-1.jpg)',
  'url(images/headerbg-2.jpg)',
  'url(images/headerbg-3.jpg)',
  'url(images/headerbg-4.jpg)',];
var current = 0;

function nextBackground() {
  header.css(
   'background',
    backgrounds[current = ++current % backgrounds.length]
 );

 setTimeout(nextBackground, 4500);
 }
 setTimeout(nextBackground, 4500);
   header.css('background', backgrounds[0]);
 });