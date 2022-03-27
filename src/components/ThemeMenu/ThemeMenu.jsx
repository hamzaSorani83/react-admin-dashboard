import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setColor, setMode } from '../../store/themeReducer';
import './ThemeMenu.css'

const mode_settings = [
  {
      id: 'light',
      name: 'Light',
      background: 'light-background',
      class: 'theme-mode-light'
  },
  {
      id: 'dark',
      name: 'Dark',
      background: 'dark-background',
      class: 'theme-mode-dark'
  }
]

const color_settings = [
  {
      id: 'blue',
      name: 'Blue',
      background: 'blue-color',
      class: 'theme-color-blue'
  },
  {
      id: 'red',
      name: 'Red',
      background: 'red-color',
      class: 'theme-color-red'
  },
  {
      id: 'cyan',
      name: 'Cyan',
      background: 'cyan-color',
      class: 'theme-color-cyan'
  },
  {
      id: 'green',
      name: 'Green',
      background: 'green-color',
      class: 'theme-color-green'
  },
  {
      id: 'orange',
      name: 'Orange',
      background: 'orange-color',
      class: 'theme-color-orange'
  },
]

const clickOutsideRef = ( contentRef,toggleRef ) => {
  document.addEventListener( 'mousedown',( e ) => {
    if ( toggleRef.current && toggleRef.current.contains( e.target ) ) {
      contentRef.current.classList.toggle( 'active' );
    } else if(contentRef.current && !contentRef.current.contains( e.target ) ){
      contentRef.current.classList.remove( 'active' );
    }
  })
} 

export default function ThemeMenu() {
  const dispatch = useDispatch();
  
  const menuRef = useRef( null );
  const menuToggleRef = useRef( null );
  clickOutsideRef( menuRef,menuToggleRef );
  
  const handleActivateMenu = () => menuRef.current.classList.add( 'active' );
  const handleCloseMenu = () => menuRef.current.classList.remove( 'active' );
  const [ currentMode, setCurrentMode ] = useState( 'light' );
  const [ currentColor,setCurrentColor ] = useState( 'blue' );
  
  const handleSetMode = ( mode ) => {
    setCurrentMode( mode.id );
    localStorage.setItem( 'themeMode',mode.class );
    dispatch(setMode(mode.class))
  }
  
  const handleSetColor = ( color ) => {
    setCurrentColor( color.id ); 
    localStorage.setItem( 'themeColor',color.class );
    dispatch(setColor(color.class))
  }
  
  useEffect(() => {
    const themeClass = mode_settings.find( (element) => element.class === localStorage.getItem('themeMode'))
    themeClass !== undefined ? setCurrentMode( themeClass.id ) : console.log();
    const colorClass = color_settings.find( (element) => element.class === localStorage.getItem('themeColor'))
    colorClass !== undefined ? setCurrentColor( colorClass.id ) : console.log();
  },[] )
  
  
  return (
    <React.Fragment >
      <button ref={menuToggleRef} className="dropdown__toggle" onClick={handleActivateMenu} >
        <i className="bx bx-palette"></i>
      </button>
      <div ref={menuRef} className="theme-menu">
        <h4>Theme Settings</h4>
        <button className="theme-menu__close" onClick={handleCloseMenu} >
          <i className="bx bx-x"></i>
        </button>
        <div className="theme-menu__select">
          <span> Choose mode</span>
          <ul className="mode-list">
            {
              mode_settings.map( ( item,index ) => {
                return (
                  <li key={ index } onClick={() => handleSetMode(item)}>
                    <div className={`mode-list__color ${item.background} ${item.id === currentMode ? 'active' : null}`} >
                      <i className='bx bx-check'></i>
                    </div>
                    <span> { item.name }</span>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="theme-menu__select">
          <span> Choose color</span>
          <ul className="mode-list">
            {
              color_settings.map( ( item,index ) => {
                return (
                  <li key={ index } onClick={() => handleSetColor(item)}>
                    <div className={`mode-list__color ${item.background}  ${item.id === currentColor ? 'active' : null}`}>
                      <i className='bx bx-check'></i>
                    </div>
                    <span> { item.name }</span>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}
