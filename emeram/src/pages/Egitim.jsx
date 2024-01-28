import React, { useEffect, useState } from 'react'
import VideoCard from '../components/VideoCard'
import {collection, query, onSnapshot } from 'firebase/firestore'
import db from '../firestore'

export default function Egitim({ user}) {
  const [items, setItems] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'egitimler'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      if (!querySnapshot.empty) {
        const itemList = [];
        querySnapshot.forEach((doc) => {
          itemList.push({
            baslik: doc.data().baslik,
            yazi: doc.data().yazi,
            url:doc.data().url,
            docId: doc.id
          });
        });
        setItems(itemList);
      }
    })
    return () => unsubscribe()
  }, [])
  return (
    <>
      <div className="d-flex flex-wrap gap-2">
        {items.map((item) =>
            <VideoCard youtubeID={item.url} text={item.baslik} key={item.docId} id={item.docId}/>
        )}  
      </div>
    </>
  )
}