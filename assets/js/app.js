
//Scroll Reveal 
const sr = ScrollReveal({
  origin: "top",
  distance: '60px',
  duration: 1500,
  delay: 100,
})

sr.reveal(`#titulo2, .content2, #paleta, #language`)
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
  document.getElementById('content2').style.transition = ".2s ease-in-out";
  document.getElementById('dark').style.transition = ".1s ease-in-out";
}

let toggle2 = document.getElementById("toggle2");

toggle2.addEventListener('change', (event) => {
  let checked = event.target.checked;
  document.getElementById('titulo1', 'titulo2', 'titulo3', 'titulo4', 'degree', 'descrip', 'tech1', 'meth1', 'skills', 'langua1', 'teamw', 'assert', 'creati', 'adapta', 'proact', 'proyecto3', 'proyecto4');

  if (toggle = checked) {
    titulo1.textContent = 'Sobre mí';
    titulo2.textContent = 'Proyectos';
    titulo3.textContent = 'Habilidades';
    titulo4.textContent = 'Certificaciones';
    degree.textContent = 'Ing. Software y Sistemas C.🖥️';
    descrip.textContent = 'Disfruto ser parte de un equipo, el aprendizaje continuo y contribuir en ideas, también me gusta el mundo VR y los idiomas.'
    tech1.textContent = '🖥️ Tecnologías: ';
    meth1.textContent = '📈 Metodologías: ';
    skills.textContent = '🤓 Habilidades blandas: ';
    langua1.textContent = '🔠 Idiomas: ';
    teamw.textContent = '👥 Trabajo en equipo'; 
    assert.textContent = '🫡 Asertividad'; 
    creati.textContent = '🚀 Creatividad'; 
    adapta.textContent = '🎡 Adaptabilidad'; 
    proact.textContent = '⚡ Proactividad'; 
    proyecto3.textContent = 'Prácticas';
    proyecto4.innerHTML = 'Ejercicios';
  } else {
    titulo1.textContent = 'About me';
    titulo2.textContent = 'Projects';
    titulo3.textContent = 'Skills';
    titulo4.textContent = 'Certifications';
    degree.textContent = 'Software Engineer Degree🖥️';
    descrip.textContent = 'I enjoy being part of a team, continuous learning and contributing ideas, I also like VR tech and learning languages.';
    tech1.textContent = '🖥️ Technologies: ';
    meth1.textContent = '📈 Methodologies: ';
    skills.textContent = '🤓 Soft Skills: ';
    langua1.textContent = '🔠 Languages: ';
    teamw.textContent = '👥 Team work'; 
    assert.textContent = '🫡 Assertivity'; 
    creati.textContent = '🚀 Creativity'; 
    adapta.textContent = '🎡 Adaptability'; 
    proact.textContent = '⚡ Proactivity'; 
    proyecto3.textContent = 'Internship';
    proyecto4.innerHTML = 'Small Projects';
  }

})