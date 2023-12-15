import React from 'react'
import ReactDOM from 'react-dom/client'
import MenuArea from '../components/menu.jsx'
import ENIAC from '../components/Eniac.jsx'
import '../js/jquery.js'
import '../js/popper.min.js'
import '../js/bootstrap.bundle.min.js'
import '../js/bootstrap.js'
import '../js/bootstrap.min.js'
import '../css/bootstrap.css'
import '../css/bootstrap.min.css'
import '../css/style.css'


const eniac=[
    {adi:"ENIAC",resimi:"./src/media/eniac.jpg",hakkinda:"ENIAC (İngilizce: Electronic Numerical Integrator And Computer Türkçe: Elektronik sayısal entegratör ve hesaplayıcı), elektrikle çalışan ve elektronik veri işleme kapasitesine sahip ilk bilgisayar. II. Dünya Savaşı esnasında Amerikalı bilim insanları tarafından inşa edilen ENIAC ilk çıkan bilgisayardı. ENIAC, yaklaşık 167 m² bir alana sığıyordu ve ağırlığı 30 tondu.Bu ilk bilgisayarın siparişi, 1941 yılında ABD’nin II. Dünya Savaşı'na katılmasıyla birlikte ordu tarafından gizli olarak Pennsylvania Üniversitesi'ne ait elektrik mühendisliği okulu Moore School of Electrical Engineering'e verildi. Amaç daha az isabet hatalı uzun menzilli top ve füzelerin hesaplanmalarında kullanılmasıydı.Bilim insanları John Mauchly ve Presper Eckert tarafından yaklaşık 4 yılda imal edildi. Yaklaşık maliyeti 500.000 dolar idi. ENIAC ilk deneme çalışmasına 1945 yılında başladı. Gerçek anlamda çalışabilmesi ise 1947 yılını buldu. Ancak 2 Eylül 1945’te Japonya’nın teslim olmasıyla savaş sona ermişti ve böyle bir makine için ihtiyaç da kalmamıştı. ENIAC 1947 yılında basına tanıtıldı.Savaşın ardından ENIAC ağırlıklı olarak hava tahminlerinde, atom enerjisi hesaplamalarında, kozmik ışın çalışmalarında, termal tetikleme, rastgele sayı bulunmasında, rüzgâr tüneli dizaynında ve diğer bilimsel araştırmalarda kullanıldı. 1951 yılına gelindiğinde ise, endüstriyel amaçlı olarak kullanılmaya başlandı.ENIAC’ın parçaları şu anda Washington’daki Amerikan Ulusal Müzesinde sergilenmektedir."}
]

export default function Eniac(){
    return(
        <>
        {eniac.map(computer=>
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

ReactDOM.createRoot(document.getElementById("eniac")).render(
    <React.StrictMode>
      <ENIAC/>
    </React.StrictMode>
  )
  