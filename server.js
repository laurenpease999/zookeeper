require('@babel/core')
require('@babel/register')
require('@babel/preset-env')
require('react')

import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { ServerRouter, createServerRenderContext } from 'react-router';

const _ = require('lodash')
const fs = require('fs')
const port = process.env.PORT || 5050
const baseTemplate = fs.readFileSync('./public/index.html')
const template = _.template(baseTemplate)
const App = require('./js/app').default
const server = express()

server.use('/public', express.static('./public'))

server.use((req, res) => {
  const context = createServerRenderContext()
  let body = ReactDOMServer.renderToString(
    <ServerRouter
        location={req.url}
        context={context}
    >
    <App/>
    </ServerRouter>
  )

  res.write(template({body: body}))
  res.end()
})

console.log('listening on port: ', port)
server.listen(port)
//localhost:5050
//run NODE_ENV=server node server.js