// Note: See http://blog.garstasio.com/you-dont-need-jquery/ and http://youmightnotneedjquery.com/ for JS commands that don't require jQuery
$(document).ready(function(){

  // Rotate header text
  $("#typed").typed({
    strings: ["Startups", "Developers", "Mobile", "Email Marketers", "Ecommerce", "Professional Companies"],
    typeSpeed: 10,
    loop: true
  });





  // Tomorrow's date
  $("#tomorrow").html(moment().add(1, 'days').format('dddd MMMM Do'));





  // Show exit monitor
  // var closeExit = false;
  $('body').mouseleave(function() {
    if (Cookies.get('htmlemailExit') == null) { 
      $('.exit-overlay').show();
      // closeExit = true;
      $('.exit-overlay input').focus();
    }
  })





  // Close exit monitor
  $('.js-close-exit-overlay').click(function(event){
    $('.exit-overlay').hide();
    Cookies.set("htmlemailExit", 1, { expires : 30 });
    event.preventDefault();
  });





  // Initiate smooth scroll
  smoothScroll.init();




  // Sticky header
  var $header = $(".header"),
      $clone = $header.before($header.clone().addClass("header__clone"));

  $(window).on("scroll", function() {
    var fromTop = $("body").scrollTop();
    $('body').toggleClass("js-show-header", (fromTop > 500));
  });
  
});
