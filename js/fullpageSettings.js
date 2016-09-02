$(document).ready(function() {

  var $black    = '#0A0908';
  var $white    = '#F7F7F7';
  var $darkGrey = '#494949';
  var $grey     = '#7C7A7A';
  var $cyan     = '#52D1DC';

  var $window   = $(window);
  var $fullpage = $('#fullpage');

  var config = {
        //Navigation
        menu: '#menu',
        anchors:['home', 'about', 'portfolio', 'contact'],
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        fitToSectionDelay: 500,
        scrollBar: true,
        touchSensitivity: 20,
        normalScrollElements: '#aboutSection',

        //Design
        verticalCentered: false,
        controlArrows: false,
        paddingTop: '30px',
        paddingBottom: '30px',
        sectionsColor : [$black, $white, $white, $black],

        //events
        afterRender: function(){
          new WOW().init();
        },
    };

  $fullpage.fullpage(config)

}); //document ready




