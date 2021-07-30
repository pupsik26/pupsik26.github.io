$(document).ready(function(){
    $('.certificates_slider').slick({
        speed: 500,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png" alt="left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png" alt="left"></button>'
    });

    $('.menu_link').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - 50 }, 800);
        return false;
    });    
     
    new WOW().init();

});

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        const n = document.getElementById('animate_observ')
        n.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [1] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.education');
  
  for (let elm of elements) {
    observer.observe(elm);
  }
 

