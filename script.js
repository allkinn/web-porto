// Panggil fungsi ini di awal skrip sebelum DOMContentLoaded
checkAccess();

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // 1. Fungsi untuk mengatur tema
    function setTheme(theme) {
        if (theme === 'light') {
            body.classList.add('light-theme');
            body.classList.remove('dark-theme');
            themeToggle.querySelector('.icon-text').textContent = '🌙'; // Ganti ikon ke bulan
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.add('dark-theme');
            body.classList.remove('light-theme');
            themeToggle.querySelector('.icon-text').textContent = '☀️'; // Ganti ikon ke matahari
            localStorage.setItem('theme', 'dark');
        }
    }

    // 2. Cek preferensi yang tersimpan saat memuat halaman
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // Default ke dark-theme jika belum ada preferensi
        setTheme('dark'); 
    }

    // 3. Listener untuk tombol toggle
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Pastikan filter hanya berjalan jika elemen filter ada
    const filterContainer = document.querySelector('.project-filters');
    if (filterContainer) {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filterValue = button.getAttribute('data-filter');

                // Hapus kelas aktif dari semua tombol, lalu tambahkan ke tombol yang diklik
                filterButtons.forEach(btn => btn.classList.remove('active-filter'));
                button.classList.add('active-filter');

                // Tampilkan/Sembunyikan Kartu Proyek
                projectCards.forEach(card => {
                    const tags = card.getAttribute('data-tags');
                    
                    if (filterValue === 'all' || tags.includes(filterValue)) {
                        card.style.display = 'flex'; // Tampilkan kartu
                    } else {
                        card.style.display = 'none'; // Sembunyikan kartu
                    }
                });
            });
        });
    }
    // ... (Logika theme-toggle lainnya tetap di sini) ...
});

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    
    // Logika untuk halaman login saja
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const errorMessage = document.getElementById('error-message');

            // Kredensial Statis (Contoh)
            const VALID_USER = 'admin';
            const VALID_PASS = 'admin1234'; // Ganti dengan password yang lebih kuat (misalnya hash jika menggunakan backend)

            // ... (di dalam event listener loginForm submit) ...
            if (username === VALID_USER && password === VALID_PASS) {
                // GANTI localStorage dengan sessionStorage
                sessionStorage.setItem('isLoggedIn', 'true'); 
                window.location.href = 'home.html';
            } else {
                // Gagal Login
                errorMessage.style.display = 'block';
            }
        });
    }

    // ... (Logika theme-toggle dan filter proyek lainnya tetap di sini) ...
});

// --- Fungsi Pengecekan Akses ---
function checkAccess() {
    // GANTI localStorage dengan sessionStorage
    const isLoggedIn = sessionStorage.getItem('isLoggedIn'); 
    const currentPage = window.location.pathname.split('/').pop();

    if (currentPage !== 'index.html' && isLoggedIn !== 'true') {
        window.location.href = 'index.html';
    } else if (currentPage === 'index.html' && isLoggedIn === 'true') {
        window.location.href = 'home.html';
    }
}
// ...

// document.addEventListener('DOMContentLoaded', () => { ... kode Anda lainnya ... });

document.addEventListener('DOMContentLoaded', () => {
    // ... (kode login form dan theme-toggle lainnya) ...

    const logoutBtn = document.getElementById('logout-btn');

    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Hapus status login
            sessionStorage.removeItem('isLoggedIn');
            
            // Arahkan kembali ke halaman login
            window.location.href = 'login.html';
        });
    }

});
