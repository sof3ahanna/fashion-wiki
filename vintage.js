document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".next-arrow");
    const prevBtn = document.querySelector(".prev-arrow");
    let currentSlide = 0;

    function showSlide(index) {
        // Hilangkan kelas 'active' daripada slide sekarang
        slides[currentSlide].classList.remove("active");
        
        // Kira indeks slide yang baru secara berputar (looping)
        currentSlide = (index + slides.length) % slides.length;
        
        // Berikan kelas 'active' kepada slide baru
        slides[currentSlide].classList.add("active");
    }

    // Event listener untuk butang Seterusnya
    nextBtn.addEventListener("click", function() {
        showSlide(currentSlide + 1);
    });

    // Event listener untuk butang Sebelumnya
    prevBtn.addEventListener("click", function() {
        showSlide(currentSlide - 1);
    });

    // Main auto-slide setiap 5 saat (Pilihan)
    setInterval(function() {
        showSlide(currentSlide + 1);
    }, 5000);
});