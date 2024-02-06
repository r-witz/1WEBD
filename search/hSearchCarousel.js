$(document).ready(function() {
    var scrollAmount = 500;

    function scrollToRight() {
        console.log("caca");
        $('html, body').animate({ scrollLeft: '+=' + scrollAmount }, 500);
    }
    
    $('#right').click(scrollToRight);

    function scrollToLeft() {
        $('html, body').animate({ scrollLeft: '-=' + scrollAmount }, 500);
    }

    $('#left').click(scrollToLeft);
});
