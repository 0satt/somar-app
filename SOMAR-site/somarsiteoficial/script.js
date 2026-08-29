let currentSlide = 0;

function moveCarousel(direction) {
    const track = document.getElementById("carouselTrack");
    const cards = document.querySelectorAll(".ong-card");

    const cardWidth = cards[0].offsetWidth + 20; 

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = 0;
    }

    if (currentSlide > cards.length - 1) {
        currentSlide = cards.length - 1;
    }

    track.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
}

window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    const heroSection = document.getElementById("inicio");

    const heroHeight = heroSection.offsetHeight;

    if (window.scrollY > heroHeight - 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
