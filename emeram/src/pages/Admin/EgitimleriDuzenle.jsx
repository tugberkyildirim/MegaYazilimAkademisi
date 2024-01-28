import React, { useState, useEffect } from 'react'
import { doc, updateDoc, addDoc, collection, query, onSnapshot, deleteDoc } from 'firebase/firestore'
import db from '../../firestore.js'
import toast from 'react-hot-toast'

export default function EgitimleriDuzenle({ user }) {
    const [isCollapsed, setCollapsed] = useState(false)
    const [items, setItems] = useState([])
    const [baslik, setBaslik] = useState('')
    const [yazi, setYazi] = useState('')
    const [url, setURL] = useState('')
    const [selectedDocId, setSelectedDocId] = useState(null)

    useEffect(() => {
        const q = query(collection(db, 'egitimler'))

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            if (!querySnapshot.empty) {
                const itemList = []
                querySnapshot.forEach((doc) => {
                    itemList.push({
                        baslik: doc.data().baslik,
                        url: doc.data().url,
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

    const handleAdd = async () => {
        try {
            if (baslik.trim().length > 0 && url.trim().length > 0 && yazi.trim().length > 0) {
                await addDoc(collection(db, 'egitimler'), {
                    baslik: baslik,
                    yazi: yazi,
                    url: url
                })
                await toast.success('Eğitim başarıyla eklendi.')
            } else {
                await toast.error('Lütfen Boş Alan Bırakmayınız')
            }
        } catch (error) {
            await toast.error('Eğitim eklenirken bir hata oluştu.')
        }
    }

    const handleUpdate = async () => {
        try {
            if (baslik.trim().length > 0 && url.trim().length > 0 && yazi.trim().length > 0) {
                const data = {
                    baslik: baslik,
                    yazi: yazi,
                    url: url
                }
                const contactRef = doc(db, 'egitimler', selectedDocId)
                await updateDoc(contactRef, data)
                await toast.success('Eğitim Başarıyla Güncellendi')
            } else {
                await toast.error('Lütfen Boş Alan Bırakmayınız')
            }
        } catch (error) {
            await  toast.error('Eğitim Güncellenirken Bir Hata Oluştu')
        }
    }

    const handleDelete = async () => {
        try {
            const contactRef = doc(db, 'egitimler', selectedDocId)
            await deleteDoc(contactRef)
            await  toast.success('Eğitim Başarıyla Silindi')
            window.location.reload()
        } catch (error) {
            await  toast.error('Eğitim Silinirken Bir Hata Oluştu')
        }
    }

    const handleEditClick = (docId) => {
        setSelectedDocId(docId)
        const docRef = doc(db, 'egitimler', docId)
        onSnapshot(docRef, (docSnapshot) => {
            if (docSnapshot.exists()) {
                const data = docSnapshot.data()
                setBaslik(data.baslik)
                setURL(data.url)
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
                            <h2 className="m-0">Eğitim Listesi</h2>
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
                                        <div className='col-lg-2'>
                                            <iframe
                                                className="video"
                                                title="Youtube player"
                                                src={`https://youtube.com/embed/${item.url}?autoplay=0`}
                                                allowFullScreen={true} style={{width:"12rem"}}
                                            ></iframe>
                                        </div>
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
                                            >Düzenle</button>
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
            <button type="button" className="btn btn-sm btn-dark float-end mt-3 p-2" style={{ width: "10rem" }} data-bs-toggle="modal" data-bs-target="#addModal">Ekle</button>
        </div>
        <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="addModalLabel">Eğitim Ekle</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className='p-3'>
                            <div className="row mb-0 w-100">
                                <div className="col-md-6 px-0 w-100">
                                    <label className="form-label">Başlık</label>
                                    <input type="text" className="form-control" id="inputBaslik" placeholder="Başlık"
                                        value={baslik || ""}
                                        onChange={(e) => setBaslik(e.target.value)} required/>
                                </div>
                                <div className="col-md-6 w-100 px-0 mt-3">
                                    <label className="form-label">Yazı</label>
                                    <textarea type="text" className="form-control" rows={"5"} id="inputyazi" placeholder='Yazı' value={yazi || ""}
                                        onChange={(e) => setYazi(e.target.value)} style={{ resize: "none" }} required></textarea>
                                </div>
                                <div className="col-md-6 px-0 w-100 mt-3">
                                    <label className="form-label">Youtube ID</label>
                                    <input type="text" className="form-control" id="inputUrl" placeholder="Youtube ID"
                                        value={url || ""}
                                        onChange={(e) => setURL(e.target.value)} required/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                        <button type="button" className="btn btn-dark" onClick={handleAdd}>Ekle</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editModalLabel">Eğitim Düzenle</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className='p-3'>
                            <div className="row mb-0 w-100">
                                <div className="col-md-6 px-0 w-100">
                                    <label className="form-label">Başlık</label>
                                    <input type="text" className="form-control" id="inputBaslik" placeholder="E-mail"
                                        value={baslik || ""}
                                        onChange={(e) => setBaslik(e.target.value)} required/>
                                </div>
                                <div className="col-md-6 w-100 px-0 mt-3">
                                    <label className="form-label">Yazı</label>
                                    <textarea type="text" className="form-control" rows={"5"} id="inputyazi" placeholder='Yazı' value={yazi || ""}
                                        onChange={(e) => setYazi(e.target.value)} style={{ resize: "none" }} required></textarea>
                                </div>
                                <div className="col-md-6 px-0 w-100 mt-3">
                                    <label className="form-label">Youtube ID</label>
                                    <input type="text" className="form-control" id="inputUrl" placeholder="Youtube ID"
                                        value={url || ""}
                                        onChange={(e) => setURL(e.target.value)} required/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                        <button type="button" className="btn btn-dark" onClick={handleUpdate}>Kaydet</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteModalLabel">Eğitim Sil</h5>
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