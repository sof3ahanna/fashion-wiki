document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".next-arrow");
    const prevBtn = document.querySelector(".prev-arrow");
    let currentSlide = 0;

    function showSlide(index) {
        // Buang kelas aktif dari slide semasa
        slides[currentSlide].classList.remove("active");
        
        // Kira putaran slaid baru secara gelung (looping)
        currentSlide = (index + slides.length) % slides.length;
        
        // Tambah kelas aktif pada slaid baharu
        slides[currentSlide].classList.add("active");
    }

    // Fungsi klik ke kanan
    nextBtn.addEventListener("click", function() {
        showSlide(currentSlide + 1);
    });

    // Fungsi klik ke kiri
    prevBtn.addEventListener("click", function() {
        showSlide(currentSlide - 1);
    });

    // Slaid bertukar automatik setiap 5 saat (Boleh ditutup jika perlu)
    setInterval(function() {
        showSlide(currentSlide + 1);
    }, 5000);
});