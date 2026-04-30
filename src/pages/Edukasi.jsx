import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import ImagePlaceholder from '../components/ImagePlaceholder'
import './Edukasi.css'

const topics = [
  {
    id: 'kandang',
    icon: '🏡',
    title: 'Syarat Kandang yang Baik',
    short: 'Ketahui spesifikasi kandang ideal untuk hasil ternak optimal',
    content: [
      {
        type: 'text',
        data: 'Lokasi untuk peternakan domba sebaiknya berada di area yang cukup luas, udaranya segar dan keadaan sekelilingnya tenang, dekat dengan sumber pakan ternak dan sumber air, jauh dari daerah pemukiman dan sumber air penduduk (minimal 10 meter) serta relatif dekat dari pusat pemasaran ternak.',
      },
      {
        type: 'list',
        title: 'Persyaratan Kandang:',
        items: [
          'Kandang harus dibuat kuat sehingga dapat dipakai dalam waktu yang lama.',
          'Ukuran disesuaikan dengan jumlah ternak.',
          'Kandang harus mudah dibersihkan, memperoleh sinar matahari pagi, memiliki ventilasi yang cukup dan terletak lebih tinggi dari lingkungan sekitarnya untuk menghindari risiko banjir.',
          'Atap kandang diusahakan dari bahan ringan dan memiliki daya serap panas yang relatif kecil, misalnya dari atap rumbia atau genting tanah.',
          'Buat lubang penampungan kotoran di bagian bawah kandang sedalam 40 cm.',
          'Buat saluran pembuangan air di sekitar kandang agar tidak becek.',
          'Di dalam kandang domba sebaiknya terdapat tempat pakan, tempat minum, gudang pakan, dan tempat kotoran/kompos.',
        ],
      },
      {
        type: 'list',
        title: 'Bagian-bagian Kandang:',
        items: [
          'Kandang Induk/Utama — tempat domba digemukkan. Satu ekor domba membutuhkan luas kandang 1 × 1 m.',
          'Kandang Induk dan Anaknya — tempat induk yang sedang menyusui anaknya selama 3 bulan. Seekor induk domba memerlukan luas 1,5 × 1 m dan anak domba memerlukan luas 0,75 × 1 m.',
          'Kandang Pejantan — tempat domba jantan yang akan digunakan sebagai pemacak seluas 2 × 1,5 m/pemancak.',
        ],
      },
    ],
    imgLabel: 'Foto Contoh Kandang Domba yang Baik (600×360 px)',
  },
  {
    id: 'perawatan',
    icon: '🧴',
    title: 'Perawatan Rutin Domba',
    short: 'Panduan perawatan harian untuk menjaga kesehatan ternak',
    content: [
      {
        type: 'list',
        title: 'Rutinitas Perawatan Harian:',
        items: [
          'Kandang dibersihkan bila terlihat kotor.',
          'Domba dimandikan minimal seminggu sekali, memakai sabun, badannya digosok dengan serai wangi atau sikat. Setelah dimandikan domba dijemur sampai bulunya kering.',
          'Cukur bulunya bila sudah kelihatan panjang.',
          'Periksa kukunya, bersihkan bila kotor, dan potong kukunya bila sudah terlalu panjang.',
        ],
      },
    ],
    imgLabel: 'Foto Perawatan Domba (600×360 px)',
  },
  {
    id: 'sehat',
    icon: '✅',
    title: 'Ciri Domba Sehat',
    short: 'Kenali tanda-tanda ternak domba yang sehat',
    content: [
      {
        type: 'list',
        title: 'Ciri-ciri Fisik Domba Sehat:',
        items: [
          'Makan atau mengunyah rumput, berdiri atau berbaring dengan kelompoknya, ketika dihampiri hewan memandang dengan tajam.',
          'Berjalan teratur di atas keempat kakinya dan melihat ke arah mana dia pergi.',
          'Pernapasan tenang dan teratur, tidak batuk.',
          'Tidak kurus, tidak terlihat penonjolan tulang rusuk, tulang punggung, atau tulang pinggul.',
          'Kulit mulus dan tidak ada luka.',
          'Mata jernih dan terang, selaput lendir mata basah dan berwarna merah muda.',
          'Tidak ada kotoran atau eksudat dari mata, hidung, atau mulut.',
          'Tidak ada luka atau borok di mulut.',
          'Tidak ada tanda-tanda diare: anus bersih, kering, dan tertutup, feses normal.',
        ],
      },
    ],
    imgLabel: 'Foto Domba Sehat (600×360 px)',
  },
  {
    id: 'sakit',
    icon: '⚠️',
    title: 'Ciri Domba Sakit',
    short: 'Identifikasi tanda-tanda domba yang perlu segera ditangani',
    content: [
      {
        type: 'list',
        title: 'Tanda-tanda Domba Sakit:',
        items: [
          'Tidak makan, lesu, terbaring atau berdiri terpisah dari kelompoknya.',
          'Tidak memandang, resah atau gemetar, bereaksi dengan hebat dan bersuara.',
          'Pernapasan terburu-buru, cepat, atau tidak teratur.',
          'Tidak berjalan atau pincang.',
          'Menggerakkan kepala secara tidak normal, ke satu sisi atau ke atas.',
          'Hewan kurus, terlihat penonjolan tulang rusuk, tulang punggung, tulang pinggul, atau tulang lainnya.',
          'Ada kotoran atau eksudat berair, bernanah, atau berdarah dari mata, hidung, atau mulut.',
          'Mata buram, mata merah, atau mata biru.',
          'Tanda-tanda diare: anus kotor, basah atau terbuka, feses keras, berlendir, cair, ada darah atau cacing.',
          'Tanda lainnya: perut kembung (timpani), hernia, ada rasa nyeri, bengkak, panas.',
        ],
      },
    ],
    imgLabel: 'Ilustrasi Tanda Domba Sakit (600×360 px)',
  },
  {
    id: 'pencegahan',
    icon: '💉',
    title: 'Pencegahan & Pengobatan Penyakit',
    short: 'Langkah preventif dan penanganan penyakit pada domba',
    content: [
      {
        type: 'list',
        title: 'Langkah Pencegahan:',
        items: [
          'Pakan tersedia dalam jumlah dan kualitas yang cukup.',
          'Air minum yang bersih harus selalu tersedia setiap saat.',
          'Tempat pakan selalu dibersihkan minimal 2 kali sehari (pagi dan sore). Tidak boleh ada pakan sisa hari kemarin.',
          'Perhatikan siklus hidup cacing parasit. Disarankan menyabit rumput pada pagi hari setelah embun menghilang.',
          'Air minum harus berasal dari sumber air yang bersih (sumur), bukan dari sungai atau sawah.',
          'Domba yang terserang penyakit segera diobati dan dipisahkan dari ternak yang sehat.',
        ],
      },
      {
        type: 'list',
        title: 'Panduan Vaksinasi:',
        items: [
          'Vaksinasi mulai dilakukan pada anak domba (cempe) bila telah berusia 1 bulan.',
          'Diulangi pada usia 2–3 bulan.',
          'Lakukan vaksinasi setiap enam bulan sekali.',
          'Vaksin yang biasa diberikan: Vaksin Spora (Max Sterne), Serum anti anthrax, Vaksin AE, dan Vaksin SE (Septichaemia Epizootica).',
        ],
      },
    ],
    imgLabel: 'Foto Vaksinasi / Pengobatan Domba (600×360 px)',
  },
  {
    id: 'kompos',
    icon: '♻️',
    title: 'Cara Membuat Kompos',
    short: 'Manfaatkan kotoran domba menjadi pupuk berkualitas',
    content: [
      {
        type: 'list',
        title: 'Bahan yang Dibutuhkan:',
        items: [
          'Kotoran domba + limbah pakan: 1.000 kg',
          'Dekomposer (Orgadek): 5 kg',
          'Bahan tambahan opsional: arang sekam atau bahan organik lainnya.',
        ],
      },
      {
        type: 'steps',
        title: 'Langkah Pembuatan Kompos:',
        items: [
          'Siapkan tempat pembuatan kompos yang terlindungi dari sinar matahari langsung dan air hujan untuk kondisi optimum.',
          'Siapkan kotoran domba dan sisa pakan. Bersihkan dari sampah plastik, ranting pohon, atau sampah anorganik lainnya. Kotoran yang digunakan tidak terlalu kering (kadar air ±40%).',
          'Tumpuk bahan kompos dengan ketinggian ±30 cm, kemudian taburkan dekomposer (Orgadek) secara merata. Dosis: 5 kg/ton bahan.',
          'Tumpuk kembali bahan kompos di atas lapisan pertama dengan tinggi yang sama (±30 cm), kemudian taburkan lagi dekomposer.',
          'Lanjutkan penumpukan sampai bahan habis. Tinggi penumpukan minimal 1 meter.',
          'Tutup dengan plastik dan biarkan selama 14–21 hari hingga kompos matang.',
        ],
      },
    ],
    imgLabel: 'Foto Proses Pembuatan Kompos (600×360 px)',
  },
]

