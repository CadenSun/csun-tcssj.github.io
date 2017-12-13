$(document).ready(function() {
    // $("#warrior-logo").on("click" function() {
    //     $(this).fadeOut('fast');
    // });
    // $("#warrior-logo").mouseleave(function() {
    //     $(this).fadeIn('fast');
    // });

    $("button").click(function() {
        $('#warrior-logo').fadeToggle(1000);
    });
})