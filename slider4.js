document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevArrow = document.querySelector('.prev-btn');
    const nextArrow = document.querySelector('.next-btn');
    let currentSlideIndex = 0;

    function renderSlide(index) {
        // Remove active state from current slide
        slides[currentSlideIndex].classList.remove('active');

        // Circular boundary checker
        if (index >= slides.length) {
            currentSlideIndex = 0;
        } else if (index < 0) {
            currentSlideIndex = slides.length - 1;
        } else {
            currentSlideIndex = index;
        }

        // Set next active slide
        slides[currentSlideIndex].classList.add('active');
    }

    // Prev Button Event
    prevArrow.addEventListener('click', () => {
        renderSlide(currentSlideIndex - 1);
    });

    // Next Button Event
    nextArrow.addEventListener('click', () => {
        renderSlide(currentSlideIndex + 1);
    });
});