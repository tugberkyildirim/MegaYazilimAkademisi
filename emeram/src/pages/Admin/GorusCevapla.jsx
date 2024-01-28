import React, { useState, useEffect } from 'react'
import { doc, updateDoc, addDoc, collection, query, onSnapshot, deleteDoc } from 'firebase/firestore'
import db from '../../firestore.js'
import toast from 'react-hot-toast'

export default function GorusCevapla({ user }) {
    const [isCollapsed, setCollapsed] = useState(false)
    const [items, setItems] = useState([])
    const [baslik, setBaslik] = useState('')
    const [yazi, setYazi] = useState('')
    const [kadi, setKadi] = useState('')
    const [cevap, setCevap] = useState('')
    const [selectedDocId, setSelectedDocId] = useState(null)

    useEffect(() => {
        const q = query(collection(db, 'gorusler'))

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            if (!querySnapshot.empty) {
                const itemList = []
                querySnapshot.forEach((doc) => {
                    itemList.push({
                        baslik: doc.data().baslik,
                        kadi: doc.data().kadi,
                        cevap:doc.data().cevap,
                        yazi: doc.data().yazi,
                        docId: doc.id,
                    })
                })
                setItems(itemList)
            }
        })

        return () => unsubscribe()
    }, [])

    const handleToggle = () => {
        setCollapsed(!isCollapsed)
    }

    const handleUpdate = async () => {
        try {
            if (cevap.trim().length > 0) {
                const data = {
                    baslik: baslik,
                    cevap: cevap,
                    yazi: yazi,
                    kadi:kadi,
                }
                const contactRef = doc(db, 'gorusler', selectedDocId)
                await updateDoc(contactRef, data)
                await toast.success('Görüş Başarıyla Cevaplandı')
            } else {
                await toast.error('Lütfen Boş Alan Bırakmayınız')
            }
        } catch (error) {
            await  toast.error('Görüş Cevaplanırken Bir Hata Oluştu')
        }
    }

    const handleDelete = async () => {
        try {
            const contactRef = doc(db, 'gorusler', selectedDocId)
            await deleteDoc(contactRef)
            await  toast.success('Görüş Başarıyla Silindi')
            window.location.reload()
        } catch (error) {
            await  toast.error('Görüş Silinirken Bir Hata Oluştu')
        }
    }

    const handleEditClick = (docId) => {
        setSelectedDocId(docId)
        const docRef = doc(db, 'gorusler', docId)
        onSnapshot(docRef, (docSnapshot) => {
            if (docSnapshot.exists()) {
                const data = docSnapshot.data()
                setBaslik(data.baslik)
                setKadi(data.kadi)
                setCevap(data.cevap)
                setYazi(data.yazi)
            }
        })
    }

    return (<>
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <div className="row  align-items-center">
                        <div className="col-lg-8 w-75">
                            <h2 className="m-0">Görüş Listesi</h2>
                        </div>
                        <div className="col w-25 p-0">
                            <button
                                className="btn btn-white border-o outline-0 float-end w-25"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#newslist"
                                onClick={handleToggle}
                                aria-expanded="false"
                                aria-controls="newslist"
                            >
                                <i className={isCollapsed ? 'bi bi-caret-up-fill' : 'bi bi-caret-down-fill'}></i>
                            </button>
                        </div>
                    </div>
                    <div className={`collapse mt-3 ${isCollapsed ? 'show' : ''}`} id="newslist">
                        <ul className="list-group">
                            {items.map((item) => (
                                <li key={item.docId} className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="row w-100">
                                        <div className='col-lg-8'>
                                            <h5>{item.baslik}</h5>
                                            <p className="text-truncate">{item.yazi}</p>
                                        </div>
                                        <div className='col'>
                                            <button
                                                type="button"
                                                className="btn btn-primary btn-sm me-2"
                                                data-bs-toggle="modal"
                                                data-bs-target="#editModal"
                                                onClick={() => handleEditClick(item.docId)}
                                            >Cevapla</button>
                                            <button
                                                type="button"
                                                className="btn btn-danger btn-sm"
                                                data-bs-toggle="modal"
                                                data-bs-target="#deleteModal"
                                                onClick={() => setSelectedDocId(item.docId)}
                                            >Sil</button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editModalLabel">Görüş Düzenle</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className='p-3'>
                            <div className="row mb-0 w-100">
                                <div className="col-md-6 px-0 w-100">
                                    <label className="form-label">{baslik}({kadi})</label>
                                    <p className='text-break'>{yazi}</p>
                                </div>
                                <div className="col-md-6 w-100 px-0 mt-3">
                                    <label className="form-label">Cevap</label>
                                    <textarea type="text" className="form-control" rows={"5"} id="inputyazi" placeholder='Cevap' value={cevap || ""}
                                        onChange={(e) => setCevap(e.target.value)} style={{ resize: "none" }} required></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                        <button type="button" className="btn btn-dark" onClick={handleUpdate}>Cevapla</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteModalLabel">Görüş Sil</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Emin misiniz?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Vazgeç</button>
                        <button type="button" className="btn btn-danger" onClick={handleDelete}>Sil</button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}