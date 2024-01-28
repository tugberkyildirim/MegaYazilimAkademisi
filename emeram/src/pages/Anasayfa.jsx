import React from 'react'

export default function Anasayfa({user}) {
    return (
        <>
            <div className="row mb-0 w-100">
                <div className="col-sm">
                    <img src="./src/media/images/egitim.svg" className='img-fluid w-100 my-auto' />
                </div>
                <div className="col-sm p-5">
                    <div className="mt-5 mb-5">
                        <h1 className='fs-bold' style={{ fontSize: "54px" }}>Eğitimlerimiz</h1>
                        <p className='fs-5'>Video eğitimlerimize katılarak yazılım öğrenmek ister misin?</p>
                        <div className="d-flex flex-wrap gap-3">
                            <img src="./src/media/images/python.svg" width="15%" height="auto" />
                            <img src="./src/media/images/csharp.png" width="15%" height="auto" />
                            <img src="./src/media/images/react.svg" width="15%" height="auto" />
                        </div>
                        <a href="/egitimler" className='btn btn-primary mt-3'>İzlemeye Başla</a>
                    </div>
                </div>
            </div>
            <div className="row mb-0 w-100">
                <div className="col-sm">
                    <img src="./src/media/images/project.svg" className='my-auto' width="80%" />
                </div>
                <div className="col-sm p-5">
                    <div className="mt-5 mb-5">
                        <h1 className='fs-bold' style={{ fontSize: "54px" }}>Projelerimiz</h1>
                        <p className='fs-5'>Projelerimiz hakkında bilgi almak ister misin?</p>
                        <a href="/projelerimiz" className='btn btn-primary mt-3'>Daha Fazla</a>
                    </div>
                </div>
            </div>
        </>
    )
}