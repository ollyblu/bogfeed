import React from 'react'

/**
 * ImagePlaceholder — Tandai area gambar dengan ukuran dan label.
 * Ganti komponen ini dengan <img src="..." alt="..." /> ketika gambar sudah siap.
 *
 * Props:
 *   width    — CSS width  (default: '100%')
 *   height   — CSS height (default: '300px')
 *   label    — Deskripsi gambar (default: 'Tambahkan Gambar')
 *   radius   — Border radius (default: 'var(--radius-md)')
 *   style    — Inline style tambahan
 */
export default function ImagePlaceholder({
  width = '100%',
  height = '300px',
  label = 'Tambahkan Gambar',
  radius = 'var(--radius-md)',
  imgsrc = './logo.png',
  style = {},
}) {
  return (
    <div
      className="img-placeholder"
      style={{
        width,
        height,
        borderRadius: radius,
        minHeight: height,
        ...style,
      }}
    >
      <span className="img-icon">🌿</span> 
      {imgsrc != './logo.png' ? <img src = {imgsrc} ksd={imgsrc} alt={label}/>:''}
      <span className="img-label">
        {label} {imgsrc}
        <br />
        <span style={{ opacity: 0.7, fontSize: '0.7rem' }}>
          {width} × {height}
        </span>
      </span>
    </div>
  )
}