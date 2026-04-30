import React from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import ImagePlaceholder from '../components/ImagePlaceholder'
import './TentangKami.css'

const missions = [
  {
    icon: '🧪',
    text: 'Mengembangkan complete feed domba dengan daya simpan panjang dan kualitas nutrisi yang stabil.',
  },
  {
    icon: '♻️',
    text: 'Mengolah limbah lokal menjadi bahan baku pakan bernilai guna dan ramah lingkungan.',
  },
  {
    icon: '📈',
    text: 'Meningkatkan efisiensi pakan dengan menurunkan persentase pemberian serta mengoptimalkan kandungan nutrisi untuk mendukung pertumbuhan domba.',
  },
]

const legalities = [
  {
    icon: '📋',
    title: 'NIB (Nomor Induk Berusaha)',
    desc: 'BogFeed terdaftar secara resmi dengan Nomor Induk Berusaha, menjamin legalitas usaha dan operasional.',
    badge: 'Terdaftar Resmi',
    imgLabel: 'Scan / Foto Dokumen NIB (400×280 px)',
    src: './nib.jpg'
  },
  {
    icon: '🛡️',
    title: 'HAKI (Hak Kekayaan Intelektual)',
    desc: 'Merek dan formula BogFeed dilindungi oleh Hak Kekayaan Intelektual, menjamin keaslian dan inovasi produk.',
    badge: 'Terlindungi',
    imgLabel: 'Scan / Foto Sertifikat HAKI (400×280 px)',
    src: './haki.jpg'
  },
]

const values = [
  { icon: '🌿', title: 'Berkelanjutan', desc: 'Memanfaatkan limbah lokal untuk masa depan yang lebih baik' },
  { icon: '🔬', title: 'Berbasis Ilmu', desc: 'Formulasi berdasarkan riset nutrisi ternak yang mendalam' },
  { icon: '🤝', title: 'Berdampak', desc: 'Mendukung kesejahteraan peternak lokal Indonesia' },
  { icon: '💎', title: 'Berkualitas', desc: 'Standar nutrisi tinggi untuk hasil ternak terbaik' },
]

const timeline = [
  { year: '2023', title: 'Riset & Pengembangan', desc: 'Memulai penelitian formulasi pakan berbasis Gedebok pisang sebagai alternatif pakan domba.' },
  { year: '2024', title: 'Uji Coba Produk', desc: 'Uji coba formula di peternakan mitra, validasi nutrisi dan efek pada kualitas daging domba.' },
  { year: '2025', title: 'Legalitas & Produksi', desc: 'Pendaftaran NIB & HAKI, memulai produksi skala komersial dengan standar kualitas ketat.' },
  { year: '2026', title: 'Ekspansi Pasar', desc: 'Memperluas jangkauan ke peternak domba di seluruh Jawa Timur dan Indonesia.' },
]

