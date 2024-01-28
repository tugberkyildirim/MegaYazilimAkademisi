import React,{ useState } from 'react'
import toast from 'react-hot-toast'
import { Navigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import db from '../firestore'

export default function Gorus({user}) {
    const [data, setData] = useState([])
    const[baslik,setBaslik]=useState()
    const[yazi,setYazi]=useState()

    if (user == undefined|| user == null) {
        toast.error("Lütfen Giriş Yapınız")
        return <Navigate to="/" />
    }

    const handleSend=async(e)=>{
        e.preventDefault()
        try {
            if (baslik.trim().length > 0&&yazi.trim().length > 0){
            await addDoc(collection(db, 'gorusler'), {
                baslik: baslik,
                yazi: yazi,
                kadi:user?.email,
                cevap:""
            })
            await toast.success("Görüşünüz Başarılı Bir Şekilde İletildi")
            window.location.reload()
            return true
        }
        } catch (error) {
            await  toast.success("Görüşünüz İletilemedi")
            return false
        }
    }
    return (
        <>
            <div className="row mb-0 w-100">
                <div className="col-sm">
                    <img src="./src/media/images/iletisim.svg" className='img-fluid w-100 my-auto' />
                </div>
                <div className="col-sm p-5 w-100">
                    <div className="mt-5 mb-5">
                        <div className="d-flex flex-wrap gap-1">
                            <div className="card bg-light border-0 w-100">
                                <form onSubmit={handleSend}>
                                <div className="row mb-0 w-100">
                                <div className="col-md-6 px-0 w-100">
                                    <label className="form-label">Başlık</label>
                                    <input type="text" className="form-control" id="inputBaslik" placeholder="Başlık"
                                        value={baslik || ""}
                                        onChange={(e) => setBaslik(e.target.value)} />
                                </div>
                                <div className="col-md-6 w-100 px-0 mt-3">
                                    <label className="form-label">Açıklama</label>
                                    <textarea type="text" className="form-control" rows={"8"} id="inputyazi" placeholder='Açıklama' value={yazi || ""}
                                        onChange={(e) => setYazi(e.target.value)} style={{ resize: "none" }}></textarea>
                                </div>
                                <div className="col-md-6 px-0 w-100 mt-3">
                                   <button type="submit" className='btn btn-dark p-2 px-3 float-end'>Gönder</button>
                                </div>
                            </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

