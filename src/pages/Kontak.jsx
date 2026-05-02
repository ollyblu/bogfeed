import React, { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Kontak.css'

const contactInfo = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.44 2.18 2 2 0 012.43 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-.87a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    label: 'WhatsApp',
    value: '+62 858-6510-2452', // GANTI dengan nomor WA
    link: 'https://wa.me/6285865102452', // GANTI dengan nomor WA
    linkLabel: 'Chat via WhatsApp',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'bogfeed.id@gmail.com', // GANTI dengan email Anda
    link: 'mailto:bogfeed.id@gmail.com',
    linkLabel: 'Kirim Email',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Lokasi',
    value: 'Bantul, Yogyakarta, Indonesia', // GANTI dengan alamat lengkap
    link: 'https://maps.google.com/?q=Bantul',
    linkLabel: 'Lihat di Maps',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: 'Jam Operasional',
    value: 'Senin – Sabtu: 08.00 – 17.00 WIB',
    link: null,
    linkLabel: null,
  },
]

const faqs = [
  {
    q: 'Apakah BogFeed bisa dikirim ke luar Jawa?',
    a: 'Ya, kami melayani pengiriman ke seluruh Indonesia. Biaya ongkos kirim disesuaikan dengan lokasi tujuan. Hubungi kami untuk informasi lebih lanjut.',
  },
  {
    q: 'Berapa lama daya simpan BogFeed?',
    a: 'BogFeed dirancang dengan daya simpan yang panjang. Simpan di tempat yang kering, sejuk, dan terhindar dari sinar matahari langsung untuk hasil terbaik.',
  },
  {
    q: 'Apakah BogFeed cocok untuk semua ras domba?',
    a: 'BogFeed diformulasikan sebagai complete feed umum untuk domba penggemukan (fattening), cocok untuk berbagai ras domba lokal Indonesia.',
  },
  {
    q: 'Bagaimana cara pemesanan dalam jumlah besar (grosir)?',
    a: 'Kami menyediakan harga khusus untuk pembelian grosir. Silakan hubungi kami langsung via WhatsApp atau email untuk negosiasi harga dan ketentuan lebih lanjut.',
  },
  {
    q: 'Apakah ada panduan cara pemberian pakan BogFeed?',
    a: 'Ya! Setiap kemasan dilengkapi dengan panduan pemberian. Anda juga bisa membaca artikel edukasi lengkap di halaman Edukasi website ini.',
  },
]

