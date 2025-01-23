
//Scroll Reveal 
const sr = ScrollReveal({
  origin: "top",
  distance: '60px',
  duration: 1500,
  delay: 100,
})

sr.reveal(`#titulo2, .content2, #paleta`)
sr.reveal(`#titulo1, .content1, .content4, #titulo4`, { origin: "left" })
sr.reveal(`.content3, #titulo3`, { origin: "bottom" }, { reset: true })



//Swipper

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar

});


//Dark Mode

let toggle = document.getElementById("toggle");
let label_toggle = document.getElementById("label_toggle");

toggle.addEventListener('change', (event) => {
  let checked = event.target.checked;
  document.body.classList.toggle('dark');
})


function newImg(img) {
  document.getElementById('content2').style.backgroundImage = img;
  document.getElementById('content2').style.transition = ".8s ease-in-out";
  document.getElementById('dark').style.transition=".8s ease-in-out";
}