import app from './app'
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const { redirect } = require('react-router-dom');

const users = []

app.use(express.urlencoded({extended: false}))

app.post('/cadastro', async (req, res) => {
    try{
        const hashedPassoword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.username,
            email: req.body.email,
            password: hashedPassoword
        })     
        res.redirect('/login');
    }catch(e) {
        console.log(e)
        res.redirect('/cadastro')
    }
})

app.get('/', (req, res) => {
    res.render('App.js')
})

app.get('/login', (req, res) => {
    res.render('Login.js')
})

app.get('/cadastro', (req, res) => {
    res.render('Cadastro.js')
})

console.log(users);

app.listen(5000)