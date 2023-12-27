const mainColor = '#0E963F'

const swiperE4 = document.querySelector('.mySwiper4');

  const swiperParams = {
    slidesPerView: 3,
    spaceBetween:10,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1320: {
        slidesPerView: 3,
      },
    },
    on: {
      init() {
      },
    },
  };

  Object.assign(swiperE4, swiperParams);

  swiperE4.initialize();
