import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import './FeedCalculator.css'

// Varian produk BogFeed (ukuran dalam kg)
const VARIANTS = [
  { size: 1,  label: '1 kg',  id: 'v1' },
  { size: 5,  label: '5 kg',  id: 'v2' },
  { size: 10, label: '10 kg', id: 'v3' },
  { size: 15, label: '15 kg', id: 'v4' },
]

/**
 * Menghitung kombinasi kemasan paling efisien (greedy dari ukuran terbesar).
 * Contoh: 7.5 kg → [{ size:10, qty:1 }]
 *         32 kg  → [{ size:15, qty:2 }, { size:5, qty:1 }]  (= 30+5=35? no)
 *         Kita pakai ceil ke kemasan yang cukup menutup kebutuhan.
 */
function recommend(totalKg) {
  if (totalKg <= 0) return []

  // Strategi: minimal pemborosan (cari 1 kemasan terkecil yang cukup)
  // Lalu jika > 15, gunakan kombinasi kelipatan 15 + sisa
  const result = []
  let remaining = totalKg

  // Greedy dari terbesar ke terkecil
  const sorted = [...VARIANTS].sort((a, b) => b.size - a.size)
  for (const v of sorted) {
    if (remaining <= 0) break
    const qty = Math.floor(remaining / v.size)
    if (qty > 0) {
      result.push({ ...v, qty })
      remaining -= qty * v.size
    }
  }

  // Sisa tidak nol → ambil kemasan terkecil yang cukup menutup sisa
  if (remaining > 0.001) {
    const cover = sorted.find(v => v.size >= remaining) || sorted[sorted.length - 1]
    // Cek apakah sudah ada di result, jika ya tambah qty-nya
    const existing = result.find(r => r.id === cover.id)
    if (existing) {
      existing.qty += 1
    } else {
      result.push({ ...cover, qty: 1 })
    }
  }

  // Urutkan dari terbesar ke terkecil untuk tampilan
  return result.sort((a, b) => b.size - a.size)
}

/** Format angka: 7.5 → "7,5"  */
function fmt(n) {
  return Number(n.toFixed(2)).toLocaleString('id-ID')
}

