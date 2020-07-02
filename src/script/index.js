var mySwiper = new Swiper ('#myswiper', {
    direction: 'horizontal', // 水平切换选项，默认
    loop: true, // 循环模式选项

    
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable :true,
    },
    // autoplay: true,//自动播放
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },

})        