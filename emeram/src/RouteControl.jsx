import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { query, where, collection, onSnapshot } from 'firebase/firestore'
import db from './firestore.js'

export default function RouteControl({ user, children }) {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (user && user.email) {
        try {
          const q = query(collection(db, 'users'), where('email', '==', user.email));
          const unsubscribe = onSnapshot(q, (querySnapshot) => {
            if (!querySnapshot.empty) {
              const userDoc = querySnapshot.docs[0];
              setUserRole(userDoc.data().userrole);
            }
          });
          return () => unsubscribe();
        } catch (error) {
        }
      }
    };

    fetchData();
  }, [user]);
  if(user&&user.email){
    if (userRole === null) {
        return <div>Yükleniyor...</div>;
      }
  }else{
    if (userRole === null) {
        return <Navigate to="/notfound" replace />;
      }
  }
  if (userRole === "Admin") {
    return children;
  } else {
    return <Navigate to="/notfound" replace />;
  }
}