export default function FeedCalculator() {
  const navigate = useNavigate()

  // Step 1
  const [bobot, setBobot]   = useState('')
  const [jumlah, setJumlah] = useState('')
  // Step 2
  const [hari, setHari]     = useState('')

  // Derived
  const kebutuhanHarian = useMemo(() => {
    const b = parseFloat(bobot)
    const j = parseFloat(jumlah)
    if (!b || !j || b <= 0 || j <= 0) return null
    return (b * 0.05) * j          // 5% bobot × jumlah ternak
  }, [bobot, jumlah])

  const totalKebutuhan = useMemo(() => {
    const h = parseFloat(hari)
    if (!kebutuhanHarian || !h || h <= 0) return null
    return kebutuhanHarian * h
  }, [kebutuhanHarian, hari])

  const rekomendasi = useMemo(() => {
    if (!totalKebutuhan) return []
    return recommend(totalKebutuhan)
  }, [totalKebutuhan])

  const totalKemasan = useMemo(
    () => rekomendasi.reduce((sum, r) => sum + r.qty * r.size, 0),
    [rekomendasi]
  )

  // Hari label
  const hariNum = parseFloat(hari) || 0

  return (
    <div className="calc-wrapper">
      {/* HEADER */}
      <div className="calc-header">
        {/* <span className="calc-icon"></span> */}
        <img src='./logo.png' width={50}  className='calc-icon'/>
        <div>
          <h3>Kalkulator Kebutuhan Pakan</h3>
          <p>Hitung berapa BogFeed yang Anda butuhkan secara otomatis</p>
        </div>
      </div>

      <div className="calc-body">
        {/* ── STEP 1: INPUT TERNAK ── */}
        <div className="calc-step">
          <div className="step-label">
            <span className="step-num-badge">1</span>
            <span>Data Ternak Anda</span>
          </div>
          <div className="calc-inputs">
            <div className="calc-field">
              <label>Bobot Rata-rata per Domba</label>
              <div className="input-with-unit">
                <input
                  type="number"
                  min="1"
                  max="200"
                  placeholder="Contoh: 30"
                  value={bobot}
                  onChange={e => setBobot(e.target.value)}
                />
                <span className="unit-badge">kg</span>
              </div>
              <small>Berat rata-rata satu ekor domba</small>
            </div>
            <div className="calc-field">
              <label>Jumlah Ternak</label>
              <div className="input-with-unit">
                <input
                  type="number"
                  min="1"
                  max="10000"
                  placeholder="Contoh: 5"
                  value={jumlah}
                  onChange={e => setJumlah(e.target.value)}
                />
                <span className="unit-badge">ekor</span>
              </div>
              <small>Total jumlah domba yang diberi pakan</small>
            </div>
          </div>

          {/* HASIL HARIAN */}
          {kebutuhanHarian !== null && (
            <div className="calc-result-harian">
              <div className="result-harian-inner">
                <div className="result-harian-formula">
                  <span className="formula-chip">{fmt(parseFloat(bobot))} kg</span>
                  <span className="formula-op">×</span>
                  <span className="formula-chip">5%</span>
                  <span className="formula-op">×</span>
                  <span className="formula-chip">{fmt(parseFloat(jumlah))} ekor</span>
                  <span className="formula-op">=</span>
                </div>
                <div className="result-harian-value">
                  <span className="result-big">{fmt(kebutuhanHarian)}</span>
                  <span className="result-unit">kg / hari</span>
                </div>
                <p className="result-harian-narasi">
                  🐑 Kebutuhan harian ternak Anda adalah{' '}
                  <strong>{fmt(kebutuhanHarian)} kg / hari</strong>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* ── STEP 2: HARI BETERNAK ── */}
        {kebutuhanHarian !== null && (
          <div className="calc-step step-2">
            <div className="step-label">
              <span className="step-num-badge">2</span>
              <span>Durasi Kebutuhan Pakan</span>
            </div>
            <div className="calc-inputs single">
              <div className="calc-field">
                <label>Total Hari Beternak</label>
                <div className="input-with-unit">
                  <input
                    type="number"
                    min="1"
                    placeholder="Contoh: 7"
                    value={hari}
                    onChange={e => setHari(e.target.value)}
                  />
                  <span className="unit-badge">hari</span>
                </div>
                <small>Berapa hari Anda ingin menyiapkan pakan sekaligus?</small>
              </div>
              <div className="quick-days">
                <span className="quick-days-label">Pilih cepat:</span>
                {[
                  { label: '1 hari', val: 1 },
                  { label: '1 minggu', val: 7 },
                  { label: '1 bulan', val: 30 },
                ].map(d => (
                  <button
                    key={d.val}
                    className={`quick-day-btn ${hari == d.val ? 'active' : ''}`}
                    onClick={() => setHari(String(d.val))}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── STEP 3: REKOMENDASI ── */}
        {totalKebutuhan !== null && rekomendasi.length > 0 && (
          <div className="calc-step step-3">
            <div className="step-label">
              <span className="step-num-badge">3</span>
              <span>Rekomendasi Pembelian</span>
            </div>

            {/* TOTAL SUMMARY */}
            <div className="total-summary">
              <div className="total-summary-row">
                <div className="total-item">
                  <span className="total-item-label">Kebutuhan Harian</span>
                  <span className="total-item-val">{fmt(kebutuhanHarian)} kg</span>
                </div>
                <div className="total-divider">×</div>
                <div className="total-item">
                  <span className="total-item-label">Durasi</span>
                  <span className="total-item-val">{fmt(hariNum)} hari</span>
                </div>
                <div className="total-divider">=</div>
                <div className="total-item highlight">
                  <span className="total-item-label">Total Kebutuhan</span>
                  <span className="total-item-val">{fmt(totalKebutuhan)} kg</span>
                </div>
              </div>
            </div>

            {/* NARASI */}
            <div className="rekomendasi-narasi">
              <span className="narasi-icon">📦</span>
              <p>
                Anda membutuhkan total{' '}
                <strong>{fmt(totalKebutuhan)} kg</strong> pakan untuk{' '}
                <strong>{fmt(hariNum)} hari</strong>.
                Kami merekomendasikan:
              </p>
            </div>

            {/* KEMASAN */}
            <div className="kemasan-cards">
              {rekomendasi.map((r, i) => (
                <div className="kemasan-card" key={i}>
                  <span className="kemasan-icon">🌿</span>
                  <div className="kemasan-info">
                    <strong>BogFeed {r.label}</strong>
                    <span>{r.qty} kemasan × {r.size} kg</span>
                  </div>
                  <div className="kemasan-qty-badge">{r.qty} pcs</div>
                </div>
              ))}
            </div>

            {/* TOTAL KEMASAN & KETERANGAN */}
            {totalKemasan > totalKebutuhan && (
              <p className="kemasan-note">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
                Total kemasan <strong>{fmt(totalKemasan)} kg</strong> — kelebihan{' '}
                <strong>{fmt(totalKemasan - totalKebutuhan)} kg</strong> dapat disimpan untuk kebutuhan berikutnya.
              </p>
            )}

            {/* CTA BUTTON */}
            <button
              className="btn btn-primary calc-cta-btn"
              onClick={() => navigate('/produk')}
            >
              🛒 Lihat &amp; Pesan Produk Rekomendasi
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        )}

        {/* FORMULA NOTE */}
        <div className="calc-formula-note">
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
          <span>
            Rumus: <em>Kebutuhan Harian = Bobot × 5% × Jumlah Ternak</em>. Angka 5% merupakan standar kebutuhan pakan domba per hari berdasarkan bobot hidup.
          </span>
        </div>
      </div>
    </div>
  )
}