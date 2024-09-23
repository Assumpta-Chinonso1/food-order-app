import React from 'react'
import './AppDownload.css'
import { assests } from '../../assets/assests'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Exprience Download <br />Susu's Kitchen app</p>
        <div className="app-download-platforms">
            <img src={assests.playstore} alt="" />
            <img src={assests.appstore} alt="" />
        </div>

    </div>
  )
}

export default AppDownload