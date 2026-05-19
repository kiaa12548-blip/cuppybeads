/* ===========================
   CUPPY BEADS – script.js
=========================== */

/* ---- Article Data ---- */
const articles = [
  {
    icon: "💎",
    bg: "linear-gradient(135deg, #FFD6E7, #E8D5F5)",
    cat: "💡 Tips & Tricks",
    date: "15 Mei 2025",
    title: "Cara Merawat Gelang Manik Agar Awet Lama",
    content: `
      <p>Gelang manik handmade memang cantik, tapi butuh perawatan khusus supaya tetap awet dan tidak mudah rusak. Berikut ini tips merawat gelang manikmu!</p>

      <h4>🌸 1. Jauhkan dari Air Berlebihan</h4>
      <p>Meski kebanyakan gelang manik tahan air, ada baiknya kamu melepas gelang sebelum mandi, berenang, atau terkena air hujan dalam waktu lama. Air bisa melemahkan benang elastic dan mempengaruhi kilap manik.</p>

      <h4>💕 2. Simpan di Tempat Kering dan Tertutup</h4>
      <p>Simpan gelangmu di dalam kotak perhiasan atau kantong kain kecil. Hindari menyimpannya di tempat lembab atau terkena sinar matahari langsung karena bisa memudahkan warna manik memudar.</p>

      <h4>✨ 3. Hindari Kontak dengan Bahan Kimia</h4>
      <p>Parfum, lotion, dan bahan kimia lainnya bisa merusak lapisan manik dan menyebabkan warna pudar. Gunakan aksesori setelah lotion dan parfummu meresap sempurna.</p>

      <h4>🎀 4. Bersihkan dengan Kain Lembut</h4>
      <p>Lap gelangmu dengan kain microfiber yang lembut secara berkala untuk membersihkan debu dan kotoran. Untuk noda membandel, gunakan kain yang sedikit dibasahi air bersih.</p>

      <h4>💜 5. Periksa Benang Secara Berkala</h4>
      <p>Cek kondisi benang elastic gelangmu setiap beberapa bulan. Jika terlihat meregang atau hampir putus, segera hubungi kami untuk servis gelang kesayanganmu!</p>

      <p>Dengan perawatan yang tepat, gelang Cuppy Beads kamu bisa bertahan bertahun-tahun dan tetap cantik seperti pertama kali dibeli! 💕</p>
    `
  },
  {
    icon: "🎨",
    bg: "linear-gradient(135deg, #D5F5E8, #D5E8F5)",
    cat: "🎀 Fashion",
    date: "1 Mei 2025",
    title: "Trend Gelang 2025: Warna Pastel dan Charm Lucu",
    content: `
      <p>Dunia fashion aksesori di tahun 2025 semakin berwarna dan ekspresif! Tren gelang manik kali ini sangat dipengaruhi oleh estetika Y2K yang kembali naik daun dengan sentuhan modern yang lebih segar.</p>

      <h4>🌈 Warna Pastel Mendominasi</h4>
      <p>Warna-warna pastel seperti pink muda, lavender, mint, dan peach menjadi pilihan utama di 2025. Kombinasi warna pastel yang beragam dalam satu gelang memberikan kesan playful dan menyenangkan.</p>

      <h4>🌟 Charm dengan Motif Lucu</h4>
      <p>Charm berbentuk hati, bintang, bulan, bunga, dan tokoh kartun lucu sedang sangat diminati. Semakin unik charm-nya, semakin spesial gelangmu!</p>

      <h4>💎 Mix & Match adalah Kunci</h4>
      <p>Tren 2025 sangat mendukung layering dan mixing berbagai jenis gelang. Padukan gelang manik warna-warni dengan gelang mutiara untuk tampilan yang unik dan berkarakter.</p>

      <h4>🎀 Personalisasi Nama dan Initial</h4>
      <p>Gelang dengan manik huruf yang menampilkan nama atau initial sedang sangat populer. Selain unik, ini juga bisa jadi hadiah yang sangat personal untuk orang-orang tersayang.</p>

      <h4>🌸 Sustainable & Handmade</h4>
      <p>Semakin banyak orang yang memilih produk handmade berkualitas tinggi daripada produk mass-produced. Ini adalah momen tepat untuk mendukung karya pengrajin lokal seperti Cuppy Beads! 💕</p>
    `
  },
  {
    icon: "🎁",
    bg: "linear-gradient(135deg, #F5F0D5, #F5D5E8)",
    cat: "💌 Inspiration",
    date: "20 April 2025",
    title: "Ide Hadiah Unik: Gelang Custom untuk Sahabat",
    content: `
      <p>Bingung mau kasih hadiah apa untuk sahabat, pacar, atau keluarga? Gelang custom dari Cuppy Beads bisa jadi solusi hadiah yang tidak hanya cantik tapi juga penuh makna! 🎀</p>

      <h4>💕 Kenapa Gelang Custom Spesial?</h4>
      <p>Tidak seperti hadiah biasa yang bisa dibeli di mana saja, gelang custom dibuat khusus sesuai keinginan kamu. Mulai dari pilihan warna, jenis manik, hingga charm yang sesuai kepribadian penerimanya.</p>

      <h4>🌟 Ide Custom yang Bisa Kamu Coba</h4>
      <ul>
        <li>💜 Gelang dengan manik inisial nama si penerima</li>
        <li>🌈 Gelang dengan warna favorit mereka</li>
        <li>⭐ Gelang pasangan "best friend" yang saling melengkapi</li>
        <li>🎂 Gelang bertema ulang tahun dengan charm angka usia</li>
        <li>💍 Gelang couple dengan warna yang matching</li>
      </ul>

      <h4>🎁 Untuk Momen Apa Saja?</h4>
      <p>Gelang custom cocok untuk berbagai momen istimewa: ulang tahun, wisuda, Valentine, Lebaran, atau bahkan sekadar hadiah kejutan tanpa alasan khusus — karena kadang hadiah terbaik datang tanpa alasan!</p>

      <h4>📦 Packaging yang Cantik</h4>
      <p>Setiap gelang custom Cuppy Beads dikemas dalam kotak cantik dengan pita dan kartu ucapan yang bisa kamu personalisasi. Hadiah yang sudah cantik di dalam, kemasannya pun tidak kalah menggemaskan!</p>

      <p>Yuk, pesan gelang custom sekarang dan buat orang-orang spesial di hidupmu merasa dicintai! 💕 Hubungi kami untuk konsultasi desain gratis.</p>
    `
  }
];

