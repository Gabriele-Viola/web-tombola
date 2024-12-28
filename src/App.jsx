import { useState } from 'react'

import './App.css'
import AppHeader from './components/AppHeader'
import Tabellone from './components/Tabellone'
import Extractor from './components/Extractor'
import { GlobalContextProvider } from './context/GlobalContext'


function App() {

  return (
    <>
      <GlobalContextProvider>

        <AppHeader />
        <div className="container">
          <div className="row">
            <Tabellone />
            <Extractor />
          </div>
        </div>
      </GlobalContextProvider>
    </>
  )
}

export default App
