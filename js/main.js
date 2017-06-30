( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );





$(document).ready(function(){
 /* 
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');       
        }
    );
  */
    $('ul.nav li.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });


        $(window).on("scroll", function() {
          if($(window).scrollTop() > 100) {
              $(".navbar").addClass("header-scroll");
              $(".navbar-brand").addClass("brand-logo-scroll");
              $(".nav").addClass("nav-scroll");
              $(".navbar-header").addClass("navbar-header-scroll");
              $("#menu-redt-main-menu li a").addClass("menu-font-scroll");
          } else {
              //remove the background property so it comes transparent again (defined in your css)
             $(".navbar").removeClass("header-scroll");
             $(".navbar-brand").removeClass("brand-logo-scroll");
             $(".nav").removeClass("nav-scroll");
             $(".navbar-header").removeClass("navbar-header-scroll");
             $("#menu-redt-main-menu li a").removeClass("menu-font-scroll");
          }
        });

  //alert(location.pathname.split("/")[2]);

  $(function() {
    //$('.nav-link[href^="/' + location.pathname.split("/")[2] + '"]:parent').addClass('active');
  }); 

});

jQuery(document).ready(function () {

  jQuery(".menu li:first-child").hover(function() {
    jQuery(".text-container1").toggleClass("slide-left-1");  
  });

  jQuery(".menu li:nth-child(2)").hover(function(){
    jQuery(".text-container1").toggleClass("slide-left-0");
    jQuery(".text-container2").toggleClass("slide-left-1");
    jQuery(".text-container3").toggleClass("slide-left-2");
    jQuery(".text-container4").toggleClass("slide-left-4");
    jQuery(".text-container5").toggleClass("slide-left-5");
    jQuery(".menu li:first-child").toggleClass("active hidden");
  jQuery('#js_svg-element').attr('class', '');
  }, function(){
    jQuery('#js_svg-element').attr('class', 'active');
    jQuery(".menu li:first-child").toggleClass("active");
    jQuery(".text-container1").toggleClass("slide-left-0");
    jQuery(".text-container2").toggleClass("slide-left-1");
    jQuery(".text-container3").toggleClass("slide-left-2");
    jQuery(".text-container4").toggleClass("slide-left-4");
    jQuery(".text-container5").toggleClass("slide-left-5");
  });

  jQuery(".menu li:nth-child(3)").hover(function(){
    jQuery(".text-container1").toggleClass("slide-left-3");
    jQuery(".text-container2").toggleClass("slide-left-0");
    jQuery(".text-container3").toggleClass("slide-left-1");
    jQuery(".text-container4").toggleClass("slide-left-2");
    jQuery(".text-container5").toggleClass("slide-left-4");
    jQuery(".menu li:first-child").toggleClass("active hidden");
    jQuery('#js_svg-element').attr('class', '');
  }, function(){
    jQuery('#js_svg-element').attr('class', 'active');
    jQuery(".menu li:first-child").toggleClass("active");
    jQuery(".text-container1").toggleClass("slide-left-3");
    jQuery(".text-container2").toggleClass("slide-left-0");
    jQuery(".text-container3").toggleClass("slide-left-1");
    jQuery(".text-container4").toggleClass("slide-left-2");
    jQuery(".text-container5").toggleClass("slide-left-4");
  });

  jQuery(".menu li:nth-child(4)").hover(function(){
    jQuery(".text-container1").toggleClass("slide-left-6");
    jQuery(".text-container2").toggleClass("slide-left-3");
    jQuery(".text-container3").toggleClass("slide-left-0");
    jQuery(".text-container4").toggleClass("slide-left-1");
    jQuery(".text-container5").toggleClass("slide-left-2");
    jQuery(".menu li:first-child").toggleClass("active hidden");
  jQuery('#js_svg-element').attr('class', '');
  }, function(){
    jQuery('#js_svg-element').attr('class', 'active');
    jQuery(".menu li:first-child").toggleClass("active");
    jQuery(".text-container1").toggleClass("slide-left-6");
    jQuery(".text-container2").toggleClass("slide-left-3");
    jQuery(".text-container3").toggleClass("slide-left-0");
    jQuery(".text-container4").toggleClass("slide-left-1");
    jQuery(".text-container5").toggleClass("slide-left-2");
  });

  jQuery(".menu li:nth-child(5)").hover(function(){
    jQuery(".text-container1").toggleClass("slide-left-7");
    jQuery(".text-container2").toggleClass("slide-left-6");
    jQuery(".text-container3").toggleClass("slide-left-3");
    jQuery(".text-container4").toggleClass("slide-left-0");
    jQuery(".text-container5").toggleClass("slide-left-1");
    jQuery(".menu li:first-child").toggleClass("active hidden");
    jQuery('#js_svg-element').attr('class', '');
  }, function(){
    jQuery('#js_svg-element').attr('class', 'active');
    jQuery(".menu li:first-child").toggleClass("active");
    jQuery(".text-container1").toggleClass("slide-left-7");
    jQuery(".text-container2").toggleClass("slide-left-6");
    jQuery(".text-container3").toggleClass("slide-left-3");
    jQuery(".text-container4").toggleClass("slide-left-0");
    jQuery(".text-container5").toggleClass("slide-left-1");
  });
});

/* Contact Form */
$(function() {

  // Get the form.
  var form = $('#ajax-contact');

  // Get the messages div.
  var formMessages = $('#form-messages');

  // Set up an event listener for the contact form.
  $(form).submit(function(e) {
    // Stop the browser from submitting the form.
    e.preventDefault();

    // Serialize the form data.
    var formData = $(form).serialize();

    // Submit the form using AJAX.
    $.ajax({
      type: 'POST',
      url: $(form).attr('action'),
      data: formData
    })
    .done(function(response) {
      // Make sure that the formMessages div has the 'success' class.
      $(formMessages).removeClass('error');
      $(formMessages).addClass('success');

      // Set the message text.
      $(formMessages).text(response);

      // Clear the form.
      $('#name').val('');
      $('#email').val('');
      $('#message').val('');
    })
    .fail(function(data) {
      // Make sure that the formMessages div has the 'error' class.
      $(formMessages).removeClass('success');
      $(formMessages).addClass('error');

      // Set the message text.
      if (data.responseText !== '') {
        $(formMessages).text(data.responseText);
      } else {
        $(formMessages).text('Oops! An error occured and your message could not be sent.');
      }
    });

  });

});


/* About Us */
  // About Page Bio Toggles
  $( ".leadership.duayne" ).click(function() {
    $( ".bio.duayne" ).slideToggle(800);
    $( ".toggle-bio.duayne" ).toggleClass( "close" , 800);
  });
  $( ".leadership.stephen" ).click(function() {
    $( ".bio.stephen" ).slideToggle(800);
    $( ".toggle-bio.stephen" ).toggleClass( "close", 800 );
  });
  $( ".leadership.bryan" ).click(function() {
    $( ".bio.bryan" ).slideToggle(800);
    $( ".toggle-bio.bryan" ).toggleClass( "close", 800 );
  });



/* Product Us */
  // Product Page Bio Toggles
  $( ".leadership.mobile" ).click(function() {
    $( ".bio.mobile" ).slideToggle(800);
    $( ".toggle-bio.mobile" ).toggleClass( "close" , 800);
  });
  $( ".leadership.pos" ).click(function() {
    $( ".bio.pos" ).slideToggle(800);
    $( ".toggle-bio.pos" ).toggleClass( "close", 800 );
  });
  $( ".leadership.mcommerce" ).click(function() {
    $( ".bio.mcommerce" ).slideToggle(800);
    $( ".toggle-bio.mcommerce" ).toggleClass( "close", 800 );
  });
  $( ".leadership.ecommerce" ).click(function() {
    $( ".bio.ecommerce" ).slideToggle(800);
    $( ".toggle-bio.ecommerce" ).toggleClass( "close", 800 );
  });
  $( ".leadership.sales" ).click(function() {
    $( ".bio.sales" ).slideToggle(800);
    $( ".toggle-bio.sales" ).toggleClass( "close", 800 );
  });
  $( ".leadership.event" ).click(function() {
    $( ".bio.event" ).slideToggle(800);
    $( ".toggle-bio.event" ).toggleClass( "close", 800 );
  });
  $( ".leadership.emv" ).click(function() {
    $( ".bio.emv" ).slideToggle(800);
    $( ".toggle-bio.emv" ).toggleClass( "close", 800 );
  });
  $( ".leadership.gift" ).click(function() {
    $( ".bio.gift" ).slideToggle(800);
    $( ".toggle-bio.gift" ).toggleClass( "close", 800 );
  });
  $( ".leadership.loyalty" ).click(function() {
    $( ".bio.loyalty" ).slideToggle(800);
    $( ".toggle-bio.loyalty" ).toggleClass( "close", 800 );
  });
  $( ".leadership.poynt" ).click(function() {
    $( ".bio.poynt" ).slideToggle(800);
    $( ".toggle-bio.poynt" ).toggleClass( "close", 800 );
  });


