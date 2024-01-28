import React,{ useState,useEffect } from 'react'
import db  from "../firestore.js"
import {query, collection, onSnapshot, limit } from 'firebase/firestore'

export default function Iletisim({user}) {
    const [data, setData] = useState([])
    useEffect(() => {
        if (user && user?.email) {
            const q = query(collection(db, 'iletisimbilgileri'), limit(1));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                if (!querySnapshot.empty) {
                    const userDoc = querySnapshot.docs[0];
                    setData({
                        adres: userDoc.data().Adres,
                        email: userDoc.data().Email,
                        phone: userDoc.data().Telefon,
                        address: userDoc.data().GoogleMap,
                        docId: userDoc.id
                    });
                    setEmail(userDoc.data().Email)
                    setAdres(userDoc.data().Adres)
                    setGoogleMap(userDoc.data().GoogleMap)
                    setTelefon(userDoc.data().Telefon)
                    setDocId(userDoc.id)
                }
            });

            return () => unsubscribe()
        }
    }, [user]);

    const [email, setEmail] = useState(data.Email || "")
    const [adres, setAdres] = useState(data.Adres || "")
    const [googlemap, setGoogleMap] = useState(data.GoogleMap || "")
    const [telefon, setTelefon] = useState(data.Telefon || "")
    const [docId, setDocId] = useState(data.docId || "")
    return (
        <>
            <div className="row mb-0 w-100">
                <div className="col-sm">
                    <img src="./src/media/images/iletisim.svg" className='img-fluid w-100 my-auto' />
                </div>
                <div className="col-sm p-5">
                    <div className="mt-5 mb-5">
                        <h3 className='ps-4'>Bize Ulaşın</h3>
                        <div className="d-flex flex-wrap gap-1">
                            <div className="card bg-light border-0" style={{width:"18rem"}}>
                                <div className="card-body">
                                    <h5 className="card-title">Telefon</h5>
                                    <p className="card-text">{telefon}</p>
                                </div>
                            </div>

                            <div className="card bg-light border-0" style={{width:"18rem"}}>
                                <div className="card-body">
                                    <h5 className="card-title">email</h5>
                                    <p className="card-text">{email}</p>
                                </div>
                            </div>

                            <div className="card bg-light border-0" style={{width:"36.2rem"}}>
                                <div className="card-body">
                                    <h5 className="card-title">Adress</h5>
                                    <p className="card-text">{adres}</p>
                                </div>
                            </div>
                        </div>
                        <iframe src={googlemap} style={{width:"36.2rem"}} className="mt-3" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

