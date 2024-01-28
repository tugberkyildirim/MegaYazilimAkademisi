import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import db from '../firestore'
import toast from 'react-hot-toast'

export default function ProjePreview({ user }) {
  const { projeId } = useParams()
  const [baslik, setBaslik] = useState()
  const [yazi, setYazi] = useState()

  useEffect(() => {
    if (projeId) {
      const projectRef = doc(db, 'projeler', projeId)

      const fetchProject = async () => {
        try {
          const projectSnap = await getDoc(projectRef)

          if (projectSnap.exists()) {
            setBaslik(projectSnap.data().baslik)
            setYazi(projectSnap.data().yazi)
          }
        } catch (error) {
        }
      };

      fetchProject();
    }
  }, [projeId]);

  return (
    <>
      <div className="jumbotron">
        <div className="container">
          <h3 className="display-4">{baslik}</h3>
          <hr className="my-4" />
          <p>{yazi}</p>
        </div>
      </div>
    </>
  );
}
