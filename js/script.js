$(document).ready(function() {

  var $black    = '#0A0908';
  var $white    = '#F7F7F7';
  var $darkGrey = '#494949';
  var $grey     = '#7C7A7A';
  var $cyan     = '#52D1DC';

    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['home', 'about', 'portfolio', 'contact'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: [],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: true,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: true,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        resetSliders: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: true,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: false,
        verticalCentered: true,
        paddingTop: '3em',
        paddingBottom: '10px',
        sectionsColor : [$black, $white, $cyan, $grey],
        fixedElements: '#header, .footer',
        // responsiveWidth: 479,
        // responsiveHeight: 600,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){
          new WOW().init();
        },
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    }); //full page
}); //document ready



$('h1, h2, h3, h4, h5, h6, span.spanFade').addClass("wow fadeInUp")
$('div.slide').addClass("wow fadeInRight").attr('data-wow-delay', '0.5s')


var delay = 0.5
$('ul.wowList li').each(function(){
  $(this).addClass("wow fadeInUp").attr('data-wow-delay', (delay+=0.1)+'s')
})