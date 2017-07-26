// Note: See http://blog.garstasio.com/you-dont-need-jquery/ and http://youmightnotneedjquery.com/ for JS commands that don't require jQuery
$(document).ready(function(){

  // Rotate header text
  $("#typed").typed({
    strings: ["Startups", "Developers", "Mobile", "Email Marketers", "Ecommerce", "Professional Companies"],
    typeSpeed: 10,
    loop: true
  });





  // Tomorrow's date
  // $("#tomorrow").html(moment().add(1, 'days').format('dddd MMMM Do'));





  // Show exit monitor
  // $('body').mouseleave(function() {
  //   if (Cookies.get('htmlemailExit') == null) {
  //     $('.exit-overlay').show();
  //     $('.exit-overlay input').focus();
  //   }
  // })

  // Close exit monitor
  // $('.js-close-exit-overlay').click(function(event){
  //   $('.exit-overlay').hide();
  //   Cookies.set("htmlemailExit", 1, { expires : 30 });
  //   event.preventDefault();
  // });

  // <div class="exit-overlay">
  //   <div class="exit-modal">
  //     <h2>Wow there!</h2>
  //     <p>Don't need the full set of email templates right now?</p>
  //     <p class="align-center"><img src="img/preview-free.jpg" alt="Free email" width="400"></p>
  //     <p>Subscribe to our list and we'll send you a free basic HTML email that you can preview, download and use today.</p>
  //     <form action="//leemunroe.us1.list-manage.com/subscribe/post?u=1998df7f0f3a32bdf922938ca&amp;id=4bf2c8f8b9" method="post" class="subscribe-form__footer">
  //       <input type="email" value="" name="EMAIL" id="mce-EMAIL" placeholder="Email address"> <button type="submit" class="btn btn-primary" onclick="ga('send', 'event', 'button', 'click', 'Subscribe-Email-List');">Subscribe</button>
  //     </form>
  //     <p><a href="#" class="js-close-exit-overlay" onclick="ga('send', 'event', 'button', 'click', 'No-Subscribe-Email-List');">No thanks</a></p>
  //   </div>
  // </div>





  // Initiate smooth scroll
  smoothScroll.init();




  // Sticky header
  var $header = $(".header"),
      $clone = $header.before($header.clone().addClass("header__clone"));

  $(window).on("scroll", function() {
    var fromTop = $("body").scrollTop();
    $('body').toggleClass("js-show-header", (fromTop > 500));
  });





  // Fake button test
  // $(".js-fake-button").click(function() {
  //   var email = prompt("Thanks for your interest. Buying single templates is coming soon. Enter your email below and we'll email you as soon as it is ready. In the mean time use code 'ship10' for 10% off buying our pack of 8 templates.");
  //   if(email){
  //     ga('send', 'event', 'data', 'waiting-for-newsletter', email);
  //   }
  //   return false;
  // });





  // CSS Inliner
  var input = $("#input");
  var output = $("#output");

  // Set default hint text
  var preview = document.getElementById('email-preview');
  var savedInput = localStorage.getItem("cssInlinerInput");
  var savedOutput = localStorage.getItem("cssInlinerOutput");

  if (preview && savedInput != null) {
    input.val(savedInput);
    output.val(savedOutput);
    preview.src = "data:text/html;charset=utf-8," + escape(savedOutput);
  } else if (typeof(preview) != 'undefined' && preview != null) {
    preview.src = "data:text/html;charset=utf-8," + escape("<div style='font-family: sans-serif; font-size: 14px; text-align: center; color: #999; margin-top: 20px;'>Input your HTML to preview it here.</div>");
  }

  // On typing take the output value and render it in iframe
  input.on("keyup", function() {
    var inputContent = input.val();
    var outputContent = output.val();
    document.getElementById('email-preview').src = "data:text/html;charset=utf-8," + escape(outputContent);

    // Save value locally for next visit
    localStorage.setItem("cssInlinerInput", inputContent);
    localStorage.setItem("cssInlinerOutput", outputContent);
  });

  // Copy the output value to clipboard
  $(".js-copy-output").click(function(){
    $("#output").select();
    document.execCommand('copy');
    ga('send', 'event', 'button', 'click', 'Copy Inlined CSS');
    $(this).after(" <small class='subtle js-copied'>Copied</small>");
    $(".js-copied").fadeOut(2000);
  });

  // Select all the output on click
  output.on('click', function() {
    output.select();
    ga('send', 'event', 'input', 'click', 'Select Inlined CSS');
  })





  // Show copy monitor
  $(".js-copy-output").click(function(){
    if (Cookies.get('htmlemailCopy') == null) {
      $('.exit-overlay').show();
      $('.exit-overlay input').focus();
    }
  });
  $("#output").click(function(){
    if (Cookies.get('htmlemailCopy') == null) {
      $('.exit-overlay').show();
      $('.exit-overlay input').focus();
    }
  });

  // Close copy monitor
  $('.js-close-copy-overlay').click(function(event){
    $('.exit-overlay').hide();
    Cookies.set("htmlemailCopy", 1, { expires : 30 });
    event.preventDefault();
  });

  // Submit copy monitor
  $('.js-submit-copy-overlay').click(function(event){
    $('.exit-overlay').hide();
    Cookies.set("htmlemailCopy", 1, { expires : 30 });
  });


});
