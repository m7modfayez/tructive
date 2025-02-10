import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import DashboardBody from './DashboardBody'
import DriverInfo from './DriverInfo'

function App() {

  return (
    <>
    <div className='dashboard'>
      <Header />
      <div className="dash-head">
                <h1>Dashboard</h1>
            </div>
      <DashboardBody />
      {/* <DriverInfo /> */}
      <Footer />
    </div>
    </>
  )
}

export default App
