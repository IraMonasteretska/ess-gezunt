$(document).ready(function () {
    $('.header__menubtn').click(function () {
        $('.header.header nav').addClass('show');
    });
    $('.header__closemenu').click(function () {
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
    $('.headersearchbtn span').click(function () {
        $('.eggheadsearch').toggleClass('show');
    });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.eggheadsearch').length && !$target.closest('.headersearchbtn span').length) {
            $('.eggheadsearch').removeClass('show');
        }
    });

    // + MAIN SECTIONS
    // product box - show +-
    $('.addtocart').click(function () {
        $(this).parent('.prodcount').addClass('show');

    });

    var swiper2 = new Swiper(".productsection-slider.ps1", {
        slidesPerView: 4,
        spaceBetween: 36,

        navigation: {
            nextEl: ".swiper-button-next.custom.sl2",
            prevEl: ".swiper-button-prev.custom.sl2",
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1550: {
                slidesPerView: 4,
                spaceBetween: 36,
            },
        },
    });

    var swiper3 = new Swiper(".productsection-slider.ps2", {
        slidesPerView: 4,
        spaceBetween: 36,
        navigation: {
            nextEl: ".swiper-button-next.custom.sl3",
            prevEl: ".swiper-button-prev.custom.sl3",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1550: {
                slidesPerView: 4,
                spaceBetween: 36,
            },
        },
    });

    var swiper4 = new Swiper(".recipes-slider", {
        slidesPerView: 3,
        spaceBetween: 35,
        navigation: {
            nextEl: ".swiper-button-next.custom.sl4",
            prevEl: ".swiper-button-prev.custom.sl4",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            575: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1550: {
                slidesPerView: 3,
                spaceBetween: 35,
            },
        },
    });

    var swiper5 = new Swiper(".discuss-slider", {
        slidesPerView: 3,
        spaceBetween: 35,
        navigation: {
            nextEl: ".swiper-button-next.custom.sl5",
            prevEl: ".swiper-button-prev.custom.sl5",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            575: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1550: {
                slidesPerView: 3,
                spaceBetween: 35,
            },
        },
    });

    // Main - hero slider
    var swiper = new Swiper(".heroslider", {
        
        loop: true,
        speed: 1200,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 26,
            },
        },
    });

});