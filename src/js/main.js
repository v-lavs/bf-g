/*
* to include js file write: `//= include ./path-to-file`
* */

//= include ../lib/jquery.min.js ;
//= include ../lib/swiper/swiper-bundle.min.js
//= include ../lib/baguetteBox.min.js

// CUSTOM SCRIPTS

function destroySwiper(sliderInstance) {
    if (sliderInstance instanceof Swiper && sliderInstance.initialized) {
        sliderInstance.destroy(true, true);
        console.log('destroy')
    }
}

$(document).ready(function () {

    // MOBILE MENU
    const nav = $('.header__nav');

    $('.btn-burger').click(function (e) {
        e.preventDefault();
        nav.toggleClass('open');
        $(this).toggleClass('open');
        jQuery('.backdrop').fadeIn();
    });

    $('.menu__link, .backdrop').click(function (e) {
        $('.btn-burger').removeClass('open');
        nav.removeClass('open');
        $('.sub-menu__toggle').removeClass('sub-menu__toggle_active')
        jQuery('.backdrop').fadeOut();

    });

    $('.sub-menu__toggle').click(function (e) {
        $(this).toggleClass('sub-menu__toggle_active')
    });

    //SLIDER NEWS
    var sliderNews = new Swiper(".slider-news", {
        breakpoints: {
            spaceBetween: 24,
            320: {
                slidesPerView: 1,
            },

            640: {
                slidesPerView: 2,
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
    var sliderNews = new Swiper(".slider-gallery", {
        breakpoints: {
            spaceBetween: 24,
            320: {
                slidesPerView: 1,
            },

            640: {
                slidesPerView: 2,
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
    var sliderAboutHelps = new Swiper(".about-helps", {
        breakpoints: {
            spaceBetween: 24,
            320: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 3,
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
    var sliderPartners = new Swiper(".slider-partners", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });

    //SLIDERS
    let valuablesSlider;
let advantagesSlider;

    function handleResponsive() {

        // DESTROY SLIDER INSTANCES

        if ($(window).outerWidth() <= 991) {
            if (!valuablesSlider) {
                valuablesSlider = new Swiper('.valuables', {
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                        },

                        640: {
                            slidesPerView: 2,
                        }
                    },
                    pagination: {
                        el: ".swiper-pagination",
                    },
                });
            }
        } else {
            destroySwiper(valuablesSlider);
            valuablesSlider = null;
        }

        if ($(window).outerWidth() <= 768) {
            if (!advantagesSlider) {
                valuablesSlider = new Swiper('.advantages', {
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                        },

                        540: {
                            slidesPerView: 2,
                        }
                    },
                    pagination: {
                        el: ".swiper-pagination",
                    },
                });
            }
        } else {
            destroySwiper(advantagesSlider);
            advantagesSlider = null;
        }
    }

    let resizeId;


    handleResponsive();

    window.addEventListener('resize', function () {
        clearTimeout(resizeId);
        resizeId = setTimeout(handleResponsive, 500);
    });


    //BAGUETTE BOX
    $('.awards-list a').click(function (e) {
        e.preventDefault();
    });

    baguetteBox.run('.awards-list', {
        buttons: 'auto', // arrows navigation
        noScrollbars: false,
        bodyClass: 'baguetteBox-open',
        titleTag: false,
        async: false,
        preload: 2,
        animation: 'fadeIn',
        overlayBackgroundColor: 'rgba (1,1,1, .25)'
    });

});



