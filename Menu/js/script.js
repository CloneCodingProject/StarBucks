window.onload = function() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 5,
        scrollbar: {
            el: ".swiper-scrollbar",
        },
    });
}