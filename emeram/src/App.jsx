import { React, useState, useEffect } from 'react'
import auth from './firebase.js'
import WebRoutes from './WebRoutes'
import Navbar from './components/Navbar'
import { Toaster } from 'react-hot-toast'
import AdBlockerDetected from './pages/AdBlockerDetected.jsx'
export default function App() {
  try{
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const simulatePageLoad = setTimeout(() => {
      setPageLoaded(true);
    }, 2500);

    return () => clearTimeout(simulatePageLoad);
  }, []);

  if (!pageLoaded) {
    return (
      <div className="d-flex align-items-center justify-content-center w-100" style={{ minHeight: "100vh" }}>
        <img src={"/src/media/load.svg"} className='img-fluid fade-out' width="10%" alt="Loading" />
      </div>
    );
  }

  return (
    <>
      <Navbar user={user} />
      <Toaster position='top-right' />
      <div className="container-fluid m-0 p-3 mt-3">
        <WebRoutes user={user} />
      </div>
    </>
  );
  }catch(err){
    if(err.message="returnfalse is not defined"){
      return <AdBlockerDetected/>
    }
  }
}