export default function Kontak() {
  useScrollReveal()

  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    subjek: '',
    pesan: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // ================================================================
    // GANTI: Integrasikan dengan backend / form service (EmailJS, Formspree, dll.)
    // Contoh Formspree: action="https://formspree.io/f/YOUR_ID"
    // ================================================================
    setSubmitted(true)
  }

  const handleReset = () => {
    setFormData({ nama: '', email: '', telepon: '', subjek: '', pesan: '' })
    setSubmitted(false)
  }

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i)

  // WhatsApp message builder
  const waMessage = encodeURIComponent(
    `Halo BogFeed! Saya ingin bertanya tentang produk Anda.\n\nNama: ${formData.nama || '...'}\nEmail: ${formData.email || '...'}\nPesan: ${formData.pesan || '...'}`
  )

  return (
    <div className="kontak-page page-enter">
      {/* ===== HERO ===== */}
      <section className="kontak-hero">
        <div className="kontak-hero-deco" />
        <div className="container">
          <div className="kontak-hero-content">
            <span className="badge badge-green">Hubungi Kami</span>
            <h1>
              Ada Pertanyaan?<br />
              <em>Kami Siap Membantu</em>
            </h1>
            <p>
              Tim BogFeed siap menjawab pertanyaan Anda seputar produk, pemesanan, maupun konsultasi kebutuhan pakan domba
            </p>
          </div>
        </div>
      </section>

      {/* ===== CONTACT INFO CARDS ===== */}
      <section className="section-sm">
        <div className="container">
          <div className="contact-cards">
            {contactInfo.map((info, i) => (
              <div className={`contact-card reveal delay-${i + 1}`} key={i}>
                <div className="contact-card-icon">{info.icon}</div>
                <div className="contact-card-text">
                  <span className="contact-label">{info.label}</span>
                  <strong>{info.value}</strong>
                  {info.link && (
                    <a href={info.link} target="_blank" rel="noopener noreferrer" className="contact-link">
                      {info.linkLabel}
                      <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FORM + SIDE ===== */}
      <section className="section">
        <div className="container">
          <div className="kontak-grid">
            {/* FORM */}
            <div className="form-wrapper reveal-left">
              <div className="form-header">
                <h2>Kirim Pesan</h2>
                <p>Isi formulir di bawah ini dan kami akan membalas dalam 1×24 jam</p>
              </div>

              {!submitted ? (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="nama">Nama Lengkap <span className="required">*</span></label>
                      <input
                        type="text"
                        id="nama"
                        name="nama"
                        placeholder="Contoh: Budi Santoso"
                        value={formData.nama}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="telepon">Nomor Telepon</label>
                      <input
                        type="tel"
                        id="telepon"
                        name="telepon"
                        placeholder="+62 8XX-XXXX-XXXX"
                        value={formData.telepon}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email <span className="required">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="nama@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subjek">Subjek <span className="required">*</span></label>
                    <select
                      id="subjek"
                      name="subjek"
                      value={formData.subjek}
                      onChange={handleChange}
                      required
                    >
                      <option value="">— Pilih subjek pesan —</option>
                      <option value="pemesanan">Pemesanan Produk</option>
                      <option value="konsultasi">Konsultasi Pakan Ternak</option>
                      <option value="harga">Informasi Harga</option>
                      <option value="kerjasama">Kemitraan / Kerjasama</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="pesan">Pesan <span className="required">*</span></label>
                    <textarea
                      id="pesan"
                      name="pesan"
                      rows={6}
                      placeholder="Tuliskan pertanyaan atau pesan Anda di sini..."
                      value={formData.pesan}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="btn btn-primary form-submit">
                      Kirim Pesan
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    </button>
                    <a
                      href={`https://wa.me/6285865102452?text=${waMessage}`}
                      className="btn btn-outline wa-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* GANTI: Ganti 628XXXXXXXXXX dengan nomor WA Anda */}
                      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                      Via WhatsApp
                    </a>
                  </div>
                </form>
              ) : (
                <div className="form-success">
                  <div className="success-icon">✅</div>
                  <h3>Pesan Terkirim!</h3>
                  <p>
                    Terima kasih, <strong>{formData.nama}</strong>! Pesan Anda telah kami terima.
                    Kami akan segera menghubungi Anda melalui email atau WhatsApp dalam 1×24 jam.
                  </p>
                  <button className="btn btn-primary" onClick={handleReset}>
                    Kirim Pesan Lain
                  </button>
                </div>
              )}
            </div>

            {/* SIDE PANEL */}
            <div className="kontak-side reveal-right">
              {/* MAPS PLACEHOLDER */}
              <div className="map-placeholder">
                {/* ================================================================
                    GANTI: Embed Google Maps
                    Contoh: <iframe src="https://www.google.com/maps/embed?..." .../>
                    Ukuran ideal: 100% × 280px
                    ================================================================ */}
                <div className="map-embed-placeholder">
                  <span className="map-icon">📍</span>
                  <p>Lokasi BogFeed</p>
                  <small>
                    Ganti bagian ini dengan embed Google Maps<br/>
                    (Bantul, Yogyakarta, Indonesia)
                  </small>
                  <a
                    href="https://maps.google.com/?q=Ponorogo+Jawa+Timur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ marginTop: 16, fontSize: '0.82rem', padding: '8px 20px' }}
                  >
                    Buka di Google Maps
                  </a>
                </div>
              </div>

              {/* QUICK WA */}
              <div className="wa-quick">
                <div className="wa-quick-icon">
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </div>
                <div>
                  <strong>Chat WhatsApp Langsung</strong>
                  <p>Respons lebih cepat via WhatsApp</p>
                </div>
                <a
                  href="https://wa.me/6285865102452"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ fontSize: '0.85rem', padding: '10px 20px', marginLeft: 'auto' }}
                >
                  Chat
                </a>
              </div>

              {/* SOCIAL MEDIA */}
              <div className="social-panel">
                <h4>Ikuti Kami</h4>
                <div className="social-grid">
                  <a href="https://www.instagram.com/bogfeed.id" target='_blank' className="social-card" target="_blank" rel="noopener noreferrer">
                    {/* GANTI: href dengan link Instagram */}
                    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
                    <span>Instagram</span>
                  </a>
                  <a href="https://www.facebook.com/bogfeed.id" target='_blank' className="social-card" target="_blank" rel="noopener noreferrer">
                    {/* GANTI: href dengan link Facebook */}
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    <span>Facebook</span>
                  </a>
                  <a href="https://www.tiktok.com/@bog.feed..id" target='_blank' className="social-card" target="_blank" rel="noopener noreferrer">
                    {/* GANTI: href dengan link TikTok */}
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.63a8.16 8.16 0 004.77 1.52V7.7a4.85 4.85 0 01-1-.01z"/></svg>
                    <span>TikTok</span>
                  </a>
                  {/* <a href="#" className="social-card" target="_blank" rel="noopener noreferrer">
                    
                    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
                    <span>Marketplace</span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section bg-cream">
        <div className="container">
          <div className="section-header reveal">
            <span className="badge badge-olive">FAQ</span>
            <h2>Pertanyaan yang Sering Ditanyakan</h2>
            <div className="divider divider-center" />
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div
                className={`faq-item ${openFaq === i ? 'open' : ''}`}
                key={i}
              >
                <button className="faq-question" onClick={() => toggleFaq(i)}>
                  <span>{faq.q}</span>
                  <svg
                    className="faq-arrow"
                    width="20" height="20"
                    fill="none" stroke="currentColor" strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}