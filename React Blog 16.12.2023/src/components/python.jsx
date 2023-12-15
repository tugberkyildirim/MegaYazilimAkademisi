import React from 'react'
import ReactDOM from 'react-dom/client'
import MenuArea from './menu.jsx'
import PYTON from '../components/python.jsx'
import '../js/jquery.js'
import '../js/popper.min.js'
import '../js/bootstrap.bundle.min.js'
import '../js/bootstrap.js'
import '../js/bootstrap.min.js'
import '../css/bootstrap.css'
import '../css/bootstrap.min.css'
import '../css/style.css'


const python=[
  {adi:"Python",resimi:"./src/media/python.png",hakkinda:"Girintilere dayalı basit söz dizimi, dilin öğrenilmesini ve akılda kalmasını kolaylaştırır. Bu da ona söz diziminin ayrıntıları ile vakit yitirmeden programlama yapılmaya başlanabilen bir dil olma özelliği kazandırır. Modüler yapısı, sınıf dizgesini (sistem) ve her türlü veri alanı girişini destekler. Hemen hemen her türlü platformda çalışabilir (Unix, Linux, Mac, Windows, Amiga, Symbian). Python ile sistem programlama, kullanıcı arabirimi programlama, ağ programlama, web programlama, uygulama ve veri tabanı yazılımı programlama gibi birçok alanda yazılım geliştirebilirsiniz. Büyük yazılımların hızlı bir şekilde prototiplerinin üretilmesi ve denenmesi gerektiği durumlarda da C ya da C++ gibi dillere tercih edilir.\nPython 1980'lerin sonunda ABC programlama diline alternatif olarak tasarlanmıştı. Python 2.0, ilk kez 2000 yılında yayınlandı. 2008'de yayınlanan Python 3.0, dilin önceki versiyonuyla tam uyumlu değildir ve Python 2.x'te yazılan kodların Python 3.x'te çalışması için değiştirilmesi gerekmektedir. Python 2 versiyonun resmi geliştirilme süreci, dilin son sürümü olan Python 2.7.x serisi versiyonların ardından 1 Ocak 2020 itibarıyla resmi olarak sona erdi. Python 2.x geliştirilme desteğinin sona ermesinin ardından, Python dilinin 3.7.x ve sonraki sürümlerinin geliştirilmesi devam etmektedir.\n\nGuido van Rossum Geliştirilmeye 1990 yılında Guido van Rossum tarafından Amsterdam'da başlanmıştır. Adını sanılanın aksine bir yılandan değil Guido van Rossum’un çok sevdiği, Monty Python adlı altı kişilik bir İngiliz komedi grubunun Monty Python’s Flying Circus adlı gösterisinden almıştır. Günümüzde Python Yazılım Vakfı çevresinde toplanan gönüllülerin çabalarıyla sürdürülmektedir. Python 1.0 sürümüne Ocak 1994'te ulaşmıştır. 2.0 sürümü 16 Ekim 2000'de yayınlanmıştır. 3 Aralık 2008 tarihinden itibaren 3.x serisi yayınlanmaya başlamıştır; ancak 3.x serisi 2.x serisiyle uyumlu değildir."}
]

export default function Python(){
    return(
        <>
        {python.map(py=>
            <div class="text-dark">
            {py.hakkinda}
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

ReactDOM.createRoot(document.getElementById("python")).render(
    <React.StrictMode>
      <PYTON/>
    </React.StrictMode>
  )
  