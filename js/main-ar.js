(function($){
    $.fn.qController = function(options) {
    var setting = $.extend({
               qStart: 1, //quantity where from start to increase or decrease 
               qMax: 100, //quantity maximum limit to increase
               qMin: 1, // quantity to minimum limit to decrease
               qSlider: false, //also show input range slider for increasing or decreasing along with plus and minus buttons
               qStatus: "الكمية", //text that will show along with the quantity status
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
  $(qMinus).addClass("minus").html('<i class="fas fa-chevron-right"></i>');
  $(qPlus).addClass("plus").html('<i class="fas fa-chevron-left"></i>'); 
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