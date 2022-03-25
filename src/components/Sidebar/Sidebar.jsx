import React from 'react'
import './Sidebar.css'
import logo from '../../assests/images/logo.png'
import sidebar_items_json from '../../assests/JsonData/sidebar_routes.json'
import { NavLink } from 'react-router-dom';

const SidebarItem = ( {icon, title}) => {
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
  return (
    <div className="sidebar">
      <div className="Sidebar_Logo">
        <img src={logo} alt="company logo" />
      </div>
      {
        sidebar_items_json.map( ( item,index ) => {
        return (
          <NavLink to={item.route} key={index}>
            <SidebarItem
              title={ item.display_name }
              icon={ item.icon } />
          </NavLink>
        );
      })}
    </div>
  );
}
