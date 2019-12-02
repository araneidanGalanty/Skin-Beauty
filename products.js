const productNames = {
  prod0: 'Proactiv',
  prod1: 'Meaningful Beauty',
  prod2: 'Pistaché Skincare',
  prod3: 'Thayers',
  prod4: 'Neutrogena',
  prod5: 'Lubriderm',
};

$('#prod0').on('click', function (e) {
  $('#overlay').fadeIn();
  $('.buyFormTitle').text(productNames["prod0"]);
})

$('#prod1').on('click', function (e) {
  $('#overlay').fadeIn();
  $('.buyFormTitle').text(productNames["prod1"]);
})
$('#prod2').on('click', function (e) {
  $('#overlay').fadeIn();
  $('.buyFormTitle').text(productNames["prod2"]);
})
$('#prod3').on('click', function (e) {
  $('#overlay').fadeIn();
  $('.buyFormTitle').text(productNames["prod3"]);
})
$('#prod4').on('click', function (e) {
  $('#overlay').fadeIn();
  $('.buyFormTitle').text(productNames["prod4"]);
})
$('#prod5').on('click', function (e) {
  $('#overlay').fadeIn();
  $('.buyFormTitle').text(productNames["prod5"]);
})

$('#overlay').on('click', function (e) {
  $('#overlay').fadeOut();
})

$(".buyForm").click(function(e){
    e.stopPropagation();
});