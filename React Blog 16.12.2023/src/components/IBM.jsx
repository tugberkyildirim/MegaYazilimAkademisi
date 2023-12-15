import React from 'react'
import ReactDOM from 'react-dom/client'
import MenuArea from './menu.jsx'
import IDM from '../components/IBM.jsx'
import '../js/jquery.js'
import '../js/popper.min.js'
import '../js/bootstrap.bundle.min.js'
import '../js/bootstrap.js'
import '../js/bootstrap.min.js'
import '../css/bootstrap.css'
import '../css/bootstrap.min.css'
import '../css/style.css'


const ibm=[
  {adi:"IBM Serisi",resimi:"./src/media/ibm701.jpg",hakkinda:"IBM 700/7000 serisi bir dizi büyük ölçekli (anabilgisayar ile ilgili ilk sorunlar ve dönüştürme yazılımının yüksek maliyeti, 7000'lerin çoğunun daha sonra yıllarca hizmette kalmasını sağladı. . OS/360 aldı. Ancak ilk 360 olan 360/65, yeterince güçlüydü. 7000'lerin yerini alan bu sistem, Kasım 1965'e kadar mevcut değildi. System/360 tarafından 1950'ler ve 1960'ların başlarında üretilen transistörlü mantığını kullanıyor ve vakum tüpü) bilgisayar sistemleri. Seri, birkaç farklı, uyumsuz işlemci mimarisi içerir."}
]

export default function IBM(){
    return(
        <>
        {ibm.map(computer=>
            <div class="text-dark">
            {computer.hakkinda}
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

ReactDOM.createRoot(document.getElementById("ibm")).render(
    <React.StrictMode>
      <IBM/>
    </React.StrictMode>
  )
  