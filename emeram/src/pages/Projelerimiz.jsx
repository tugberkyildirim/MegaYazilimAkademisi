import { React, useState, useEffect } from 'react'
import { ProjectCard } from '../components/ItemCard.jsx'
import {collection, query, onSnapshot } from 'firebase/firestore'
import db from '../firestore.js'

export default function Projelerimiz({ user }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'projeler'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      if (!querySnapshot.empty) {
        const itemList = [];
        querySnapshot.forEach((doc) => {
          itemList.push({
            baslik: doc.data().baslik,
            durum: doc.data().durum,
            yazi: doc.data().yazi,
            docId: doc.id,
          });
        });
        setItems(itemList);
      }
    })
    return () => unsubscribe()
  }, [])

  return (
    <>
      <h3>Projelerimiz</h3>
      <div className="d-flex flex-wrap gap-1 w-100 h-auto mt-3 ">
        {items.map((item) =>
          <ProjectCard title={item.baslik} text={item.yazi} key={item.docId} id={item.docId} status={item.durum} />
        )}
      </div>
    </>
  )
}