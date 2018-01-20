$(function () {
    var header = $('#header');
    $('#title').hide(0).appendTo($('.temp'));
    header.children().remove();
    header.removeClass('jumbotron rounded-0 p-0').addClass('changethebg');
        $('#title').appendTo(header).show(1000);
    
});