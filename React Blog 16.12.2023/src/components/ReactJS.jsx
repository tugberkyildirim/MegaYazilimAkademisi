import React from 'react'
import ReactDOM from 'react-dom/client'
import MenuArea from './menu.jsx'
import REACTJS from './ReactJS.jsx'
import '../js/jquery.js'
import '../js/popper.min.js'
import '../js/bootstrap.bundle.min.js'
import '../js/bootstrap.js'
import '../js/bootstrap.min.js'
import '../css/bootstrap.css'
import '../css/bootstrap.min.css'
import '../css/style.css'


const react=[
  {adi:"React",resimi:"./src/media/csharp.png",hakkinda:"Facebook önderliğinde bir geliştirici grubu tarafından geliştirilmekte olan React, Model-View-Controller prensibine uygun olarak oluşturulmuştur. React ile single-page olarak adlandırılan sayfalar geliştirilebileceği gibi React-Native ile mobil uygulamalar da geliştirilebilir.React'i kullananlar arasında Khan Academy, Netflix, Yahoo, Facebook, Instagram, Sony ve Atlassian örnek gösterilebilir.React Native 2015 yılında Facebook, iOS ve Android işletim sistemlerine yönelik, React altyapısı kullanılarak uygulama geliştirme platformu React Native'i duyurdu. React, Facebook'ta bir yazılım mühendisi olan Jordan Walke tarafından geliştirildi ve 'FaxJS' adlı React'in erken bir prototipini yayınladı. PHP için bir HTML bileşen kütüphanesi olan XHP'den etkilendi. İlk olarak 2011 yılında Facebook'un Haber Kaynağında ve daha sonra 2012 yılında Instagram'da kullanıldı.  Mayıs 2013'te ABD'de düzenlenen JSConf'da açık kaynaklı olarak tanıtıldı.26 Eylül 2017'de React 16.0 sürümü yayımlandı. 16 Şubat 2019'da React 16.8 yayımlandı.  Bu sürümde, React Hooks tanıtıldı.10 Ağustos 2020'de React ekibi, React geliştiriciye yönelik API'de büyük değişiklikler yapılmayan ilk büyük sürüm olarak dikkat çeken React v17.0 için ilk sürüm adayını açıkladı. 29 Mart 2022'de, yeni bir eşzamanlı işleyici, otomatik toplu işleme ve Suspense ile sunucu tarafı oluşturma desteği sunan React 18 piyasaya sürüldü."}
]

export default function ReactJS(){
    return(
        <>
        {react.map(rct=><div class="text-dark">
            {rct.hakkinda}
          </div>
        )}
        </>
    )
}

ReactDOM.createRoot(document.getElementById('menuarea')).render(
    <React.StrictMode>
      <MenuArea/>
    </React.StrictMode>
  )

ReactDOM.createRoot(document.getElementById("react")).render(
    <React.StrictMode>
      <REACTJS/>
    </React.StrictMode>
  )
  