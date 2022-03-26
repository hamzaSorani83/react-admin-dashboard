import React from 'react'
import Routing from '../Routing/Routing'
import Sidebar from '../Sidebar/Sidebar'
import './Layout.css'
import { BrowserRouter } from 'react-router-dom'
import Topnav from '../Topnav/Topnav'

export default function Layout() {
  return (
    <div className="Layout">
      <BrowserRouter>
        <Sidebar />
        <div className="Layout_Content">
          <Topnav />
          <Routing />
        </div>
      </BrowserRouter>
    </div>
  );
}
