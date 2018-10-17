import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './ui/Layout'
import './styles.sass'

function App() {
  return <Layout />
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
