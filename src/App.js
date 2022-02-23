import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
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
            <Switch>
              <Route exect path='/'>
                <Homepage />
              </Route>
              <Route exect path='/exchanges'>
                <Exchanges />
              </Route>
              <Route exect path='/cryptocurrencies'>
                <Cryptocurrencies />
              </Route>
              <Route exect path='/crypto/:coinId'>
                <CryptoDetails />
              </Route>
              <Route exect path='/news'>
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
      </div>
      <div className='footer'>

      </div>
    </div>
  )
}

export default App
