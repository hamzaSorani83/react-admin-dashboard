import React, {useEffect, useRef} from 'react'
import './Sidebar.css'
import sidebar_items_json from '../../assests/JsonData/sidebar_routes.json'
import { NavLink } from 'react-router-dom';

const SidebarItem = ( { icon,title } ) => {  
  return (
    <div className="Sidebar_Item">
      <div className="Sidebar_Item_Inner">
      <i className={icon}></i>
        <span>{title}</span>
      </div>
    </div>
  );
}

export default function Sidebar() {
  const sidebarRef = useRef();
  const handleToggleSidebar = () => {
    sidebarRef.current.classList.toggle( 'close' );
    sidebarRef.current.classList.toggle( 'open' );
    let sidebarWidth = getComputedStyle( document.documentElement ).getPropertyValue( "--sidebar-width" ).trim();
    document.documentElement.style.setProperty(
      "--sidebar-width",
      sidebarWidth === '300px' ? '100px' : '300px'
    );
  }
  
  useEffect(() => {
    if ( window.innerWidth > 768 ) {
      sidebarRef.current.classList.toggle("open");
    }
  })
  
  
  return (
    <div ref={sidebarRef} className="sidebar">
      <div className="Sidebar_Logo">
        <i className="bx bxs-dashboard" onClick={handleToggleSidebar}></i>
        <span> Admin Dashboard </span>
      </div>
      {sidebar_items_json.map((item, index) => {
        return (
          <NavLink to={item.route} key={index}>
            <SidebarItem title={item.display_name} icon={item.icon} />
          </NavLink>
        );
      })}
    </div>
  );
}
