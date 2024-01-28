import { React, useState } from 'react'
import toast from 'react-hot-toast'
import auth from '../firebase'
import db from '../firestore'
import { collection, addDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from '@firebase/auth'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Kayit({ user }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [phone, setPhone] = useState("")
    const [adress, setAdress] = useState("")
    const navigate = useNavigate()

    const handlePhoneChange = (e) => {
      const deger = e.target.value;
      if (/[^0-9()-]/.test(deger)) {
        setPhone(deger.replace(/[^0-9()-]/g, ''));
      } else {
        setPhone(deger);
      }
    };

    const handleAddRegister = async (e) => {
        e.preventDefault()
        try {
            await addDoc(collection(db, 'users'), {
                name: name,
                address: adress,
                email: email,
                phone: phone,
                surname: surname,
                userrole:"user"
            })
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }
    const handleRegister = async (e) => {
        try {
            e.preventDefault()
            if (name.trim().length > 0&&surname.trim().length > 0&&phone.trim().length > 0&&adress.trim().length > 0){
                await createUserWithEmailAndPassword(auth, email, password)
                if (handleAddRegister()) {
                    localStorage.setItem("user", JSON.stringify(auth.currentUser))
                    toast.success('Kayıt Başarılı.')
                    navigate("/")
                }
            }else{
                toast.error("Lütfen Boş Alan Bırakmayınız.")
                return false
            }
        } catch (error) {
            toast.error("Kayıt Sırasında Bir Hata Meydana Geldi")
            console.log(error)
            return false
        }
    };
    if (user != undefined && user != null) {
        return <Navigate to="/" />
    }
    return (
        <div className="container-fluid mt-5 mb-5 w-75 shadow-sm border border-1 rounded">
            <div className="row p-5">
                <div className="col-sm">
                    <img src="./src/media/images/login.svg" className='img-fluid' />
                </div>
                <div className="col-sm">
                    <form className='mt-5' onSubmit={handleRegister}>
                        <h3 className='text-center'>Kayıt Ol</h3>
                        <div className="row mb-0 w-100">
                            <div className="col-md-6 px-0">
                                <label className="form-label">Ad</label>
                                <input type="text" className="form-control" id="inputName" placeholder="Adınız"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} required/>
                            </div>
                            <div className="col-md-6 px-1">
                                <label className="form-label">Soyad</label>
                                <input type="text" className="form-control" id="inputSurname" placeholder='Soyadınız' value={surname}
                                    onChange={(e) => setSurname(e.target.value)} required/>
                            </div>
                            <div className="col-md-6 mt-3 px-1">
                                <label className="form-label">Telefon</label>
                                <input type="text" className="form-control" id="inputPhone" maxLength="11" placeholder='Telefon' value={phone}
                                    onChange={handlePhoneChange} required/>
                            </div>
                            <div className="col-md-6 mt-3 px-1">
                                <label className="form-label">E-mail</label>
                                <input type="mail" className="form-control" id="inputMail" placeholder="E-Mail Adresiniz" value={email}
                                    onChange={(e) => setEmail(e.target.value)} required/>
                            </div>
                            <div className="col-12 mt-3 px-1">
                                <label className="form-label">Addres</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="Adresiniz" value={adress}
                                    onChange={(e) => setAdress(e.target.value)} required/>
                            </div>
                            <div className="col-12 mt-3 px-1">
                                <label className="form-label">Şifre</label>
                                <input type="password" className="form-control" id="inputPassword" placeholder="Şifre" value={password}
                                    onChange={(e) => setPassword(e.target.value)} required/>
                            </div>
                            <button type="submit" className="btn btn-success mt-3 float-end">Kayıt Ol</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}