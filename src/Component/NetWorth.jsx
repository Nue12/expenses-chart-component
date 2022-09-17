import React from 'react'
import appLogo from '../images/logo.svg'
import '../Styles/netWorth.css'

export default function NetWorth() {
  return (
    <header className='netWorth'>
      <div className='balance'>
        <p>My balance</p>
        <h3>$921.48</h3>
      </div>
      <img src={appLogo} alt="appLogo" className='appLogo' />
    </header>
  )
}
