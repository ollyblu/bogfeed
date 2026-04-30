import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import ImagePlaceholder from '../components/ImagePlaceholder'
import './Home.css'

const features = [
  {
    icon: '🌿',
    title: 'Berbasis Limbah Lokal',
    desc: 'Diformulasikan dari Gedebok pisang — limbah lokal yang kaya serat dan nutrisi, mendukung keberlanjutan lingkungan.',
  },
  {
    icon: '⚖️',
    title: 'Nutrisi Seimbang & Lengkap',
    desc: 'Complete feed yang dirancang memenuhi 100% kebutuhan nutrisi harian domba tanpa perlu tambahan pakan lain.',
  },
  {
    icon: '🥩',
    title: 'Tingkatkan Kualitas Daging',
    desc: 'Formula khusus penggemukan (fattening) yang terbukti mendukung pertumbuhan optimal dan kualitas daging premium.',
  },
  {
    icon: '📦',
    title: 'Praktis & Siap Pakai',
    desc: 'Kemasan higienis dalam berbagai ukuran (1–15 kg), mudah disimpan dan tidak memerlukan perlakuan tambahan.',
  },
]

const products = [
  { size: '1 kg', desc: 'Ideal untuk uji coba & peternak kecil', highlight: false },
  { size: '5 kg', desc: 'Pilihan ekonomis untuk kebutuhan mingguan', highlight: true },
  { size: '10 kg', desc: 'Efisien untuk peternakan skala menengah', highlight: false },
  { size: '15 kg', desc: 'Paling hemat untuk peternak profesional', highlight: false },
]

const eduCards = [
  {
    icon: '🏡',
    title: 'Syarat Kandang yang Baik',
    desc: 'Pelajari spesifikasi kandang ideal untuk domba — lokasi, ventilasi, ukuran, dan sistem drainase yang benar.',
    link: '/edukasi',
  },
  {
    icon: '💊',
    title: 'Perawatan & Pencegahan Penyakit',
    desc: 'Panduan perawatan rutin, vaksinasi, dan cara mengenali tanda-tanda domba sehat vs sakit.',
    link: '/edukasi',
  },
  {
    icon: '♻️',
    title: 'Cara Membuat Kompos',
    desc: 'Manfaatkan kotoran domba menjadi kompos berkualitas tinggi dengan panduan langkah demi langkah.',
    link: '/edukasi',
  },
]

const stats = [
  { value: '4', suffix: ' Varian', label: 'Ukuran Produk' },
  { value: '100', suffix: '%', label: 'Complete Feed' },
  { value: '0', suffix: ' Limbah', label: 'Bahan Ramah Lingkungan' },
  { value: '1', suffix: 'x', label: 'Paket Siap Pakai' },
]

