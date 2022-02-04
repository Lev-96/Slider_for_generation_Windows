let slides = ['img/1.jpeg', 'img/2.jpeg', 'img/3.jpg', 'img/4.jpg', 'img/5.png', 'img/6.jpg','img/7.jpg']
let main = document.getElementsByTagName('main')[0]
let smallImg = document.getElementsByClassName('item')
let i = 0
main.style.background = `url(${slides[i]})`

function setStyle(id, item) {
   main.style.background = `url(${slides[id - 1]})`

   for (let i = 0; i < smallImg.length; i++) {
      smallImg[i].classList.remove('active')
   }

   item.classList.add('active')
}

function changeSlide(arg){
   if(arg == "prev"){
      i--
      if (i < 0) {
         i = slides.length - 1
      }
   }else{
      i++
      if (i == slides.length) {
         i = 0
      }
   }

   main.style.background = `url(${slides[i]})`

   for (let i = 0; i < smallImg.length; i++) {
      smallImg[i].classList.remove('active')
   }

   smallImg[i].classList.add('active')
}