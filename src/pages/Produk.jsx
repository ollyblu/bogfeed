import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import ImagePlaceholder from '../components/ImagePlaceholder'
import './Produk.css'

const products = [
  {
    id: 1,
    size: '1 kg',
    name: 'BogFeed 1 kg',
    tagline: 'Starter Pack untuk Peternak Baru',
    desc: 'Pakan Domba yang diformulasikan untuk pertumbuhan ternak penggemukan (fattening). Ideal untuk uji coba atau peternak dengan satu hingga dua ekor domba.',
    specs: [
      { label: 'Netto', value: '1 kg' },
      { label: 'Jenis', value: 'Complete Feed' },
      { label: 'Fungsi', value: 'Fattening / Penggemukan' },
      { label: 'Bahan Utama', value: 'Gedebok Pisang' },
    ],
    badge: null,
    color: 'var(--green-light)',
  },
  {
    id: 2,
    size: '5 kg',
    name: 'BogFeed 5 kg',
    tagline: 'Pilihan Ekonomis & Praktis',
    desc: 'Pakan Domba yang diformulasikan untuk pertumbuhan ternak penggemukan (fattening). Cocok untuk kebutuhan mingguan dengan beberapa ekor domba.',
    specs: [
      { label: 'Netto', value: '5 kg' },
      { label: 'Jenis', value: 'Complete Feed' },
      { label: 'Fungsi', value: 'Fattening / Penggemukan' },
      { label: 'Bahan Utama', value: 'Gedebok Pisang' },
    ],
    badge: 'Terlaris',
    color: 'var(--green-mid)',
  },
  {
    id: 3,
    size: '10 kg',
    name: 'BogFeed 10 kg',
    tagline: 'Untuk Peternakan Skala Menengah',
    desc: 'Pakan Domba yang diformulasikan untuk pertumbuhan ternak penggemukan (fattening). Efisien untuk peternakan dengan 5–10 ekor domba.',
    specs: [
      { label: 'Netto', value: '10 kg' },
      { label: 'Jenis', value: 'Complete Feed' },
      { label: 'Fungsi', value: 'Fattening / Penggemukan' },
      { label: 'Bahan Utama', value: 'Gedebok Pisang' },
    ],
    badge: null,
    color: 'var(--olive)',
  },
  {
    id: 4,
    size: '15 kg',
    name: 'BogFeed 15 kg',
    tagline: 'Nilai Terbaik untuk Peternak Profesional',
    desc: 'Pakan Domba yang diformulasikan untuk pertumbuhan ternak penggemukan (fattening). Kemasan terbesar dengan nilai paling ekonomis untuk peternakan skala besar.',
    specs: [
      { label: 'Netto', value: '15 kg' },
      { label: 'Jenis', value: 'Complete Feed' },
      { label: 'Fungsi', value: 'Fattening / Penggemukan' },
      { label: 'Bahan Utama', value: 'Gedebok Pisang' },
    ],
    badge: 'Paling Hemat',
    color: 'var(--green-dark)',
  },
]

const benefits = [
  { icon: '🌿', text: 'Berbasis limbah Gedebok pisang lokal' },
  { icon: '⚖️', text: 'Nutrisi lengkap & seimbang' },
  { icon: '📦', text: 'Siap pakai, tanpa olahan tambahan' },
  { icon: '🥩', text: 'Mendukung kualitas daging domba' },
  { icon: '♻️', text: 'Ramah lingkungan & berkelanjutan' },
  { icon: '🔬', text: 'Formula berbasis riset ilmiah' },
]

export default function Produk() {
  useScrollReveal()
  const [activeProduct, setActiveProduct] = useState(null)

  return (
    <div className="produk-page page-enter">
      {/* ===== HERO ===== */}
      <section className="produk-hero">
        <div className="produk-hero-bg">
          <div className="produk-hero-shape" />
        </div>
        <div className="container">
          <div className="produk-hero-content">
            <span className="badge badge-green">Varian Produk</span>
            <h1>
              Pakan Domba<br />
              <em>Berkualitas Tinggi</em>
            </h1>
            <p>
              Dirancang menggunakan bahan baku limbah lokal yang kaya nutrisi untuk menunjang kebutuhan harian domba serta mendukung peningkatan kualitas daging domba
            </p>
          </div>
          {/* ================================================================
              GANTI: Banner / foto semua produk
              Ukuran ideal: 1000x300 px
              ================================================================ */}
          <div className="produk-hero-img reveal">
            <ImagePlaceholder
              width="100%"
              height="260px"
              label="Banner Foto Semua Produk BogFeed (1000×260 px)"
              radius="var(--radius-xl)"
              imgsrc='./produk/waduh.jpg'
            />
          </div>
        </div>
      </section>

      {/* ===== PRODUCT CARDS ===== */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="badge badge-olive">Katalog Produk</span>
            <h2>Pilih Kemasan yang Tepat</h2>
            <div className="divider divider-center" />
            <p>Tersedia 4 varian kemasan untuk memenuhi kebutuhan berbagai skala peternakan domba</p>
          </div>

          <div className="products-list">
            {products.map((product, i) => (
              <div
                className={`product-detail-card reveal delay-${(i % 3) + 1}`}
                key={product.id}
              >
                <div className="product-img-col">
                  {/* ================================================================
                      GANTI: Foto kemasan masing-masing produk
                      Ukuran ideal: 380x380 px per produk
                      Contoh: <img src={`/images/produk-${product.id}.jpg`} alt={product.name} />
                      ================================================================ */}
                  <ImagePlaceholder
                    width="100%"
                    height="340px"
                    label={`Foto Kemasan ${product.size} (380×380 px)`}
                    radius="var(--radius-lg)"
                    imgsrc='./produk/produk5kg.jpg'
                  />
                  {product.badge && (
                    <span className="product-badge">{product.badge}</span>
                  )}
                </div>

                <div className="product-info-col">
                  <span className="product-size-chip">{product.size}</span>
                  <h2 className="product-name">{product.name}</h2>
                  <p className="product-tagline">{product.tagline}</p>
                  <div className="divider" />
                  <p className="product-desc">{product.desc}</p>

                  {/* SPECS TABLE */}
                  <div className="specs-table">
                    {product.specs.map((spec, j) => (
                      <div className="spec-row" key={j}>
                        <span className="spec-label">{spec.label}</span>
                        <span className="spec-value">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* ACTIONS */}
                  <div className="product-actions">
                    <Link to="/kontak" className="btn btn-primary">
                      Pesan Sekarang
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                    <a
                      href="https://wa.me/6285865102452"
                      className="btn btn-outline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* GANTI href dengan nomor WhatsApp Anda */}
                      WhatsApp
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCT BENEFITS ===== */}
      <section className="section bg-cream">
        <div className="container">
          <div className="section-header reveal">
            <span className="badge badge-green">Keunggulan Produk</span>
            <h2>Mengapa BogFeed Berbeda?</h2>
            <div className="divider divider-center" />
          </div>
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <div className={`benefit-item reveal delay-${(i % 4) + 1}`} key={i}>
                <span className="benefit-icon">{b.icon}</span>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section">
        <div className="container">
          <div className="produk-cta reveal">
            <div className="produk-cta-inner">
              <h2>Butuh Bantuan Memilih Produk?</h2>
              <p>Tim kami siap membantu Anda menentukan produk yang tepat sesuai kebutuhan peternakan Anda</p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/kontak" className="btn btn-white">Hubungi Kami</Link>
                <Link to="/edukasi" className="btn btn-outline" style={{ borderColor: 'var(--green-light)', color: 'var(--green-light)' }}>
                  Baca Panduan Ternak
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}