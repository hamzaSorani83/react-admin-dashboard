import React from 'react'
import Routing from '../Routing'
import Sidebar from '../Sidebar/Sidebar'
import classes from './Layout.module.css'

export default function Layout() {
  return (
    <div className={classes.Layout}>
      <Sidebar />
      <Routing />
    </div>
  )
}
