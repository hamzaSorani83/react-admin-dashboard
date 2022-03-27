import React from 'react'
import Routing from '../Routing/Routing'
import Sidebar from '../Sidebar/Sidebar'
import './Layout.css'
import { BrowserRouter } from 'react-router-dom'
import Topnav from '../Topnav/Topnav'
import { useSelector } from 'react-redux';

export default function Layout() {
  const themeMode = useSelector( ( state ) => state.mode );
  const themeColor = useSelector( ( state ) => state.color );
  return (
    <div className={`Layout ${themeMode} ${themeColor}`}>
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
