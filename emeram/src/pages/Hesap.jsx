import React,{useState,useEffect} from 'react'
import { Link, Navigate } from 'react-router-dom'
import {doc,updateDoc,query,where,collection,onSnapshot } from 'firebase/firestore'
import db from '../firestore.js'
import toast from 'react-hot-toast'

export default function Hesap({ user }) {
    try {
        if (!user?.uid && user?.uid === undefined) {
            return <Navigate to="/" />
        }
        const[data,setData]=useState([])     

        useEffect(() => {
            if (user && user?.email) {
                const q = query(collection(db, 'users'), where('email', '==', user?.email));
                const unsubscribe = onSnapshot(q, (querySnapshot) => {
                    if (!querySnapshot.empty) {
                        const userDoc = querySnapshot.docs[0];
                        setData({
                            name: userDoc.data().name,
                            surname: userDoc.data().surname,
                            email: userDoc.data().email,
                            phone: userDoc.data().phone,
                            address: userDoc.data().address,
                            userrole:userDoc.data().userrole,
                            docId: userDoc.id
                        });
                        setName(userDoc.data().name)
                        setSurname(userDoc.data().surname)
                        setEmail(userDoc.data().email)
                        setPhone(userDoc.data().phone)
                        setAdress(userDoc.data().address)
                        setDocID(userDoc.id)
                    }
                });
                
                return () => unsubscribe();
            }
        }, [user])

        const [user_name,setName]=useState(data.name||"")
        const [user_surname,setSurname]=useState(data.surname||"")
        const [user_email,setEmail]=useState(data.email||"")
        const [user_phone,setPhone]=useState(data.phone||"")
        const [user_adress,setAdress]=useState(data.address||"")
        const [user_docId,setDocID]=useState(data.id||"")

        const handleUpdateUser = async (e) => {
            e.preventDefault()
           try{
            const data={
                name: user_name,
                address: user_adress,
                email: user_email,
                phone: user_phone,
                surname:user_surname
            }
            const userRef = doc(db, 'users', user_docId);
            toast.success("Bilgileriniz Güncellendi")
            await updateDoc(userRef, data)
           }catch{
            toast.error("Bilgileriniz Güncellenemedi")
           }
        };

        const handlePhoneChange = (e) => {
            const deger = e.target.value;
            if (/[^0-9()-]/.test(deger)) {
              setPhone(deger.replace(/[^0-9()-]/g, ''));
            } else {
              setPhone(deger);
            }
          };

        return (
            <>
                <p><Link to="/" className='text-decoration-none text-dark'>Anasayfa</Link> <span className="bi bi-chevron-compact-right text-muted fw-bold"></span> <span className='text-success'>Hesabım</span></p>
                <div className="card mx-auto p-3 w-75 h-75" style={{ width: "35rem" }}>
                    <div className="row mb-0 w-100">
                        <div className="col-sm pe-3 me-2 text-center my-auto">
                            <i className="bi bi-person-circle text-secondary text-center w-100" style={{ fontSize: "72px" }}></i>
                            <div className="row text-center">
                                <h3 className='p-0 mb-0'>{user_name}</h3>
                            </div>
                            <div className="row w-100 text-center">
                                <p className='text-muted'>{user_email}</p>
                            </div>
                        </div>
                        <div className="col-sm pe-3 me-2">
                            <h4 className='p-0 mb-0'>Bilgilerim</h4>
                            <form className="row g-3 mt-3" key={data.id} onSubmit={handleUpdateUser}>
                                <div className="col-md-6">
                                    <label className="form-label">Ad</label>
                                    <input type="text" className="form-control" id="inputName" placeholder="Adınız"
                                     value={user_name||""}
                                     onChange={(e) => setName(e.target.value)} required/>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Soyad</label>
                                    <input type="text" className="form-control" id="inputSurname" placeholder='Soyadınız'  value={user_surname||""}
                                     onChange={(e) => setSurname(e.target.value)} required/>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Telefon</label>
                                    <input type="text" className="form-control" id="inputPhone" maxLength="11" placeholder='Telefon' value={user_phone}
                                    onChange={handlePhoneChange} required/>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">E-mail</label>
                                    <input type="email" className="form-control" id="inputMail" placeholder="E-Mail Adresiniz" value={user_email||""}
                                    onChange={(e) => setEmail(e.target.value)} required/>
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Addres</label>
                                    <input type="text" className="form-control" id="inputAddress" placeholder="Adresiniz" value={user_adress||""}
                                    onChange={(e) => setAdress(e.target.value)} required/>
                                </div>
                                
                                <div className="col-12 text-end">
                                    <button type="submit" className="btn btn-dark">Kaydet</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    } catch (err) { console.log(err) }
}
