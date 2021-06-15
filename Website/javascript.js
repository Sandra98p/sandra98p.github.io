function on() {
    document.getElementById("pop-up-mobile").style.display = "block";
}
  
function off() {
    document.getElementById("pop-up-mobile").style.display = "none";
}

function an() {
  document.getElementById("pop-up-desktop").style.display = "block";
}

function aus() {
  document.getElementById("pop-up-desktop").style.display = "none";
}

var slider1 = new Swiper(".slider1", {
  slidesPerView: 2.75,
  spaceBetween: 50,
  
  pagination: {
      el: ".swiper-pagination",
      clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 
});

var slider2 = new Swiper(".slider2", {
  slidesPerView: 1.1,
  spaceBetween: 0,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
});