$('#prod0').on('click', function (e) {
  $('#overlay').show();
})

$('#overlay').on('click', function (e) {
  $('#overlay').hide();
})

$(".buyForm").click(function(e){
    e.stopPropagation();
});