/* ========================
   NAVBAR – Scroll + Active Link
======================== */
const navbar   = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  // Scrolled class
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Active link highlight
  let currentId = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 90;
    if (window.scrollY >= top) currentId = sec.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentId}`) {
      link.classList.add('active');
    }
  });
});

/* ========================
   HAMBURGER MENU
======================== */
const hamburger  = document.getElementById('hamburger');
const navLinkBox = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinkBox.classList.toggle('open');
  hamburger.classList.toggle('active');
});

// Close on link click
navLinkBox.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinkBox.classList.remove('open');
    hamburger.classList.remove('active');
  });
});

/* ========================
   ARTICLE MODAL
======================== */
function openArticle(idx) {
  const art  = articles[idx];
  const modal = document.getElementById('articleModal');

  document.getElementById('modalThumb').style.background = art.bg;
  document.getElementById('modalThumb').textContent = art.icon;
  document.getElementById('modalMeta').innerHTML =
    `<span>${art.cat}</span><span>📅 ${art.date}</span>`;
  document.getElementById('modalTitle').textContent   = art.title;
  document.getElementById('modalContent').innerHTML   = art.content;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeArticle(e) {
  if (e.target === document.getElementById('articleModal')) {
    closeModal('articleModal');
  }
}

/* ========================
   ORDER MODAL
======================== */
function openOrder(name, price) {
  const modal = document.getElementById('orderModal');
  document.getElementById('orderProductName').textContent = name;
  document.getElementById('orderProductPrice').textContent = price;

  const waMsg  = encodeURIComponent(
    `Halo Cuppy Beads! 🎀\nSaya ingin memesan:\n✨ ${name} – ${price}\n\nMohon info ketersediaan dan cara pemesanannya ya!`
  );
  document.getElementById('orderWaLink').href =
    `https://wa.me/6281234567890?text=${waMsg}`;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeOrderModal(e) {
  if (e.target === document.getElementById('orderModal')) {
    closeModal('orderModal');
  }
}

/* ========================
   GENERIC CLOSE MODAL
======================== */
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
}

// Close modals on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal('articleModal');
    closeModal('orderModal');
  }
});

/* ========================
   CONTACT FORM
======================== */
function submitForm(e) {
  e.preventDefault();
  const name  = document.getElementById('formName').value.trim();
  const email = document.getElementById('formEmail').value.trim();
  const wa    = document.getElementById('formWa').value.trim();
  const topic = document.getElementById('formTopic').value;
  const msg   = document.getElementById('formMsg').value.trim();

  if (!name || !email || !msg) {
    showToast('⚠️ Mohon lengkapi semua field!');
    return;
  }

  // Build WhatsApp message
  const waText = encodeURIComponent(
    `💌 Pesan baru dari website Cuppy Beads!\n\n` +
    `👤 Nama   : ${name}\n` +
    `📧 Email  : ${email}\n` +
    `📱 WA     : ${wa || '-'}\n` +
    `💬 Topik  : ${topic || 'Umum'}\n\n` +
    `📝 Pesan:\n${msg}`
  );

  // Open WA
  window.open(`https://wa.me/6281558534496?text=${waText}`, '_blank');

  // Reset form
  document.getElementById('contactForm').reset();
  showToast('✅ Pesan terkirim! Terima kasih 💕');
}

/* ========================
   TOAST NOTIFICATION
======================== */
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

/* ========================
   SCROLL REVEAL ANIMATION
======================== */
const revealEls = document.querySelectorAll(
  '.product-card, .article-card, .testi-card, .stat-card, .profile-grid, .contact-grid'
);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => {
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

/* ========================
   SMOOTH SCROLL for all anchor links
======================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ========================
   BEAD HOVER SPARKLE
======================== */
document.querySelectorAll('.bead').forEach(bead => {
  bead.addEventListener('mouseenter', () => {
    bead.style.transform = 'scale(1.3) rotate(-10deg)';
    bead.style.transition = 'transform 0.2s';
    bead.style.zIndex = '2';
  });
  bead.addEventListener('mouseleave', () => {
    bead.style.transform = '';
    bead.style.zIndex = '';
  });
});

console.log('💕 Cuppy Beads – Handmade With Love | Website loaded!');