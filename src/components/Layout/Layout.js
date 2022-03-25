import React from 'react'
import Routing from '../Routing/Routing'
import Sidebar from '../Sidebar/Sidebar'
import classes from './Layout.module.css'
import { BrowserRouter } from 'react-router-dom'
import Topnav from '../Topnav/Topnav'

export default function Layout() {
  return (
    <div className={ classes.Layout }>
      <BrowserRouter>
        <Sidebar />
        <div className={ classes.Layout_Content }>
          <Topnav />
          <Routing />
        </div>
      </BrowserRouter>
    </div>
  );
}
