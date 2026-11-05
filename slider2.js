document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carousel-slide");
    const nextBtn = document.querySelector(".arrow-right");
    const prevBtn = document.querySelector(".arrow-left");
    let currentIndex = 0;

    // Guard safety validation clause
    if (!nextBtn || !prevBtn || slides.length === 0) {
        console.warn("Slider components missing initialized classes.");
        return;
    }

    function changeSlide(targetIndex) {
        // Drop visibility class active status
        slides[currentIndex].classList.remove("active");
        
        // Loop range index management checks
        if (targetIndex >= slides.length) {
            currentIndex = 0;
        } else if (targetIndex < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = targetIndex;
        }
        
        // Append class target reveal assignment
        slides[currentIndex].classList.add("active");
    }

    // Button Interaction Hooks
    nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        changeSlide(currentIndex + 1);
    });

    prevBtn.addEventListener("click", (e) => {
        e.preventDefault();
        changeSlide(currentIndex - 1);
    });
});