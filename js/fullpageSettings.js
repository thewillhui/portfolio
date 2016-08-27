$(document).ready(function() {

  var $black    = '#0A0908';
  var $white    = '#F7F7F7';
  var $darkGrey = '#494949';
  var $grey     = '#7C7A7A';
  var $cyan     = '#52D1DC';

  var $window   = $(window);
  var $fullpage = $('#fullpage');

  var normalConfig = {
        //Navigation
        menu: '#menu',
        anchors:['home', 'about', 'portfolio', 'contact'],
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        fitToSectionDelay: 1000,
        scrollBar: true,
        touchSensitivity: 100,

        //Design
        verticalCentered: false,
        controlArrows: false,
        paddingTop: '3em',
        paddingBottom: '10px',
        sectionsColor : [$black, $white, $white, $black],
        fixedElements: '#header, .footer',

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        afterRender: function(){
          new WOW().init();
        },
    };

  var smlScreenConfig = {
        //Navigation
        menu: '#menu',
        anchors:['home', 'about', 'portfolio', 'contact'],
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        autoScrolling: false,
        scrollOverflow: true,
        fitToSection: false,
        loopBottom: true,
        scrollOverflow: false,
        touchSensitivity: 20,

        //Design
        controlArrows: false,
        paddingTop: '3em',
        paddingBottom: '5em',
        sectionsColor : [$black, $white, $white, $black],
    }

  $window.width() >= 375 ? $fullpage.fullpage(normalConfig) : ($fullpage.fullpage(smlScreenConfig), $('#aboutSection, #portfolioSection').addClass("fp-auto-height"));
}); //document ready