export default function TentangKami() {
  useScrollReveal()

  return (
    <div className="tentang-page page-enter">
      {/* ===== HERO ===== */}
      <section className="tentang-hero">
        <div className="tentang-hero-deco" />
        <div className="container">
          <div className="tentang-hero-content">
            <span className="badge badge-green">Tentang BogFeed</span>
            <h1>
              Inovasi Pakan Lokal<br />
              untuk <em>Peternak Indonesia</em>
            </h1>
            <p>
              BogFeed hadir dengan misi sederhana: menghadirkan pakan domba berkualitas tinggi dari bahan lokal yang terjangkau, berkelanjutan, dan berdampak nyata bagi peternak Indonesia.
            </p>
          </div>
        </div>

        {/* HERO VISUAL */}
        <div className="tentang-hero-visual">
          <div className="container">
            <div className="tentang-hero-imgs reveal">
              {/* ================================================================
                  GANTI: Foto tim / suasana produksi BogFeed
                  Ukuran ideal utama: 800×400 px
                  ================================================================ */}
              <div className="hero-img-main">
                <ImagePlaceholder
                  width="100%"
                  height="380px"
                  label="Foto Tim / Suasana Produksi BogFeed (800×380 px)"
                  radius="var(--radius-xl)"
                />
              </div>
              <div className="hero-img-side">
                <ImagePlaceholder
                  width="100%"
                  height="180px"
                  label="Foto Produk (400×180 px)"
                  radius="var(--radius-lg)"
                />
                <ImagePlaceholder
                  width="100%"
                  height="180px"
                  label="Foto Bahan Baku (400×180 px)"
                  radius="var(--radius-lg)"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LATAR BELAKANG ===== */}
      <section className="section">
        <div className="container">
          <div className="latar-grid">
            <div className="reveal-left">
              {/* ================================================================
                  GANTI: Foto terkait latar belakang masalah / limbah Gedebok pisang
                  Ukuran ideal: 520×440 px
                  ================================================================ */}
              <ImagePlaceholder
                width="100%"
                height="400px"
                label="Foto Gedebok Pisang / Bahan Baku Lokal (520×440 px)"
                radius="var(--radius-xl)"
              />
            </div>
            <div className="latar-content reveal-right">
              <span className="badge badge-olive">Latar Belakang</span>
              <h2>Dari Limbah Menjadi Nutrisi Berharga</h2>
              <div className="divider" />
              <p>
                Indonesia memiliki potensi besar dalam industri peternakan domba, namun tantangan utama yang dihadapi peternak adalah ketersediaan pakan berkualitas dengan harga terjangkau.
              </p>
              <p style={{ marginTop: 16 }}>
                Di sisi lain, limbah Gedebok pisang — batang pohon pisang yang kaya serat dan nutrisi — selama ini terbuang begitu saja tanpa dimanfaatkan secara optimal. BogFeed lahir untuk menjembatani dua masalah sekaligus: mengurangi limbah organik dan menghadirkan solusi pakan ternak yang efisien.
              </p>
              <div className="latar-highlights">
                <div className="highlight-item">
                  <span className="highlight-num">🌿</span>
                  <div>
                    <strong>Gedebok Pisang</strong>
                    <small>Bahan baku kaya serat & nutrisi</small>
                  </div>
                </div>
                <div className="highlight-item">
                  <span className="highlight-num">🏆</span>
                  <div>
                    <strong>Complete Feed</strong>
                    <small>Nutrisi lengkap dalam satu kemasan</small>
                  </div>
                </div>
                <div className="highlight-item">
                  <span className="highlight-num">💚</span>
                  <div>
                    <strong>Ramah Lingkungan</strong>
                    <small>Kurangi limbah organik lokal</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VISI ===== */}
      <section className="section visi-section">
        <div className="visi-bg" />
        <div className="container">
          <div className="visi-inner reveal">
            <span className="badge badge-green" style={{ marginBottom: 16 }}>Visi Kami</span>
            <blockquote className="visi-quote">
              "Menciptakan pakan Domba berbasis limbah lokal yang efisien dengan mengoptimalkan persentase kebutuhan harian untuk mendukung kualitas daging Domba"
            </blockquote>
          </div>
        </div>
      </section>

      {/* ===== MISI ===== */}
      <section className="section bg-cream">
        <div className="container">
          <div className="section-header reveal">
            <span className="badge badge-olive">Misi Kami</span>
            <h2>Apa yang Kami Perjuangkan</h2>
            <div className="divider divider-center" />
          </div>
          <div className="misi-grid">
            {missions.map((m, i) => (
              <div className={`misi-card reveal delay-${i + 1}`} key={i}>
                <div className="misi-num">0{i + 1}</div>
                <span className="misi-icon">{m.icon}</span>
                <p>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="badge badge-green">Nilai Kami</span>
            <h2>Prinsip yang Mendasari BogFeed</h2>
            <div className="divider divider-center" />
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className={`value-card reveal delay-${i + 1}`} key={i}>
                <span className="value-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="section bg-cream">
        <div className="container">
          <div className="section-header reveal">
            <span className="badge badge-olive">Perjalanan Kami</span>
            <h2>Timeline BogFeed</h2>
            <div className="divider divider-center" />
          </div>
          <div className="timeline">
            {timeline.map((item, i) => (
              <div className={`timeline-item reveal delay-${(i % 3) + 1}`} key={i}>
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LEGALITAS ===== */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="badge badge-green">Legalitas</span>
            <h2>Terpercaya & Resmi Terdaftar</h2>
            <div className="divider divider-center" />
            <p>BogFeed beroperasi dengan legalitas penuh sesuai peraturan yang berlaku di Indonesia</p>
          </div>
          <div className="legality-grid">
            {legalities.map((item, i) => (
              <div className={`legality-card reveal delay-${i + 1}`} key={i}>
                <div className="legality-header">
                  <span className="legality-icon">{item.icon}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <span className="badge badge-green" style={{ fontSize: '0.7rem' }}>{item.badge}</span>
                  </div>
                </div>
                <p>{item.desc}</p>
                {/* ================================================================
                    GANTI: Scan / foto dokumen legalitas
                    Ukuran ideal: 400×280 px
                    ================================================================ */}
                <div className="legality-doc">
                  <ImagePlaceholder
                    width="100%"
                    height="480px"
                    label={item.imgLabel}
                    radius="var(--radius-md)"
                    imgsrc={item.src}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-sm">
        <div className="container">
          <div className="tentang-cta reveal">
            <h2>Mari Bergabung Bersama BogFeed</h2>
            <p>Jadilah bagian dari gerakan peternakan domba berkelanjutan di Indonesia</p>
            <div className="cta-buttons">
              <Link to="/produk" className="btn btn-white">Lihat Produk</Link>
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