function sliderFunc() {
  const slider = document.getElementById('slider'),
    sliderItems = document.getElementById('slides'),
    prev = document.getElementById('prev'),
    next = document.getElementById('next'),
    dots = document.querySelectorAll('.dot'),
    current = document.querySelector('#current');

  function slide(wrapper, items, prev, next) {
    let posX1 = 0,
      posX2 = 0,
      posInitial,
      posFinal,
      threshold = 100,
      slides = items.getElementsByClassName('slide'),
      slidesLength = slides.length,
      slideSize = items.getElementsByClassName('slide')[0].offsetWidth,
      index = 1,
      allowShift = true,
      offset = 0;

    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        const slideTo = e.target.getAttribute('data-slide-to');

        index = slideTo;
        offset = 1000 * (slideTo - 1);

        // items.style.transform = `translateX(-${offset}px)`;
        items.style.left = -(index - 1) * 1000 + "px";

        slideLength()

        dotsOpacity()
      })
    });

    function slideLength() {
      if (slides.length < 10) {
        current.textContent = `0${index}`;
      } else {
        current.textContent = index;
      }
    }

    function dotsOpacity() {
      dots.forEach(dot => dot.style.background = 'white');
      dots[index - 1].style.background = '#D2B183';
    }

    wrapper.classList.add('loaded');

    // Mouse events
    items.onmousedown = dragStart;

    // Touch events
    items.addEventListener('touchstart', dragStart);
    items.addEventListener('touchend', dragEnd);
    items.addEventListener('touchmove', dragAction);

    // Click events
    prev.addEventListener('click', function() {
      shiftSlide(-1)

      slideLength()

      dotsOpacity()
    });

    next.addEventListener('click', function() {
      shiftSlide(1)

      slideLength()

      dotsOpacity()
    });

    // Transition events
    items.addEventListener('transitionend', checkIndex);

    function dragStart (e) {
      e = e || window.event;
      e.preventDefault();
      posInitial = items.offsetLeft;

      if (e.type == 'touchstart') {
        posX1 = e.touches[0].clientX;
      } else {
        posX1 = e.clientX;
        document.onmouseup = dragEnd;
        document.onmousemove = dragAction;
      }
    }

    function dragAction (e) {
      e = e || window.event;

      if (e.type == 'touchmove') {
        posX2 = posX1 - e.touches[0].clientX;
        posX1 = e.touches[0].clientX;
      } else {
        posX2 = posX1 - e.clientX;
        posX1 = e.clientX;
      }
      items.style.left = (items.offsetLeft - posX2) + "px";
    }

    function dragEnd (e) {
      posFinal = items.offsetLeft;
      if (posFinal - posInitial < -threshold) {
        shiftSlide(1, 'drag');
      } else if (posFinal - posInitial > threshold) {
        shiftSlide(-1, 'drag');
      } else {
        items.style.left = (posInitial) + "px";
      }

      document.onmouseup = null;
      document.onmousemove = null;
    }

    function shiftSlide(dir, action) {
      items.classList.add('shifting');

      if (allowShift) {
        if (!action) { posInitial = items.offsetLeft; }

        if (dir == 1) {
          items.style.left = (posInitial - slideSize) + "px";
          index++;
        } else if (dir == -1) {
          items.style.left = (posInitial + slideSize) + "px";
          index--;
        }
      }

      allowShift = false;
    }

    function checkIndex (){
      items.classList.remove('shifting');

      if (index == 0) {
        items.style.left = -((slidesLength - 1) * slideSize) + "px";
        index = slidesLength;
      }

      if (index == slidesLength + 1) {
        items.style.left = 0;
        index = 1;
      }

      allowShift = true;

      slideLength()

      dotsOpacity()
    }
  }

  slide(slider, sliderItems, prev, next);
}

export default sliderFunc;

