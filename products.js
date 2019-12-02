const products = {
  prod0: {name: 'Proactiv', price: 10},
  prod1: {name: 'Meaningful Beauty', price: 20},
  prod2: {name: 'Pistaché Skincare', price: 5},
  prod3: {name: 'Thayers', price: 15},
  prod4: {name: 'Neutrogena', price: 18},
  prod5: {name: 'Lubriderm', price: 12},
};

var currentProd = "";

$(document).ready(function () {
  $('.buyBtn').on('click', function(e) {
    $('#overlay').fadeIn();
    $('.formContainer').show();
    $('.recieptContainer').hide();
    $('.reciept').hide();
    var prodId = $(this).attr('id');
    currentProd = prodId;
    $('.buyFormTitle').text(products[currentProd].name);
  });

  $('#overlay').on('click', function(e) {
    $('#overlay').fadeOut();
  });

  $('.buyForm').click(function(e){
      e.stopPropagation();
  });
  
  $('input[type="number"]').keypress( function(e){
    // keep backspace (code 8), restrict input to numbers (code 48-57)
    if (e.which != 8 && (e.which < 48 || e.which > 57)){
      e.preventDefault();
    }
  });
  
  $('.buyForm').submit(function(e) {
    e.preventDefault();
    $('.formContainer').fadeOut();
    $('.recieptContainer').fadeIn();
    $('.reciept').show();
    $('#recieptProductName').text($('.buyFormTitle').text());
    $('#recieptUnits').text($('#amount').val());
    $('#recieptAddress').text(`${$('#fname').val()} ${$('#lname').val()}\n${$('#streetAddress').val()}\n${$('#city').val()}, ${$('#region').val()} ${$('#postCode').val()}\n${$('#country').val()}`);
    var speed = $("input:radio[name=shipping]:checked").val();
    $('#recieptShipSpeed').text(`${speed}`);
    var purchasePrice = products[currentProd].price * parseInt($('#amount').val());
    if (speed == "express"){
      purchasePrice += 10;
    }
    purchasePrice += 10;  // for shipping
    $('#recieptPrice').text(`$${purchasePrice}`);
  });
  
});