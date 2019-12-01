$('#prod0').on('click', function () {
    $('#overlay').show();
    $('.formContainerContainer').show();
})

$('#overlay').on('click', function () {
    $('#overlay').hide();
    if(e.target !== e.currentTarget) return;
    $('.formContainerContainer').hide();
})