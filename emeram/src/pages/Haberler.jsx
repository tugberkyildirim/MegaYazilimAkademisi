import { React, useState, useEffect } from 'react'
import { NewsCard, ProjectCard } from '../components/ItemCard.jsx'
import {collection, query, onSnapshot } from 'firebase/firestore'
import db from '../firestore.js'

export default function Haberler({ user }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'haberler'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      if (!querySnapshot.empty) {
        const itemList = [];
        querySnapshot.forEach((doc) => {
          itemList.push({
            baslik: doc.data().baslik,
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
      <h3>Haberler</h3>
      <div className="d-flex flex-wrap gap-1 w-100 h-auto mt-3 ">
        {items.map((item) =>
          <NewsCard title={item.baslik} text={item.yazi} key={item.docId} id={item.docId}/>
        )}
      </div>
    </>
  )
}