let currentSlide = 1;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.getElementById('total-slides').textContent = totalSlides;

// Inisialisasi Dots Navigasi
const dotsContainer = document.getElementById('slide-dots');
for (let i = 1; i <= totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 1) dot.classList.add('active');
    dot.setAttribute('onclick', `goToSlide(${i})`);
    dotsContainer.appendChild(dot);
}

function updateSlideView() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index + 1 === currentSlide) {
            slide.classList.add('active');
        }
    });

    // Update Dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index + 1 === currentSlide) {
            dot.classList.add('active');
        }
    });

    document.getElementById('current-slide-num').textContent = currentSlide;
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide > totalSlides) {
        currentSlide = 1; // Kembali ke slide awal jika lewat
    } else if (currentSlide < 1) {
        currentSlide = totalSlides;
    }
    updateSlideView();
}

function goToSlide(slideNum) {
    currentSlide = slideNum;
    updateSlideView();
}

// Navigasi Keyboard (Tombol Panah Kanan/Kiri)
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        changeSlide(1);
    } else if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    }
});