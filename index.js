const express = require('express')
const { connect } = require('http2')
const path = require('path')
const app = express()

// view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')


// database
const pgp = require('pg-promise')()
const db = pgp('postgres://postgres:Shiro2014@db-hw3.cn37k8tjp6rk.us-east-1.rds.amazonaws.com:5432/postgres') 

  app.get('/', function(req, res) {
     db.one('SELECT VERSION();').then(data => {
        res.render('index', {
            version: data.version
        })
        console.log('DATA:', data.version)
  })

  .catch((error) => {
    console.log('ERROR:', error)
  }) 
  });

app.listen(3000, () => {
    
    console.log('App listening on port 3000')
}) 