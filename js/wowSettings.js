// add animations to all elements
$('h1, h2, h3, h4, h5, h6, span.spanFade, p, img').addClass("wow fadeInUp");
// $('div.slide').addClass("wow fadeInRight").attr('data-wow-delay', '0.5s');

var delay = 0.5
$('ul.wowList li').each(function(){
  $(this).addClass("wow fadeInUp").attr('data-wow-delay', (delay+=0.1)+'s')
});

var delay2 = 0.5
$('ul.wowList.fa-ul li').each(function(){
  $(this).addClass("wow fadeInUp").attr('data-wow-delay', (delay2+=0.1)+'s')
});