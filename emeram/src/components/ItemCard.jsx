import React from 'react'
import { Link } from 'react-router-dom'

export function ProjectCard({ id, title, text, status}) {
  return (<>
    <Link to={`/projelerimiz/${id}`} className='text-decoration-none'>
      <div className="card" style={{ width: "12rem", height: "9rem" }}>
        <div className="card-body">
          <h5 className="card-title  text-truncate">{title}</h5>
          <p className="card-text  text-truncate">{text}</p>
          <p className={(status=="fin")?"bg-success p-2 rounded text-white":"bg-primary p-2 rounded text-white"}>{(status=="fin")?"Tamamlandı":"Devam Ediyor"}</p>
        </div>
      </div>
    </Link>
  </>)
}

export function NewsCard({ id, title,text}) {
  return (<>
    <Link to={`/haberler/${id}`} className='text-decoration-none'>
      <div className="card" style={{ width: "12rem", height: "6rem" }}>
          <div className="card-body">
            <h5 className="card-title  text-truncate">{title}</h5>
            <p className="card-text  text-truncate">{text}</p>
          </div>
      </div>
    </Link>
  </>)
}