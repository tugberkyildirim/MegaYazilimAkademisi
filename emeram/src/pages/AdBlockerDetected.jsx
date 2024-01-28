import React from 'react'

export default function AdBlockerDetected() {
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <img src="./src/media/errors/oops.svg" className='img-fluid' style={{width:"30rem"}} />
      </div>
      <h3 className='text-center'>Reklem Engelleyici Algılandı Lütfen Devre Dışı Bırakınız</h3>
    </>
  )
}