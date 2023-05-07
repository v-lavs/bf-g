/*
* to include js file write: `//= include ./path-to-file`
* */

//= include ../lib/jquery.min.js ;
//= include ../lib/swiper/swiper-bundle.min.js
//= include ../lib/baguetteBox.min.js

// CUSTOM SCRIPTS


$(document).ready(function () {
    function destroySwiper(sliderInstance) {
        if (sliderInstance instanceof Swiper && sliderInstance.initialized) {
            sliderInstance.destroy(true, true);
            console.log('destroy')
        }
    }

    // MOBILE MENU
    const nav = $('.header__nav');

    $('.btn-burger').click(function (e) {
        e.preventDefault();
        nav.toggleClass('open');
        $(this).toggleClass('open');
        jQuery('.backdrop').fadeToggle();
        $('body').toggleClass('modal_open');
    });

    $('.menu__link, .backdrop').click(function (e) {
        $('.btn-burger').removeClass('open');
        nav.removeClass('open');
        $('.sub-menu__toggle').removeClass('sub-menu__toggle_active')
        jQuery('.backdrop').fadeOut();
        $('body').removeClass('modal_open');
    });

    $('.sub-menu__toggle').click(function (e) {
        $(this).toggleClass('sub-menu__toggle_active')
    });

    //SLIDER NEWS
    var sliderNews = new Swiper(".slider-news", {
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 24,
            },

            640: {
                slidesPerView: 2,
                spaceBetween: 24,
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

    var sliderGallery = new Swiper(".slider-gallery", {
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 24,
            },

            640: {
                slidesPerView: 2,
                spaceBetween: 24,
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
            320: {
                slidesPerView: 1,
                spaceBetween: 24,
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 24,
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

        if ($(window).outerWidth() <= 767) {
            if (!valuablesSlider) {
                valuablesSlider = new Swiper('.valuables', {
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
            console.log(valuablesSlider)
            destroySwiper(valuablesSlider);
            valuablesSlider = null;
        }

        if ($(window).outerWidth() <= 767) {
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

// VIDEO YOUTUBE
    const videos = document.querySelectorAll('.video');
    let generateUrl = function(id) {
        let query = '?rel=0&showinfo=0&autoplay=1';

        return 'https://www.youtube.com/embed/' + id + query;
    };
    let createIframe = function(id) {
        let iframe = document.createElement('iframe');

        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('allow', 'autoplay; encrypted-media');
        iframe.setAttribute('src', generateUrl(id));

        return iframe;
    };

    videos.forEach((el) => {
        let videoHref = el.getAttribute('data-video');

        let deletedLength = 'https://youtu.be/'.length;

        let videoId = videoHref.substring(deletedLength, videoHref.length);

        let img = el.querySelector('img');
        let youtubeImgSrc = 'https://i.ytimg.com/vi/' + videoId + '/maxresdefault.jpg';
        img.setAttribute('src', youtubeImgSrc);

        el.addEventListener('click', (e) => {
            e.preventDefault();

            let iframe = createIframe(videoId);
            el.querySelector('.video__poster').remove();
            el.appendChild(iframe);
            el.querySelector('.btn_play').remove();
        });
    });


});



