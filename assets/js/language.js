let toggle2 = document.getElementById("toggle2");

toggle2.addEventListener('change', (event) => {
  let checked = event.target.checked;
  document.getElementById('degree', 'descip', 'titulo1', 'titulo2');
  let builted = document.querySelectorAll(".builted")

  if (toggle2 = checked) {
    degree.textContent = 'Software Engineer and Systems degree 🖥️';
    descrip.textContent = 'I enjoy being part of a team, continuous learning and contributing ideas, also like VR tech and learning languages.';
    titulo1.textContent = 'My projects';
    titulo2.textContent = 'Knowledge and skills';
    habilidades.textContent = 'Soft skills: 🤓'
    hab1.textContent = 'Adaptability 🎡';
    hab2.textContent = 'Teamwork 👥';
    hab3.textContent = 'Assertive communication 🫡';
    hab4.textContent = 'Creativity 🚀';
    hab5.textContent = 'Proactivity ⚡';
    meth.textContent = 'Methodologies: 🛠️';
    lang.textContent = 'Language: 🌐';
    lang1.textContent = 'Spanish: native';
    lang2.textContent = 'English: B1+';
    worked.textContent = 'Technologies I have worked with';
    proy1title.textContent = 'Lawyer Landing Page';
    proy3title.textContent = 'Megaferia Project';
    proy4title.textContent = 'Internship Project';
    proy5title.textContent = 'JavaScript Excercises';
    proy1desc.textContent = 'Project of a landing page for a lawyer, with a clean, responsive and professional design.';
    proy2desc.textContent = 'Project of a landing page for a veterinary clinic, with a custom and functional design.';
    proy3desc.textContent = 'School project Landing Page, recreated from scratch of the official page and ticket sales with SQL.';
    proy4desc.textContent = 'Internship project, where I learned about the development of a web application and the use of SQL.';
    proy5desc.textContent = 'JavaScript exercises, where I learned to use functions and control structures.';
    proy6title.textContent = 'Online Store';
    proy6desc.textContent = 'An online store with dark mode and responsiveness included, adaptable and aesthetically striking.';
    proy7title.textContent = 'Weather web';
    proy7desc.textContent = 'Page to check the weather by city, consuming OpenWeatherAPI.'
    proy8title.textContent = "Reviews Page"
    proy8desc.textContent = "Job reviews landing page, based on Murad's design on the Behance website."
    proy9desc.textContent = "Landing page created with React and Tailwind for the local restaurant Malek Burger, in Campeche, Mexico."
    builted.forEach(item => item.textContent = "Built with: ")
  } else {
    degree.textContent = 'Ing. Software y Sistemas Computacionales 🖥️';
    descrip.textContent = 'Me gusta ser parte de un equipo, aprender continuamente y aportar ideas, también me gusta la realidad virtual y aprender idiomas.';
    titulo1.textContent = 'Mis proyectos';
    titulo2.textContent = 'Conocimientos y habilidades';
    habilidades.textContent = 'Habilidades blandas: 🤓';
    hab1.textContent = 'Adaptabilidad 🎡';
    hab2.textContent = 'Trabajo en equipo 👥';
    hab3.textContent = 'Comunicación asertiva 🫡';
    hab4.textContent = 'Creatividad 🚀';
    hab5.textContent = 'Proactividad ⚡';
    meth.textContent = 'Metodologías: 🛠️';
    lang.textContent = 'Idiomas: 🌐';
    lang1.textContent = 'Español: nativo';
    lang2.textContent = 'Inglés: B1+';
    worked.textContent = 'Tecnologías con las que he trabajado';
    proy1title.textContent = 'Landing Page de Abogado';
    proy3title.textContent = 'Proyecto Megaferia';
    proy4title.textContent = 'Prácticas profesionales';
    proy5title.textContent = 'Ejercicios con JavaScript';
    proy1desc.textContent = 'Proyecto de una landing page para un abogado, con un diseño limpio y profesional.';
    proy2desc.textContent = 'Proyecto de una landing page para una clínica veterinaria, con un diseño a medida y funcional.'
    proy3desc.textContent = 'Proyecto escolar Landing Page, recreado desde cero de la página oficial y venta de boletos con SQL.'
    proy4desc.textContent = 'Proyecto realizado durante mis prácticas profesionales y aprendiendo a usar bases de datos.'
    proy5desc.textContent = 'Ejercicios de JavaScript, donde aprendí a usar funciones y estructuras de control.'
    proy6title.textContent = 'Tienda en línea';
    proy6desc.textContent = 'Tienda en línea con modo oscuro y responsive incluído, adaptable y estéticamente llamativo.';
    proy7title.textContent = "Consulta de clima";
    proy7desc.textContent = "Página para consultar el clima por ciudad, consumiendo API de clima OpenWeatherAPI.";
    proy8title.textContent = "Página de reseñas"
    proy8desc.textContent = "Landing page sobre reseñas laborales, creado a partir del diseño de Murad en el sitio web Behance."
    proy9desc.textContent = "Landing page realizado con React y Tailwind, para restaurante local Malek Burger, en la ciudad de Campeche, México."
    builted.forEach(item => item.textContent = "Desarrollado con: ")
  }
})