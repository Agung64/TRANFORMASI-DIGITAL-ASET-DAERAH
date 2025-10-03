// Tunggu sampai semua konten halaman dimuat
document.addEventListener('DOMContentLoaded', function() {

    // === DAFTAR GAMBAR ANDA (GANTI NAMA FILE DI SINI) ===
    // Tuliskan semua nama file gambar Anda di dalam array ini.
    const predefinedImages = [
        "Slide1.png",
	"Slide2.png",
	"Slide3.png",
	"Slide4.png",
	"Slide5.png",
	"Slide6.png",
	"Slide7.png",
	"Slide8.png",
	"Slide9.png",
	"Slide10.png",
	"Slide11.png",
        // Tambahkan nama file lain di sini jika ada
    ];
    // ======================================================

    // Mendapatkan elemen dari HTML
    const slideshowContainer = document.getElementById('slideshow-container');
    const slideImage = document.getElementById('slideImage');
    const slideNumber = document.getElementById('slideNumber');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentSlideIndex = 0; // Index slide yang sedang aktif

    // Fungsi untuk menampilkan slide
    function showSlide(index) {
        if (predefinedImages.length === 0) {
            slideshowContainer.innerHTML = "<p>Tidak ada gambar yang ditentukan.</p>";
            return;
        }

        // Atur gambar dan nomor slide
        slideImage.src = predefinedImages[index];
        slideNumber.textContent = `${index + 1} / ${predefinedImages.length}`;
        
        // Atur visibilitas tombol navigasi
        prevBtn.style.display = (index === 0) ? 'none' : 'block';
        nextBtn.style.display = (index === predefinedImages.length - 1) ? 'none' : 'block';
    }

    // Event listener untuk tombol berikutnya
    nextBtn.addEventListener('click', () => {
        if (currentSlideIndex < predefinedImages.length - 1) {
            currentSlideIndex++;
            showSlide(currentSlideIndex);
        }
    });

    // Event listener untuk tombol sebelumnya
    prevBtn.addEventListener('click', () => {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
            showSlide(currentSlideIndex);
        }
    });

    // --- Logika untuk Modal (Zoom Gambar) ---
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.getElementById('closeBtn');

    function openModal(imageUrl) {
        modalImage.src = imageUrl;
        imageModal.style.display = 'flex';
    }

    function closeModal() {
        imageModal.style.display = 'none';
    }

    slideImage.addEventListener('click', () => {
        openModal(slideImage.src);
    });

    closeBtn.addEventListener('click', closeModal);

    imageModal.addEventListener('click', (event) => {
        if (event.target === imageModal) {
            closeModal();
        }
    });
    
    // Langsung mulai slideshow saat halaman dimuat
    showSlide(currentSlideIndex);
    slideshowContainer.classList.remove('hidden'); // Pastikan slideshow terlihat
});