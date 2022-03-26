import React from 'react'
import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import { Routes,Route } from 'react-router-dom';


export default function Routing() {
  return (
    <React.Fragment>
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/customers' element={ <Customers /> }></Route>
        </Routes>
    </React.Fragment>
  )
}
