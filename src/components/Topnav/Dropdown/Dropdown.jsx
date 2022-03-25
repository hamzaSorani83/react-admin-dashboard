import React from 'react'
import './Dropdown.css'

export default function Dropdown( props ) {
  return (
    <div className="dropdown">
      <button className="dropdown__toggle">
        {
          props.icon ? <i className={ props.icon } ></i> : null
        }
        {
          props.badge ? <span className="dropdown_toggle-badge">{ props.badge }</span> : null
        }
        {
          props.customToggle ? props.customToggle() : null
          
        }
      </button>
      <div className="dropdown_content">
        {
          props.contentData && props.renderItems ? props.contentData.map( ( item,index ) => {
            return props.renderItems( item,index );
          }): ''
        }
        {
          props.renderFooter ? (
            <div className="dropdown__footer">
              {
                props.renderFooter()
              }
            </div> 
          ) : null
        }
      </div>
    </div>
  )
}
