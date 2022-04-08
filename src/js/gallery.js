const arr = ['assets/img/galery/galery1.jpg',
            'assets/img/galery/galery2.jpg',
            'assets/img/galery/galery3.jpg',
            'assets/img/galery/galery4.jpg',
            'assets/img/galery/galery5.jpg',
            'assets/img/galery/galery6.jpg',
            'assets/img/galery/galery7.jpg',
            'assets/img/galery/galery8.jpg',
            'assets/img/galery/galery9.jpg',
            'assets/img/galery/galery10.jpg',
            'assets/img/galery/galery11.jpg',
            'assets/img/galery/galery12.jpg',
            'assets/img/galery/galery13.jpg',
            'assets/img/galery/galery14.jpg',
            'assets/img/galery/galery15.jpg'];

const pictureInnerContainer = document.querySelector('.picture-inner-container');

const galleryJs = () => {
  let result = shuffle(arr);
  let img = '';

  result.map((item, index) => {
    img += `<img class="gallery-img slide-in" src=${item} alt="gallery${index}">`;
  });

  pictureInnerContainer.innerHTML = img;
}

function shuffle(arr) {
  let result = [];

  while (arr.length > 0) {
    let random = getRandomInt(0, arr.length - 1);
    let elem = arr.splice(random, 1)[0];
    result.push(elem);
  }

  return result;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default galleryJs;
