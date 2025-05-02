//Transform de los elementos de la lista de proyectos.
const projectListItems = document.getElementsByClassName("list_item");

for (let item of projectListItems) {
    item.addEventListener("mouseover", () => {
        item.style.transform = "scale(1.05)";
        item.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener("mouseout", () => {
        item.style.transform = "scale(1)";
    });
}


//Transform de los elementos de about me.
const cards = document.getElementsByClassName("about_me_list1");

for (let item of cards) {
    item.addEventListener("mouseover", () => {
        item.style.transform = "scale(1.05)";
        item.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener("mouseout", () => {
        item.style.transform = "scale(1)";
    });
}

const secondCard = document.getElementById("about-me-list2");

secondCard.addEventListener("mouseover", () => {
    secondCard.style.transform = "scale(1.05)";
    secondCard.style.transition = 'transform 0.3s ease';
});

secondCard.addEventListener("mouseout", () => {
    secondCard.style.transform = "scale(1)";
});

//Scroll up
function scrollUp() {
    const scrollup = document.getElementById("scroll-up")
    if (this.scrollY >= 460) scrollup.classList.add("show-scroll"); else scrollup.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp)


// let toggle = document.getElementById('toggle');
// let body = document.body;

// toggle.addEventListener('change', (event) => {
//     let checked = event.target.checked;
//     body.style.background = checked ? '#000' : 'linear-gradient(to top, #37ecba 0%, #72afd3 100%)'