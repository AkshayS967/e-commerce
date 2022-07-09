import React from 'react'
import { Route, Routes } from 'react-router-dom'

import AccDashboard from '../AccDashboard/AccDashboard'
import Cart from '../Cart/Cart'
import PLP from '../PLP/PLP'
import Home from './Home'


const Bdy = () => {
  return (
    <div style={{minHeight: '900px', marginTop: '150px'}}>
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/cart" element={<Cart/>} />
              <Route path="/account" element={<AccDashboard/>} />
              <Route path="/women" element={<PLP/>} />
          </Routes>
    </div>
  )
}

export default Bdy