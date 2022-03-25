import React from 'react'
import Dropdown from './Dropdown/Dropdown';
import notifications from '../../assests/JsonData/notification.json'
import './Topnav.css'


export default function Topnav() {
  return (
    <div className="topnav">
      <div className="topnav__search">
        <input type="text" placeholder='Search here....' name="search" id="search" />
        <i className="bx bx-search"></i>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          <Dropdown
            icon='bx bx-user'
          />
        </div>
        <div className="topnav__right-item">
          {
            <Dropdown
              icon='bx bx-bell'
              badge='12'
              
            />
          }
        </div>
        <div className="topnav__right-item">
          {
            // theme setting
          }
        </div>
      </div>
    </div>
  );
}
