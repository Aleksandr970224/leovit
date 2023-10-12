//Слайдер о пользе и ценности киселя  
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 3,
  spaceBetween: 30,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    spaceBetween: 30,
  },
});


// Модальные окна, подробнее про кисель
let collectionBtnModalJelly = document.querySelectorAll('.swiper-slide button');
let collectionModalJelly = document.querySelectorAll('.modal-jelly');
let closeBtnModalJelly = document.querySelectorAll('.close-modal-jelly');
for (let i = 0; i < collectionBtnModalJelly.length; i++) {
  collectionBtnModalJelly[i].addEventListener('click', () => {
    collectionModalJelly[i].classList.add('active');
    closeBtnModalJelly[i].addEventListener('click', () => {
      collectionModalJelly[i].classList.remove('active');
    });
  });
};




// Раздел с описание киселя
let collectionListItem = document.querySelectorAll('.nav-what-is-leovit ul li');
let collectionLine = document.querySelectorAll('.wrapper-line-nav hr');
let collectionDivChangeContent = document.querySelectorAll('.change-block');

for (let i = 0; i < collectionListItem.length; i++) {
  collectionListItem[i].addEventListener('click', () => {
    collectionListItem.forEach(el => {
      el.classList.remove('active')
    });
    collectionLine.forEach(el => {
      el.classList.remove('active')
    });
    collectionDivChangeContent.forEach(el => {
      el.classList.remove('active')
    });
    collectionListItem[i].classList.add('active');
    collectionLine[i].classList.add('active');
    collectionDivChangeContent[i].classList.add('active');
  })
}


// Раздел ассортимента
let openBtnModalAssortment = document.querySelector('#open-modal-assortment');
let closeBtnModalAssortment = document.querySelector('.close-modal-assortment');
let modalAssortment = document.querySelector('.modal-assortment');

openBtnModalAssortment.addEventListener('click', () => {
  modalAssortment.classList.add('active');
})

closeBtnModalAssortment.addEventListener('click', () => {
  modalAssortment.classList.remove('active');
})