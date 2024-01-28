import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import auth from '../firebase'
import { signOut } from '@firebase/auth'
import toast from 'react-hot-toast'

export default function Navbar({user}) {
    const navigate=useNavigate()
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src="/src/media/load.svg" width={"50rem"} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link className='nav-link' to="/">Anasayfa</Link>
                        <Link className='nav-link' to="/egitimler">Eğitim</Link>
                        <Link className='nav-link' to="/projelerimiz">Projelerimiz</Link>
                        <Link className='nav-link' to="/haberler">Haberler</Link>
                        <Link className='nav-link' to="/iletisim">İletişim</Link>
                        {
                        user ?? null?<>
                        <Link className='nav-link' to="/gorus">Görüşlerinizi Paylaşın</Link>
                        </>:<></>
                        }

                    </ul>
                    <div className="d-block">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle pull-right" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-person fs-4"></i><span className='mb-5 ps-2'>{user?.email}</span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end border-0 shadow-sm">
                                    {
                                        user ?? null?
                                        <>
                                        <Link className='dropdown-item' to="/hesabim">Hesabım</Link>
                                        <Link className='dropdown-item' to="/goruslerim">Görüşlerim</Link>
                                        <li><hr className="dropdown-divider" /></li>
                                        <Link className='dropdown-item' onClick={async()=>{
                                             try {
                                                await signOut(auth);
                                                toast.success('Çıkış yapıldı.');
                                                localStorage.removeItem("user")
                                                navigate("/")
                                              } catch (error) {
                                                console.log(error)
                                                toast.error('Çıkış hatası');
                                              }
                                        }}>Çıkış Yap</Link></>:
                                        <><Link className='dropdown-item' to="/girisyap">Giriş Yap</Link>
                                        <Link className='dropdown-item' to="/kayitol">Kayıt Ol</Link>
                                        </>
                                    }
                               
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}