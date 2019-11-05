import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function(){
        ReactDOM.render(<BrowserRouter><Hello /></BrowserRouter>, document.getElementById('app'))
    })
}