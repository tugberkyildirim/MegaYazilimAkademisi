import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Login({handleLogin,user}) {
  if(user?.id){
    return <Navigate to="/"/>
  }
  return (
   <>
    <div className='container-fluid w-50 p-5 h-100'>
        <form className='form-control'>
          <h1 className='w-100 text-center' style={{fontSize:"80px"}}><i className="bi bi-person-circle"></i></h1>
          <h4 className='w-100 text-center'>Merhaba,</h4>
          <h2 className='w-100 text-center'>Tuğberk</h2>
          {/*<div className="form-group shadow-none">
            <label htmlFor="exampleInputText1">Kullanıcı Adı</label>
            <input type="text" className="form-control shadow-none mt-2" id="exampleInputText1" aria-describedby="textHelp" placeholder="Kullanıcı Adı"/>
          </div>
          <div className="form-group mt-3 shadow-none">
            <label htmlFor="exampleInputPassword1">Şifre</label>
            <input type="password" className="form-control shadow-none mt-2" id="exampleInputPassword1" placeholder="Şifre"/>
          </div>*/}
          <div className="text-center mt-3 p-2">
              <button type="submit" className="btn btn-dark mx-0" onClick={handleLogin}>Giriş Yap</button>
          </div>
         
        </form>
    </div>
   </>
  )
}