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
  $('body').mouseleave(function() {
    if (Cookies.get('htmlemailExit') == null) {
      $('.exit-overlay').show();
      $('.exit-overlay input').focus();
    }
  })

  // Close exit monitor
  $('.js-close-exit-overlay').click(function(event){
    $('.exit-overlay').hide();
    Cookies.set("htmlemailExit", 1, { expires : 30 });
    event.preventDefault();
  });

  // Track subscribe click in overlay and create cookie so user doesn't see it again
  $('.js-subscribe-exit-overlay').click(function(event){
    Cookies.set("htmlemailExit", 1, { expires : 365 });
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





  // Fake button test
  // $(".js-fake-button").click(function() {
  //   var email = prompt("Thanks for your interest. Buying single templates is coming soon. Enter your email below and we'll email you as soon as it is ready. In the mean time use code 'ship10' for 10% off buying our pack of 8 templates.");
  //   if(email){
  //     ga('send', 'event', 'data', 'waiting-for-newsletter', email);
  //   }
  //   return false;
  // });




  // Set cursor position
  $.fn.setCursorPosition = function (pos) {
    this.each(function (index, elem) {
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    });
    return this;
  };





  // CSS Inliner
  var input = $("#input");
  var output = $("#output");

  // Set default hint text
  var preview = document.getElementById('email-preview');
  var savedInput = localStorage.getItem("cssInlinerInput");
  var savedOutput = localStorage.getItem("cssInlinerOutput");

  if (preview && savedInput != null) {
    input.val(savedInput);
    input.focus().scrollTop(0).setCursorPosition(0);
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




// Switch preview
function switchPreview(device) {
  if (device == "desktop") {
    $('.inliner__preview-client .inliner__preview-chrome').attr('src','/img/emailclient.png');
    $('.inliner__preview-client').removeClass('inliner__preview-client--mobile');
    $('.js-btn-desktop').addClass('active');
    $('.js-btn-mobile').removeClass('active');
  } else if (device == "mobile") {
    $('.inliner__preview-client .inliner__preview-chrome').attr('src','/img/iphone.png');
    $('.inliner__preview-client').addClass('inliner__preview-client--mobile');
    $('.js-btn-desktop').removeClass('active');
    $('.js-btn-mobile').addClass('active');
  }
  return false;
}





// Save as file
function downloadInliner() {
  var text = $("#output").val();
  var filename = "email.html";
  var element = document.createElement('a');

  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();
  document.body.removeChild(element);
}