export default function Home() {
  useScrollReveal()

  // Counter animation
  const countersRef = useRef([])
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target
          const target = parseInt(el.dataset.target, 10)
          let current = 0
          const step = Math.ceil(target / 40)
          const timer = setInterval(() => {
            current = Math.min(current + step, target)
            el.textContent = current
            if (current >= target) clearInterval(timer)
          }, 40)
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.5 })

    countersRef.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="home page-enter">
      {/* ===================== HERO ===================== */}
      <section className="hero">
        <div className="hero-bg-shapes">
          <div className="shape shape-1" />
          <div className="shape shape-2" />
          <div className="shape shape-3" />
        </div>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="badge badge-green hero-badge">🌿 Complete Feed Premium</span>
              <h1 className="hero-title">
                Solusi untuk<br />
                <em>Daging Domba</em><br />
                yang Berkualitas
              </h1>
              <p className="hero-desc">
                BogFeed adalah complete feed berbasis limbah Gedebok pisang yang dirancang praktis, siap pakai, dan kaya nutrisi — memenuhi kebutuhan harian ternak sekaligus mendukung peningkatan kualitas daging domba Anda.
              </p>
              <div className="hero-actions">
                <Link to="/produk" className="btn btn-primary">
                  Lihat Produk
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <Link to="/edukasi" className="btn btn-outline">
                  Pelajari Lebih Lanjut
                </Link>
              </div>
              <div className="hero-trust">
                <div className="trust-item">
                  <span className="trust-icon">✅</span>
                  <span>NIB & HAKI Terdaftar</span>
                </div>
                <div className="trust-item">
                  <span className="trust-icon">🌱</span>
                  <span>Ramah Lingkungan</span>
                </div>
                <div className="trust-item">
                  <span className="trust-icon">📦</span>
                  <span>Siap Kirim</span>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              {/* ================================================================
                  GANTI: Foto produk utama BogFeed (kemasan / suasana peternakan)
                  Ukuran ideal: 600x650 px, format WebP/JPG
                  Contoh: <img src="/images/hero-product.jpg" alt="BogFeed Produk" />
                  ================================================================ */}
              <div className="hero-img-wrapper">
                <ImagePlaceholder
                  width="100%"
                  height="480px"
                  label="Foto Produk / Suasana Peternakan Utama"
                  radius="var(--radius-xl)"
                />
                {/* FLOATING CARD */}
                <div className="float-card float-card-1">
                  <span className="float-icon">🏆</span>
                  <div>
                    <strong>Fattening Formula</strong>
                    <small>Nutrisi Optimal</small>
                  </div>
                </div>
                <div className="float-card float-card-2">
                  <span className="float-icon">🌿</span>
                  <div>
                    <strong>100% Lokal</strong>
                    <small>Gedebok Pisang</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SCROLL INDICATOR */}
        <div className="scroll-indicator">
          <div className="scroll-dot" />
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div className="stat-item reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="stat-value">
                  <span
                    ref={(el) => (countersRef.current[i] = el)}
                    data-target={stat.value}
                  >
                    {stat.value}
                  </span>
                  <span className="stat-suffix">{stat.suffix}</span>
                </div>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FEATURES ===================== */}
      <section className="section features-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="badge badge-green">Keunggulan Kami</span>
            <h2>Mengapa Memilih BogFeed?</h2>
            <div className="divider divider-center" />
            <p>Formulasi ilmiah berbasis bahan baku lokal berkelanjutan untuk hasil ternak yang maksimal</p>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <div
                className={`feature-card reveal delay-${i + 1}`}
                key={i}
              >
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ABOUT PREVIEW ===================== */}
      <section className="section about-preview bg-cream">
        <div className="container">
          <div className="about-preview-grid">
            <div className="reveal-left">
              {/* ================================================================
                  GANTI: Foto tentang produk / proses produksi
                  Ukuran ideal: 560x500 px
                  ================================================================ */}
              <div className="about-imgs">
                <ImagePlaceholder
                  width="100%"
                  height="340px"
                  label="Foto Proses Produksi / Bahan Baku"
                  radius="var(--radius-lg)"
                />
                <div className="about-img-small">
                  <ImagePlaceholder
                    width="160px"
                    height="160px"
                    label="Gedebok Pisang (160×160)"
                    radius="var(--radius-md)"
                  />
                </div>
              </div>
            </div>
            <div className="about-text reveal-right">
              <span className="badge badge-olive">Tentang BogFeed</span>
              <h2>Inovasi Pakan dari Limbah Lokal Bernilai Tinggi</h2>
              <div className="divider" />
              <p>
                BogFeed lahir dari komitmen untuk menghadirkan solusi pakan domba yang efisien, terjangkau, dan berdampak positif bagi lingkungan. Mengolah limbah Gedebok pisang — bahan yang selama ini terbuang — menjadi pakan berkualitas tinggi.
              </p>
              <ul className="check-list">
                <li>
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  Daya simpan panjang & kualitas nutrisi stabil
                </li>
                <li>
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  Menurunkan biaya pakan tanpa mengorbankan kualitas
                </li>
                <li>
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  Mendukung pertumbuhan & kualitas daging domba
                </li>
                <li>
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  Legalitas NIB & HAKI terdaftar resmi
                </li>
              </ul>
              <Link to="/tentang-kami" className="btn btn-primary" style={{ marginTop: 16 }}>
                Selengkapnya
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PRODUCTS PREVIEW ===================== */}
      <section className="section products-preview">
        <div className="container">
          <div className="section-header reveal">
            <span className="badge badge-green">Varian Produk</span>
            <h2>Pilih Ukuran yang Tepat</h2>
            <div className="divider divider-center" />
            <p>Tersedia dalam 4 ukuran kemasan untuk memenuhi kebutuhan berbagai skala peternakan</p>
          </div>
          <div className="products-grid">
            {products.map((p, i) => (
              <div
                className={`product-preview-card reveal delay-${i + 1} ${p.highlight ? 'highlighted' : ''}`}
                key={i}
              >
                {p.highlight && <span className="popular-badge">Terlaris</span>}
                {/* ================================================================
                    GANTI: Foto kemasan produk masing-masing ukuran
                    Ukuran ideal: 280x220 px per produk
                    ================================================================ */}
                <ImagePlaceholder
                  width="100%"
                  height="200px"
                  label={`Foto Kemasan ${p.size}`}
                  radius="var(--radius-md)"
                />
                <div className="product-card-content">
                  <h3>BogFeed <span>{p.size}</span></h3>
                  <p>{p.desc}</p>
                  <Link to="/produk" className={`btn ${p.highlight ? 'btn-primary' : 'btn-outline'}`}>
                    Lihat Detail
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }} className="reveal">
            <Link to="/produk" className="btn btn-outline">
              Lihat Semua Produk
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== EDUKASI PREVIEW ===================== */}
      <section className="section edu-preview bg-cream">
        <div className="container">
          <div className="section-header reveal">
            <span className="badge badge-olive">Pusat Edukasi</span>
            <h2>Tingkatkan Pengetahuan Beternak</h2>
            <div className="divider divider-center" />
            <p>Panduan lengkap untuk peternak domba — dari kandang, perawatan, hingga penanganan penyakit</p>
          </div>
          <div className="edu-grid">
            {eduCards.map((card, i) => (
              <Link
                to={card.link}
                className={`edu-card reveal delay-${i + 1}`}
                key={i}
              >
                <div className="edu-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <span className="edu-cta">
                  Baca selengkapnya
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA BANNER ===================== */}
      <section className="cta-banner">
        <div className="cta-bg-deco">
          <div className="cta-leaf cta-leaf-1" />
          <div className="cta-leaf cta-leaf-2" />
        </div>
        <div className="container">
          <div className="cta-content reveal">
            {/* ================================================================
                GANTI: Logo / ikon untuk banner CTA (opsional)
                ================================================================ */}
            <span className="cta-icon">🌿</span>
            <h2>Siap Meningkatkan Kualitas Ternak Domba Anda?</h2>
            <p>
              Hubungi kami sekarang dan dapatkan konsultasi gratis seputar kebutuhan pakan domba Anda
            </p>
            <div className="cta-buttons">
              <Link to="/produk" className="btn btn-white">
                Pesan Sekarang
              </Link>
              <Link to="/kontak" className="btn btn-outline" style={{ borderColor: 'var(--green-light)', color: 'var(--green-light)' }}>
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}