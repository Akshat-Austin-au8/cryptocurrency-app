import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'

import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from './components'
import './App.css'

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exect path='/' element={<Homepage />} />
              <Route exect path='/exchanges' element={<Exchanges />} />
              <Route exect path='/cryptocurrencies' element={<Cryptocurrencies />} />

              <Route exect path='/crypto/:coinId' element={<CryptoDetails />} />

              <Route exect path='/news' element={<News />} />

            </Routes>
          </div>
        </Layout>
      </div>
      <div className='footer'>

      </div>
    </div>
  )
}

export default App
