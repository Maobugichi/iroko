const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    620: {
      slidesPerView:2
    },
    1024: {
      slidesPerView: 3.7
    }
  }

 
});

const navbar = document.querySelector(".menu")

const side = document.querySelector(".side-nav")


navbar.addEventListener("click", () => {
  side.classList.toggle("sinav")
})

const hide = document.querySelector(".al")

const cookies = document.querySelector(".cookies")

hide.addEventListener("click", () => {
  cookies.classList.add("hid")
})


console.log(cont.offsetTop)