const toggles = document.querySelectorAll(".faq-toggle");
const faqTitles = document.querySelectorAll(".faq-title");
const circlePlus = document.querySelectorAll(".circle-plus");

circlePlus.forEach(circle => {
    circle.addEventListener("click", () => {
        circle.classList.toggle('opened');
        circle.parentNode.classList.toggle("active");
    });
});

faqTitles.forEach(faq => {
    faq.addEventListener("click", () => {
        const correspondingCircle = faq.parentNode.querySelector('.circle-plus');
        correspondingCircle.classList.toggle('opened');
        correspondingCircle.parentNode.classList.toggle("active");
    });
});