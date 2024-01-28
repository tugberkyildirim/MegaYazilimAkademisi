import React, { useState, useEffect } from 'react'
import {useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import db from '../firestore'
import toast from 'react-hot-toast'

export default function EgitimPreview({ user }) {
  const {egitimId } = useParams()
  const [baslik, setBaslik] = useState()
  const [yazi, setYazi] = useState()
  const [url, setUrl] = useState()

  useEffect(() => {
    if (egitimId) {
      const projectRef = doc(db, 'egitimler', egitimId)

      const fetchProject = async () => {
        try {
          const projectSnap = await getDoc(projectRef)
          if (projectSnap.exists()) {
            setBaslik(projectSnap.data().baslik)
            setUrl(projectSnap.data().url)
            setYazi(projectSnap.data().yazi)
          }
        } catch (error) {
        }
      };

      fetchProject();
    }
  }, [egitimId]);
  console.log(url)
  return (
    <>
      <div className="jumbotron w-100 h-100">
        <div className="container-fluid" style={{height:"45rem"}}>
          <h3 className="display-4">{baslik}</h3>
          <div className="h-100">
          <iframe
              className="video w-100 h-100"
              title="Youtube player"
              src={`https://youtube.com/embed/${url}?autoplay=0`}
              allowFullScreen={true} 
            ></iframe>
          </div>
          <hr className="my-4" />
          <h4>Açıklama</h4>
          <p>{yazi}</p>
        </div>
      </div>
    </>
  );
}
