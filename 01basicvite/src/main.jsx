import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
  type : 'a',
  props:{
      href: "https://google.com",
      target: "_blank"
  },
  children: 'Click me to visit google .com'

}

function Myapp(){
  return <div>
    <h1>This is my app</h1>
  </div>
}
const areactElement = React.createElement(
  'a',
  {
    href:"https://google.com",
    target:"_blank"
  },
  'Click me to visit google .com'
)
const AnotherElement = (
  <a href="http//:www.google.com" target="_blank">Visit Google </a>
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
  //Myapp()
  //AnotherElement
)
