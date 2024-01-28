import React, { useState, useEffect } from 'react'
import { doc, updateDoc, query, collection, onSnapshot, limit } from 'firebase/firestore'
import db from '../../firestore.js'
import toast from 'react-hot-toast';

export default function İletisimBilgileri({ user }) {
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

    const handlePhoneChange = (e) => {
        const deger = e.target.value;
        if (/[^0-9()-]/.test(deger)) {
            setTelefon(deger.replace(/[^0-9()-]/g, ''));
        } else {
            setTelefon(deger);
        }
    };

    const [email, setEmail] = useState(data.Email || "")
    const [adres, setAdres] = useState(data.Adres || "")
    const [googlemap, setGoogleMap] = useState(data.GoogleMap || "")
    const [telefon, setTelefon] = useState(data.Telefon || "")
    const [docId, setDocId] = useState(data.docId || "")

    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            if (adres.trim().length > 0 && email.trim().length > 0 && googlemap.trim().length > 0 && telefon.trim().length > 0) {
                const data = {
                    Adres: adres,
                    Email: email,
                    GoogleMap: googlemap,
                    Telefon: telefon
                }
                const contactRef = doc(db, 'iletisimbilgileri', docId);
                await updateDoc(contactRef, data)
                await toast.success("Bilgiler Kayıt Edildi")
            }else{
                await toast.error("Lütfen Boş Alan Bırakmayınız")
            }
        } catch {  await toast.error("Bilgiler Kayıt Edilemedi Lütfen Kontrol Ediniz") }
    };

    return (<>
        <div className="container-fluid w-75">
            <div className="row">
                <div className="col-sm">
                    <form className='mt-5' onSubmit={handleUpdate}>
                        <h3 className='text-center'>İletişim Bilgileri</h3>
                        <div className="row mb-0 w-100">
                            <div className="col-md-6 px-0">
                                <label className="form-label">E-mail</label>
                                <input type="text" className="form-control" id="inputEmail" placeholder="E-mail"
                                    value={email || ""}
                                    onChange={(e) => setEmail(e.target.value)} required/>
                            </div>
                            <div className="col-md-6 px-1">
                                <label className="form-label">Adres</label>
                                <input type="text" className="form-control" id="inputAdres" placeholder='Adres' value={adres || ""}
                                    onChange={(e) => setAdres(e.target.value)} required/>
                            </div>
                            <div className="col-md-6 mt-3 px-1">
                                <label className="form-label">Google Map</label>
                                <input type="text" className="form-control" id="inputMap" placeholder='Google Map' value={googlemap || ""}
                                    onChange={(e) => setGoogleMap(e.target.value)} required/>
                            </div>
                            <div className="col-md-6 mt-3 px-1">
                                <label className="form-label">Telefon</label>
                                <input type="text" className="form-control" id="inputPhone" maxLength="11" placeholder='Telefon' value={telefon}
                                    onChange={handlePhoneChange} required/>
                            </div>
                            <button type="submit" className="btn btn-dark mt-3 float-end">Kaydet</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
    )
}