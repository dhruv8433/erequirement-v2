import React from 'react'
import Routes from '../Routes/Routes'
import { Divider } from '@mui/material'
import { WebName } from '../config/config'


const MenuDrawer = () => {
  return (
    <div className='p-4'>
        <div className="heading mb-2">
            <h1 className='font-semibold text-2xl'>{WebName}</h1>
        </div>
        <Divider />
        <div className="routes my-4">
            <Routes isResponsive={true} />
        </div>
    </div>
  )
}

export default MenuDrawer