export default function Edukasi() {
  useScrollReveal()
  const [activeId, setActiveId] = useState('kandang')

  const activeTopic = topics.find((t) => t.id === activeId)

  return (
    <div className="edukasi-page page-enter">
      {/* ===== HERO ===== */}
      <section className="edukasi-hero">
        <div className="edukasi-hero-deco" />
        <div className="container">
          <div className="edukasi-hero-content">
            <span className="badge badge-green">Pusat Edukasi</span>
            <h1>
              Panduan Lengkap<br />
              <em>Beternak Domba</em>
            </h1>
            <p>
              Kumpulan informasi terpercaya seputar kandang, perawatan, kesehatan, dan pengelolaan limbah domba — untuk peternak yang ingin terus berkembang
            </p>
          </div>
        </div>
      </section>

      {/* ===== TOPICS GRID (mobile quick-nav) ===== */}
      <section className="topics-nav">
        <div className="container">
          <div className="topics-chips">
            {topics.map((t) => (
              <button
                key={t.id}
                className={`topic-chip ${activeId === t.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveId(t.id)
                  document.getElementById('edu-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                <span>{t.icon}</span> {t.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="section" id="edu-content">
        <div className="container">
          <div className="edu-layout">
            {/* SIDEBAR */}
            <aside className="edu-sidebar">
              {topics.map((t, i) => (
                <button
                  key={t.id}
                  className={`sidebar-item reveal delay-${(i % 4) + 1} ${activeId === t.id ? '' : ''}`}
                  onClick={() => setActiveId(t.id)}
                >
                  <span className="sidebar-icon">{t.icon}</span>
                  <div className="sidebar-text">
                    <strong>{t.title}</strong>
                    <small>{t.short}</small>
                  </div>
                  <svg className="sidebar-arrow" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
                </button>
              ))}
            </aside>

            {/* CONTENT AREA */}
            <main className="edu-main" key={activeId}>
              <div className="edu-content-header">
                <span className="edu-content-icon">{activeTopic.icon}</span>
                <div>
                  <h2>{activeTopic.title}</h2>
                  <p>{activeTopic.short}</p>
                </div>
              </div>

              {/* IMAGE PLACEHOLDER */}
              <div style={{ marginBottom: 36 }}>
                {/* ================================================================
                    GANTI: Foto ilustrasi untuk setiap topik edukasi
                    Ukuran ideal: 800×360 px
                    ================================================================ */}
                <ImagePlaceholder
                  width="100%"
                  height="280px"
                  label={activeTopic.imgLabel}
                  radius="var(--radius-lg)"
                />
              </div>

              {/* CONTENT SECTIONS */}
              {activeTopic.content.map((section, i) => (
                <div className="content-section" key={i}>
                  {section.title && <h3>{section.title}</h3>}

                  {section.type === 'text' && (
                    <p className="content-text">{section.data}</p>
                  )}

                  {section.type === 'list' && (
                    <ul className="content-list">
                      {section.items.map((item, j) => (
                        <li key={j}>
                          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.type === 'steps' && (
                    <ol className="content-steps">
                      {section.items.map((item, j) => (
                        <li key={j}>
                          <span className="step-num">{j + 1}</span>
                          <p>{item}</p>
                        </li>
                      ))}
                    </ol>
                  )}
                </div>
              ))}

              {/* SOURCE NOTE */}
              <div className="source-note">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                <span>Sumber: Kementerian Pertanian Republik Indonesia & praktik peternakan terbaik</span>
              </div>

              {/* NAVIGATION */}
              <div className="edu-nav-buttons">
                {topics.findIndex(t => t.id === activeId) > 0 && (
                  <button
                    className="btn btn-outline"
                    onClick={() => {
                      const idx = topics.findIndex(t => t.id === activeId)
                      setActiveId(topics[idx - 1].id)
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                    Topik Sebelumnya
                  </button>
                )}
                {topics.findIndex(t => t.id === activeId) < topics.length - 1 && (
                  <button
                    className="btn btn-primary"
                    style={{ marginLeft: 'auto' }}
                    onClick={() => {
                      const idx = topics.findIndex(t => t.id === activeId)
                      setActiveId(topics[idx + 1].id)
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    Topik Berikutnya
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                )}
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-sm bg-cream">
        <div className="container">
          <div className="edu-cta reveal">
            <div>
              <h3>Siap Memulai dengan Pakan Berkualitas?</h3>
              <p>Terapkan ilmu yang Anda pelajari dengan BogFeed — complete feed terbaik untuk domba Anda</p>
            </div>
            <Link to="/produk" className="btn btn-primary">
              Lihat Produk
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}