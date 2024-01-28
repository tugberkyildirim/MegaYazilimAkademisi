import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminNavbar({user}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 m-0">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <div className='p-2'>
        Merhaba <span className='ps-1 fw-bold'>{user?.email.split('@')[0]}</span>
      </div>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <Link className="nav-link" to="/projeduzenle">Projeleri Düzenle</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/haberduzenle">Haberleri Düzenle</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/egitimduzenle">Eğitimleri Düzenle</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/goruscevapla">Görüşler</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/bilgileriduzenle">İletişim Bilgilerini Düzenle</Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}