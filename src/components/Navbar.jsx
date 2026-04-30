import React, { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { to: '/', label: 'Beranda' },
  { to: '/produk', label: 'Produk' },
  { to: '/edukasi', label: 'Edukasi' },
  { to: '/tentang-kami', label: 'Tentang Kami' },
  { to: '/kontak', label: 'Kontak' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="nav-container">
        {/* LOGO */}
        <Link to="/" className="nav-logo">
          {/* ============================================================
              GANTI: Tambahkan logo di sini
              Contoh: <img src="/images/logo.png" alt="BogFeed" width="140" />
              ============================================================ */}
          <div className="logo-placeholder">
            <img src="./logo.png" alt="BogFeed" width="50" />
            {/* <span className="logo-icon">🌿</span> */}
            <span className="logo-text">
              Bog<span>Feed</span>
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA BUTTON */}
        <Link to="/produk" className="btn btn-primary nav-cta">
          Pesan Sekarang
        </Link>

        {/* HAMBURGER */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/produk" className="btn btn-primary" style={{ marginTop: 8 }}>
              Pesan Sekarang
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}