import {React,useState} from 'react'
import auth from '../firebase'
import toast from 'react-hot-toast'
import { Navigate, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from '@firebase/auth'
import RouteControl from '../RouteControl';

export default function Giris({user}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const navigate=useNavigate()  

  if(user?.uid){
    return <Navigate to="/"/>
  }

const handleLogin = async (e) => {
  try {
    e.preventDefault()
    await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem("user",JSON.stringify(auth.currentUser))
    return <RouteControl user={user}/>
  } catch (error) {
    toast.error('Giriş hatası', error.message);
  }
};
  return (
    <div className="container-fluid mt-5 mb-5 w-75 shadow-sm border border-1 rounded">
      <div className="row p-5">
        <div className="col-sm">
          <img src="./src/media/images/login.svg" className='img-fluid' />
        </div>
        <div className="col-sm">
            <form className='mt-5' onSubmit={handleLogin}>
            <h3 className='text-center'>Giriş Yap</h3>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">E-mail Adresi</label>
                <input type="email" className="form-control mt-1 bg-light shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="E-mail Adresi" required/>
              </div>
              <div className="form-group mt-3">
                <label htmlFor="exampleInputPassword1">Şifre</label>
                <input type="password" className="form-control mt-1 bg-light shadow-none" id="exampleInputPassword1"   value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Şifre" required/>
              </div>
              <button type="submit" className="btn btn-success mt-3 float-end">Giriş Yap</button>
            </form>
        </div>
      </div>
    </div>
  )
}