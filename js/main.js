$(document).ready(function(){
    $('.header__menubtn').click(function(){
        $('.header.header nav').addClass('show');
    });
    $('.header__closemenu').click(function(){
        $('.header.header nav').removeClass('show');
    });
    
    // slider
    if ($('.mainslider').length) {
    var swiper = new Swiper(".mainslider", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next.custom.sl1",
            prevEl: ".swiper-button-prev.custom.sl1",
        },
    });
}

    // header acc dropdown
    $('.header__account').click(function () {
        $(this).toggleClass('active');
        $(this).next('.header__accdropdown').toggle();
    });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.headeraccwrap').length && !$target.closest('.sellacc__brandnamehead').length && !$target.closest('.header__accdropdown').length) {
            $('.header__account').removeClass('active');
            $('.header__accdropdown').hide();
        }
    });

     // Header cart dropdown - show/hide
     $('.header__cart').click(function () {
        $('.header__cartdropdown').toggle();
    });
    $('.closecart').click(function () {
        $('.header__cartdropdown').hide();
    })
    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.headercartwrap').length) {
            $('.header__cartdropdown').hide();
        }
    });

    // Header cart dropdown +-
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 0 ? 0 : count;
        $input.val(count);
        $input.change();
        return false;
    });

    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    // select
    if ($('.customselect').length) {
        $('.customselect').select2({
            minimumResultsForSearch: -1,
            dropdownCssClass: "headerselectdropdown"
        });
    }

    // search
    $('.headersearchbtn span').click(function(){
        $('.eggheadsearch').toggleClass('show');
    });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.eggheadsearch').length && !$target.closest('.headersearchbtn span').length) {
            $('.eggheadsearch').removeClass('show');
        }
    });


});