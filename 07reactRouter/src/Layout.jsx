import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function Layout() {
  /* const [form, setForm] = useState({
    name: "John",
    address: "UK",
    pin: "12345"
  }) */

  /* const formArray = [
    { label: "Name", name: "name", type: "text" },
    { label: "Address", name: "address", type: "textarea", },
    { label: "Pin", name: "pin", type: "number" },
    { label: "Pin", name: "pin", type: "number" },
  ] */
  return (
    <>
      <Header />
      <Outlet />


     {/*  {formArray.map(({label,...xyz}, i) =>
        <div key={i}>
          <label>{label}</label>
          <input {...xyz} style={{ border: "1px solid #ccc" }} value={form[xyz.name]} name={xyz.name} onChange={(e) => {
            setForm({
              ...form,
              [e.target.name]: e.target.value
            })
          }} />
        </div>
      )} */}
      <div>
      </div>


      {/* {JSON.stringify(form)} */}
      <Footer />
    </>
  )
}

export default Layout