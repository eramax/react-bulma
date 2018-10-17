import React from 'react'
import ReactDOM from 'react-dom'
import ERouter from './ERouter';

import './styles.sass'

function App() {
  return <ERouter />
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
