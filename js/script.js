var swiper = new Swiper(".product-slider", {
    loop:true,
    SpaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction: false,
    },

    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView:2,
        },
        1020:{
            slidesPerView:3,
        }
    }
})