import Swiper from 'swiper';
import '../css/swiper.css';

export default function swiperScript() {
  const swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}