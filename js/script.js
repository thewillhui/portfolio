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
        sectionsColor : [$black, $white, $grey, $black],
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
        paddingBottom: '3em',
        sectionsColor : [$black, $white, $grey, $black],
    }

  $window.width() >= 375 ? $fullpage.fullpage(normalConfig) : $fullpage.fullpage(smlScreenConfig);
}); //document ready


// add animations to all elements
$('h1, h2, h3, h4, h5, h6, span.spanFade, p, img').addClass("wow fadeInUp");
$('div.slide').addClass("wow fadeInRight").attr('data-wow-delay', '0.5s');

var delay = 0.5
$('ul.wowList li').each(function(){
  $(this).addClass("wow fadeInUp").attr('data-wow-delay', (delay+=0.1)+'s')
})

