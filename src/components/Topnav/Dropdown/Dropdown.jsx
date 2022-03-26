import React, { useRef } from 'react'
import './Dropdown.css'

const clickOutsideRef = ( contentRef,toggleRef ) => {
  document.addEventListener( 'mousedown',( e ) => {
    if ( toggleRef.current && toggleRef.current.contains( e.target ) ) {
      contentRef.current.classList.toggle( 'active' );
    } else {
      if ( contentRef.current && !contentRef.current.contains( e.target ) ) {
        contentRef.current.classList.remove( 'active' );
      }
    }
  })
} 

export default function Dropdown( props ) {
  const dropdownToggleEl = useRef( null );
  const dropdownContentEl = useRef( null );
  clickOutsideRef(dropdownContentEl, dropdownToggleEl)
  return (
    <div className="dropdown">
      <button ref={dropdownToggleEl} className="dropdown__toggle">
        {
          props.icon ? <i className={props.icon}></i> : ''
        }
        {
          props.badge ? <span className='dropdown__toggle-badge'>{props.badge}</span> : ''
        }
        {
          props.customToggle ? props.customToggle() : ''
        }
      </button>
      <div ref={dropdownContentEl} className="dropdown__content">
        {
          props.contentData && props.renderItems ? props.contentData.map( ( item,index ) => {
            console.log(item.content);
            return props.renderItems(item, index);
          })
          : ''
        }
        {
          props.renderFooter ? (
            <div className="dropdown__footer">
              {props.renderFooter()}
            </div>
          ) : ''
        }
      </div>
    </div>
  )
}
