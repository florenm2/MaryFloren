$(function() {

  "use strict";

  /*===============================================
    Preloader
  ===============================================*/
  $(window).load(function () {
    $("body").addClass("loaded");
  });

  /*===============================================
    Scroll Spy
  ===============================================*/
  $('body').scrollspy({ 
    target: '.sticky-menu'
  });

  /*===============================================
    Smooth Scrolling
  ===============================================*/
  var htmlBody = $("html,body");

  $(".sticky-menu ul li a").on("click", function(e) {
      htmlBody.animate({scrollTop: $(this.hash).offset().top}, 800, "easeInOutQuart");  
    e.preventDefault();
  });

  /*===============================================
    MixItUp
  ===============================================*/
  $('#mix-container').mixItUp();

  /*===============================================
    Magnific Popup
  ===============================================*/
  $('.lightbox').magnificPopup({ 
    type:'inline',
    fixedContentPos: false,
    removalDelay: 100,
    closeBtnInside: true,
    preloader: false,
    mainClass: 'mfp-fade'
  });

  /*===============================================
    Owl Carousel Slider
  ===============================================*/
  // Blog Slider
  $("#blogSlider").owlCarousel({
    items:1,
    rewind:true,
    margin:30,
    dots:false,
    dotsSpeed:500,
    autoplay:false
  });

  // Custom Navigation of Blog
  var blogNavigation = $("#blogSlider");
  // Events
  $("#next").on("click", function(){
    blogNavigation.trigger('next.owl.carousel', [500]);
  })
  $("#prev").on("click", function(){
    blogNavigation.trigger('prev.owl.carousel', [500]);
  })
  // end Custom Navigation of Blog

  // Testimonial Slider
  $("#testimonialSlider").owlCarousel({
    items:1,
    rewind:true,
    margin:30,
    dots:true,
    dotsSpeed:500,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:4000, // 4 seconds
    autoplaySpeed:500 // 0.5 seconds
  });

  /*===============================================
    Contact Form
  ===============================================*/
  $("#contactform").on('submit',function(e) {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    if (name == '') {
      $("#name").css('border-color','rgba(255, 0, 0, 0.5)');
    }
    if (email == '') {
      $("#email").css('border-color','rgba(255, 0, 0, 0.5)');
    }
    if (message == '') {
      $("#message").css('border-color','rgba(255, 0, 0, 0.5)');
    }
    else {
      $.ajax({
        url:'contact_form.php',
        data:$(this).serialize(),
        type:'POST',
        success:function(data){
          $("#success").show().fadeIn(1000); //=== Show Success Message==
          $('#contactform').each(function(){
            this.reset();
          });
        },
        error:function(data){
          $("#error").show().fadeIn(1000); //===Show Error Message====
        }
      });
    }
    e.preventDefault();
  });


});