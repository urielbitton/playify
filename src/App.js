import React, {useState, useEffect} from 'react'
import './App.css'
import Frontpage from './Comps/Frontpage'
import Intro from './Comps/Intro'
import HomeCont from './Comps/HomeCont'
import { MainProvider } from './Comps/MainContext'


 
function App() {
  
  useEffect(() => {
      //re-router 
      const router = document.querySelectorAll('[re-router]')
      for(let item of router) {
          item.onclick = function() {
              let thisattr = this.getAttribute('re-router')
              let app = document.querySelectorAll('.app')
              for (item of app) {
                item.style.display = 'none'
              }
              document.querySelector('[re-route="'+thisattr+'"]').style.display = 'block';   
          }
      }       
  })
  
  
  return (
    <div class="appcont">          

    <MainProvider>  
      <Frontpage />
      <Intro />  
      <HomeCont />    
        
    </MainProvider>  
      
    </div>
  )
}

export default App