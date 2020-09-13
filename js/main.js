
// Y axis scroll speed
var velocity = 0.1;

function update() {
  var pos = $(window).scrollTop();
  $('.bg-after').each(function () {
    var $element = $(this);
    // subtract some from the height b/c of the padding
    var height = $element.height() - 18;
    $(this).css('backgroundPosition', 'right ' + Math.round((height - pos) * velocity) + 'px');
  });
};

$(window).bind('scroll', update);

(function ($) {


  // $('.normal-product').on('mouseenter', function () {
  //   // alert('sdf');
  //   $(this).find('.about-price').toggleClass('show')
  // });
  
  $(window).scroll(function () {
    if ($('.fixed-top-bar').length) {
      // alert('dd');
      var sticky = $('.new-product'),
        scroll = $(window).scrollTop();

      if (scroll >= sticky.offset().top) {
        $('.fixed-top-bar').addClass('show');
      } else {
        $('.fixed-top-bar').removeClass('show');
      }
    }

  });
  // Add slideDown animation to Bootstrap dropdown when expanding.
  $('.dropdown').on('show.bs.dropdown', function () {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });

  // Add slideUp animation to Bootstrap dropdown when collapsing.
  $('.dropdown').on('hide.bs.dropdown', function () {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });
  $.fn.qController = function(options) {
  var setting = $.extend({
             qStart: 1, //quantity where from start to increase or decrease 
             qMax: 100, //quantity maximum limit to increase
             qMin: 1, // quantity to minimum limit to decrease
             qSlider: false, //also show input range slider for increasing or decreasing along with plus and minus buttons
             qStatus: "Quantity", //text that will show along with the quantity status
     }, options);

return this.each(function(){
var target,
    slider,
    Quantity,
    qControler,
    qMinus,
    qPlus,
    qStat;
     
target = $(this);
/* Creating UI elements for quantity controller */
slider = document.createElement("input");
qControler = document.createElement("div");
qMinus = document.createElement("button");
qPlus = document.createElement("button");
qStat = document.createElement("em");
/* Applying settings to the slider and quantity controller */
    Quantity = setting.qStart;
$(slider).attr({
'type' : 'range',
'value' : Quantity,
'min' : setting.qMin,
'max' : setting.qMax,
}).addClass("qslider");

/* Adding classes to minus, plus buttons and controller for later customization */
$(qMinus).addClass("minus").html('<i class="fas fa-chevron-left"></i>');
$(qPlus).addClass("plus").html('<i class="fas fa-chevron-right"></i>'); 
$(qControler).addClass("quantity");
$(qStat).addClass("q-status");

$(qStat).html(Quantity);

$(qControler).html(setting.qStatus).append(qMinus ).append(qStat ).append(qPlus).appendTo(this);

if (setting.qSlider == true){
$(slider).insertAfter(qControler);
//use insertBefore to add slider at the top of controller
}

$(qPlus).click(function(){
if ( Quantity == setting.qMax){
 alert("The Quantity Reached at Maximum Limit");
return; 
}
 Quantity += 1;
$(qStat).html(Quantity);
$(slider).attr('value', Quantity);

});
$(qMinus).click(function(){
if ( Quantity == setting.qMin){
 alert("The Quantity Reached at Minimum Limit");
return;
}
 Quantity -= 1;
$(qStat).html(Quantity);

});

$(slider).on('input', function(){
var $value = $(this).val().valueOf();
$(qStat).html($value);
Quantity = $value*1;
});

});
  };

})(jQuery);

// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
      name: '.name',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      weight: function( itemElem ) {
        var weight = $( itemElem ).find('.weight').text();
        return parseFloat( weight.replace( /[\(\)]/g, '') );
      }
    }
  });
  
  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };
  
  // bind filter button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  
  
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
    

  // Owl Crousel slider
  $(document).ready(function() {
 
    $("#owl-demo-1").owlCarousel({
   
        autoplay: 3000, //Set AutoPlay to 3 seconds
        items : 4,
        rtl:true,
      nav: true,
      navText: ['<img src="img/icons/right-arrow.svg" />', '<img src="img/icons/left-arrow.svg" />'],
        loop: true,
        responsive:{
          0:{
              items:1,
              nav:false
          },
          600:{
              items:2,
              nav:false
          },
          1000:{
              items:3,
              nav:true,
          } ,
          1200:{
            items:4,
            nav:true,
        }
      }
   
    });
 
    $("#owl-demo").owlCarousel({
   
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 6,
      nav:true,
      rtl: true,
      navText: ['<img src="img/icons/right-arrow.svg" />', '<img src="img/icons/left-arrow.svg" />'],
      loop: true,
      responsive:{
        0:{
            items:1,
            nav:false
        },
        400:{
            items:2,
            nav:false
        },
        700:{
            items:3,
            nav:true,
        } ,
        900:{
          items:4,
          nav:true,
      } ,
      1100:{
        items:5,
        nav:true,
    } ,
    1200:{
      items:6,
      nav:true,
  }
    }
   });
   $('.categories-list-slider').owlCarousel({
    items : 3,
    rtl:true
   })
  });


  $(document).ready(function(){

    $(".example").qController({
      qStart: 1,
      qMax: 100, 
      qMin: 1,
      qslider: false
    });
  });





