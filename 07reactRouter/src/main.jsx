import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInforLoader } from './components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
<Route path='' element={<Home/>}/>
<Route path='About' element={<About/>}/>
<Route path='Contact' element={<Contact/>}/>
<Route path='User/' element={<User/>}>
<Route path=':userid' element={<User/>}/>
<Route path='' element={<User/>}/>

  </Route>
  <Route loader={githubInforLoader} path='Github' element={<Github/>}/>
  <Route path='*' element={<div>Not Found</div>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
