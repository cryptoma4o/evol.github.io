$(document).ready(function() {
    $(".menu-icon").click(function () {
        $(this).toggleClass("open");
        $(".sidebar nav").toggleClass("nav-mobile--show");
        $(".message-icon").toggleClass("no-visible");
    });


    $('.popup-open').click(function() {
        $('#active-card').fadeIn();
        return false;
    });

    $('.replenish-open').click(function() {
        $('#replenish-balance-modal').fadeIn();
        return false;
    });

    $('.popup-close').click(function() {
        $(this).parents('.popup-fade').fadeOut();
        return false;
    });
    $('.popup-close-ok').click(function() {
        $(this).parents('.popup-fade').fadeOut();
        return false;
    });
    $('.popup-ok').click(function() {
        let modal = $(this).parents('.popup-fade');
        let modalId = modal.attr("id");
        modal.fadeOut();
        let newModal = '';
        switch (modalId) {
            case "active-card":
                newModal = "popup-sms-pin";
                break
            case "popup-sms-pin":
                newModal = "popup-pin";
                break
            case "popup-pin":
                newModal = "popup-congratulations";
                break
        }
        $('#' + newModal).fadeIn();
        return false;
    });

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.popup-fade').fadeOut();
        }
    });

    $('.popup-fade').click(function(e) {
        if ($(e.target).closest('.popup').length == 0) {
            $(this).fadeOut();
        }
    });

    // account form

    $(".forget").click(function () {
        $(".input-forget").css("display", "flex")
    });

    jQuery(function ( $ ){
        $(".credit").credit();
    });
});
