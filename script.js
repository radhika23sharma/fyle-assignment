document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".service-slide");
    const dots = document.querySelectorAll(".dot");
    const totalSlides = slides.length;
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    }

    function setActiveDot(index) {
        dots.forEach(dot => {
            dot.classList.remove("active");
        });
        dots[index].classList.add("active");
    }

    function nextSlide() {
        const nextIndex = (currentIndex + 1) % totalSlides;
        showSlide(nextIndex);
        setActiveDot(nextIndex);
        currentIndex = nextIndex;
    }

    showSlide(currentIndex);
    setActiveDot(currentIndex);

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showSlide(index);
            setActiveDot(index);
            currentIndex = index;
        });
    });

    setInterval(nextSlide, 5000);
});
