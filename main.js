import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import Swiper from 'swiper/bundle';

var swiper = new Swiper(".index-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".index-mobile-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


var mySwiper;
function checkScreenWidth() {
    if (window.innerWidth < 992) {
        // < 992 禁用 Swiper
        if (mySwiper) {
            mySwiper.disable();
        }
    } else {
        //啟用
        if (!mySwiper) {
            var swiper = new Swiper(".index-use-swiper", {
                slidesPerView: 'auto',
                spaceBetween: 0,
                mousewheel: true,
                slidesOffsetAfter: 194,
                autoWidth: false,
                scrollbar: {
                    el: ".swiper-scrollbar",
                    draggable: true,
                },
            });
        }
    }
}

//頁面加載時和屏幕寬度變化時調用檢查函數
var mediaQuery = window.matchMedia('(max-width: 992px)');
mediaQuery.addListener(checkScreenWidth);

window.addEventListener('load', function () {
    checkScreenWidth(mediaQuery);
});

var swiper = new Swiper(".product-swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//product-nav
document.querySelectorAll('.product-nav-link').forEach((link) => {
    if (link.href === window.location.href) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
        return false;
    }
    console.log(window.location.href);
});

//faq
document.addEventListener('DOMContentLoaded', function () {
    const collapseButtons = document.querySelectorAll('.collapse-btn');

    collapseButtons.forEach(button => {
        const collapseIconOn = button.querySelector('.btn-on');
        const collapseIconOff = button.querySelector('.btn-off');

        button.addEventListener('click', function () {
            //切換圖標的顯示狀態
            collapseIconOn.style.display = (collapseIconOn.style.display === 'none') ? 'inline-block' : 'none';
            collapseIconOff.style.display = (collapseIconOff.style.display === 'none') ? 'inline-block' : 'none';
        });
    });
});