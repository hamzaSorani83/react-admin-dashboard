import React from 'react'
import './Topnav.css'
import Dropdown from './Dropdown/Dropdown';
import notifications from '../../assests/JsonData/notification.json'
import userMenu from '../../assests/JsonData/user_menus.json'
import { Link } from 'react-router-dom';

const renderNotificationItem = ( item,index ) => {
  return (
    <div className="notification-item" key={index}>
      <i className={ item.icon }></i>
      <span>{ item.content }</span>
    </div>
  );
}

const currentUser = {
  display_icon: "bx bx-user-circle",
  display_name: "Hamza",
};

const renderUserToggle = ( user ) => {
  return (
    <div className="topnav__right-user">
      <div className="topnav__right-user__image">
        <i className={user.display_icon}></i>
      </div>
      <div className="topnav__right-user__name">
        {user.display_name}
      </div>
  </div>
  );
}

const renderUserMenu = (item, index) => {
  return (
    <Link to={'/' + item.content.split(' ').join('-')} key={index}>
      <div className="notification-item">
        <i className={item.icon}></i>
        <span>{item.content}</span>
      </div>
    </Link>
  );
};



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
            customToggle={ () => renderUserToggle( currentUser ) }
            contentData={ userMenu }
            renderItems={ ( item,index ) => renderUserMenu( item,index ) }
          />
        </div>
        <div className="topnav__right-item">
          {
            <Dropdown
              icon='bx bx-bell'
              badge='12'
              contentData={ notifications }
              renderItems={ ( item,index ) => renderNotificationItem( item,index ) }
              renderFooter={ () => <Link to="/">View All</Link> }
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
