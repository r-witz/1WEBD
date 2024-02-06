$(document).ready(function() {
    function scrollToBottom() {
        $('html, body').animate({ scrollTop: 850 });
    };

    $('#arrow').click(scrollToBottom);
});
