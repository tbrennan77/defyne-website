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


