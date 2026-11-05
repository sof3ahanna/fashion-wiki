document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carousel-slide");
    const nextBtn = document.querySelector(".arrow-right");
    const prevBtn = document.querySelector(".arrow-left");
    let currentIndex = 0;

    // Safety check to ensure elements exist before executing code
    if (!nextBtn || !prevBtn || slides.length === 0) {
        console.warn("Slider components missing from the DOM. Check your HTML class configurations.");
        return;
    }

    function changeSlide(targetIndex) {
        // Hide current active item
        slides[currentIndex].classList.remove("active");
        
        // Circular index looping handling logic
        if (targetIndex >= slides.length) {
            currentIndex = 0;
        } else if (targetIndex < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = targetIndex;
        }
        
        // Reveal the newly selected target slide
        slides[currentIndex].classList.add("active");
    }

    // Button Click Controls
    nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        changeSlide(currentIndex + 1);
    });

    prevBtn.addEventListener("click", (e) => {
        e.preventDefault();
        changeSlide(currentIndex - 1);
    });
});