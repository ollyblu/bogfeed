import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Produk from './pages/Produk'
import Edukasi from './pages/Edukasi'
import TentangKami from './pages/TentangKami'
// import Kontak from './pages/Kontak'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produk" element={<Produk />} />
          <Route path="/edukasi" element={<Edukasi />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
          {/* <Route path="/kontak" element={<Kontak />} /> */}
        </Routes>
      </main>
      <Footer />
    </>
  )
}