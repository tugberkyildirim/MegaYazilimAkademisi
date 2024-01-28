import React, { useState, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { doc, updateDoc, query, where, collection, onSnapshot } from 'firebase/firestore'
import db from '../firestore'

export default function Siparislerim({ user }) {
    try {
        if (!user?.uid && user?.uid === undefined) {
            return <Navigate to="/" />
        }

        const [data, setData] = useState([])

        const [baslik, setBaslik] = useState()
        const [yazi, setYazi] = useState()
        const [cevap, setCevap] = useState()
        const [docId, setDocId] = useState()

        useEffect(() => {
            if (user && user?.email) {
                const q = query(collection(db, 'gorusler'), where('kadi', '==', user?.email))
                const unsubscribe = onSnapshot(q, (querySnapshot) => {
                    if (!querySnapshot.empty) {
                        const userDocs = querySnapshot.docs

                        const userData = userDocs.map(doc => ({
                            baslik: doc.data().baslik,
                            yazi: doc.data().yazi,
                            cevap: doc.data().cevap,
                            docId: doc.id
                        }))

                        setData(userData)
                    }
                })

                return () => unsubscribe()
            }
        }, [user])

        return (
            <>
                <p><Link to="/" className='text-decoration-none text-dark'>Anasayfa</Link> <span className="bi bi-chevron-compact-right text-muted fw-bold"></span><Link to="/hesabim" className='text-decoration-none text-dark'>Hesabım</Link> <span className="bi bi-chevron-compact-right text-muted fw-bold"></span> <span className='text-success'>Görüşlerim</span></p>
                <div className="card mx-auto p-3 w-75 h-75" style={{ width: "35rem" }}>
                    <ul className='list-group'>
                        {data.map((item) => (
                            <li key={item.docId} className="list-group-item d-flex border-0 justify-content-between align-items-center">
                                <div className='col-lg bg-light rounded p-3'>
                                    <h5>{item.baslik}</h5>
                                    <p className="text-truncate">{item.yazi}</p>
                                    <p className="text-truncate"><span className='fw-bold'>Cevap:</span> {(item.cevap!=undefined)?item.cevap:"Bekleniyor..."}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        )
    } catch (err) {
    }
}
