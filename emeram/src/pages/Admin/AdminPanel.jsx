import React from 'react'
import AdminNavbar from "../../components/AdminNavbar"
import { Outlet } from 'react-router-dom'

export default function AdminPanel({ user,child }) {
  return (
    <>
      <div className="container">
        <AdminNavbar user={user} />
        {child}
      </div>
    </>
  )
}
