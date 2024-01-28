import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Anasayfa from './pages/Anasayfa'
import Egitim from "./pages/Egitim"
import Giris from './pages/Giris'
import Kayit from './pages/Kayit'
import Hesap from './pages/Hesap'
import Goruslerim from './pages/Goruslerim'
import Iletisim from './pages/Iletisim'
import PageNotFound from './pages/PageNotFound'

import HaberPreview from './pages/HaberPreview'
import HaberlerTemplate from './components/HaberlerTemplate'
import Haberler from './pages/Haberler'

import ProjeTemplate from './components/ProjeTemplate'
import Projelerimiz from './pages/Projelerimiz'
import ProjePreview from './pages/ProjePreview'
import RouteControl from './RouteControl'

import AdminPanel from './pages/Admin/AdminPanel'
import IletisiBilgileri from './pages/Admin/IletisimBilgileri'
import ProjeleriDuzenle from './pages/Admin/ProjeleriDuzenle'
import HaberleriDuzenle from './pages/Admin/HaberleriDuzenle'
import EgitimleriDuzenle from './pages/Admin/EgitimleriDuzenle'
import EgitimPreview from './pages/EgitimPreview'
import Gorus from './pages/Gorus'
import GorusCevapla from './pages/Admin/GorusCevapla'

export default function WebRoutes({user}) {
   try{
  
    return (
        <Routes>
        <Route path="/" element={<Anasayfa user={user} />} />
        <Route path='/egitimler' element={<ProjeTemplate user={user} />}>
            <Route index={true} element={<Egitim user={user}/>}/>
            <Route path=':egitimId' element={<EgitimPreview user={user} />} />
        </Route>

        <Route path='/projelerimiz' element={<ProjeTemplate user={user} />}>
            <Route index={true} element={<Projelerimiz user={user}/>}/>
            <Route path=':projeId' element={<ProjePreview user={user} />} />
        </Route>

        <Route path='/haberler' element={<HaberlerTemplate user={user} />}>
          <Route index={true} element={<Haberler user={user}/>}/>
          <Route path=':haberId' element={<HaberPreview user={user} />} />
        </Route>

        <Route path="/adminpanel" element={<RouteControl user={user}><AdminPanel user={user}/></RouteControl>}></Route>
        <Route path="/goruscevapla" element={<RouteControl user={user}><AdminPanel user={user} child={<GorusCevapla user={user}/>}/></RouteControl>}></Route>

        <Route path="/bilgileriduzenle" element={<RouteControl user={user}><AdminPanel user={user} child={<IletisiBilgileri user={user}/>}/></RouteControl>}></Route>

        <Route path="/projeduzenle" element={<RouteControl user={user}><AdminPanel user={user} child={<ProjeleriDuzenle user={user}/>}/></RouteControl>}></Route>

        <Route path="/haberduzenle" element={<RouteControl user={user}><AdminPanel user={user} child={<HaberleriDuzenle user={user}/>}/></RouteControl>}></Route>

        <Route path="/egitimduzenle" element={<RouteControl user={user}><AdminPanel user={user} child={<EgitimleriDuzenle user={user}/>}/></RouteControl>}></Route>

        <Route path='/gorus'element={<Gorus user={user} />} />
        <Route path='/iletisim' element={<Iletisim user={user} />} />
        <Route path='/girisyap' element={<Giris user={user} />} />
        <Route path='/kayitol' element={<Kayit user={user} />} />
        <Route path='/hesabim' element={<Hesap user={user} />} />
        <Route path='/goruslerim' element={<Goruslerim user={user} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    )
   }catch(err){}

}