/* Javascript */
 
//Make sure that the dom is ready
$(function () {
 
  // $("#rateYo").rateYo({
  //   rating: 3.6
  // });
  $('#credit-card').on('keypress change blur', function () {
    $(this).val(function (index, value) {
      return value.replace(/[^a-z0-9]+/gi, '').replace(/(.{4})/g, '$1 ');
    });
  });
  
  $('#credit-card').on('copy cut paste', function () {
    setTimeout(function () {
      $('#credit-card').trigger("change");
    });
  });
  




          
  var telInput = $("#phone"),
  errorMsg = $("#error-msg"),
  validMsg = $("#valid-msg");

// initialise plugin
telInput.intlTelInput({

  allowExtensions: true,
  formatOnDisplay: true,
  autoFormat: true,
  autoHideDialCode: true,
  autoPlaceholder: true,
  defaultCountry: "auto",
  ipinfoToken: "yolo",

  nationalMode: false,
  numberType: "MOBILE",
  //onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
  preferredCountries: ['sa', 'ae', 'qa','om','bh','kw','ma'],
  preventInvalidNumbers: true,
  separateDialCode: true,
  initialCountry: "auto",
  geoIpLookup: function(callback) {
  $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
    var countryCode = (resp && resp.country) ? resp.country : "";
    callback(countryCode);
  });
},
   utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.9/js/utils.js"
});

var reset = function() {
  telInput.removeClass("error");
  errorMsg.addClass("hide");
  validMsg.addClass("hide");
};

// on blur: validate
telInput.blur(function() {
  reset();
  if ($.trim(telInput.val())) {
    if (telInput.intlTelInput("isValidNumber")) {
      validMsg.removeClass("hide");
    } else {
      telInput.addClass("error");
      errorMsg.removeClass("hide");
    }
  }
});

// on keyup / change flag: reset
telInput.on("keyup change", reset);






});



$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})


$("#file-input1").on('change', function() { 
  function showname () {
      var name = document.getElementById('file-input1'); 
     $('.icon-label span').html(name.files.item(0).name)
    
    };
 showname()
});
$("#upload-license").on('change', function() { 
  function showname () {
      var name = document.getElementById('upload-license'); 
     $('.input-group label').html(name.files.item(0).name)
    
    };
 showname()
});
var owl = $(".main-slider").owlCarousel({
   
  items : 1,
  rtl:true,
  nav:true,
  loop: true,
  autoplay:false,
  animateIn: 'animate__lightSpeedInRight',




});
// owl.on('changed.owl.carousel', function(event) {
//   var item = event.item.index - 2;     // Position of the current item
//   $('.home-slider .text h3').removeClass('animate__animated animate__fadeInUp');
// $('.owl-item').not('.cloned').eq(item).find('h3').addClass('animate__animated animate__fadeInUp');


// $('.home-slider .text h1').removeClass('animate__animated animate__fadeInUp');
// $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animate__animated animate__fadeInUp');

// $('.home-slider .text p').removeClass('animate__animated animate__fadeInUp');
// $('.owl-item').not('.cloned').eq(item).find('p').addClass('animate__animated animate__fadeInUp');


// $('.home-slider .text button').removeClass('animate__animated animate__fadeInUp');
// $('.owl-item').not('.cloned').eq(item).find('button').addClass('animate__animated animate__fadeInUp');
// });
$("#passport-photo").on('change', function() { 
  function showname () {
      var name = document.getElementById('passport-photo'); 
     $('.input-group label').html(name.files.item(0).name)
    
    };
 showname()
});
$("#card-photo").on('change', function() { 
  function showname () {
      var name = document.getElementById('card-photo'); 
     $('.input-group label').html(name.files.item(0).name)
    
    };
 showname()
});
// Date picker plugin
$(function(){
  $('[data-toggle="datepicker"]').datepicker();
});
