import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Hello from './components/hello.js'

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(<BrowserRouter><Hello /></BrowserRouter>, document.getElementById('app'))
})