const express = require('express')
require('dotenv').config()
const cors = require('cors')

const port = process.env.PORT || 3001

const app = express()
app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    return res.status(200).json('Bem vindo a API do Copão Urbano-Rural 2022')
})

const GameRouter = require('./routes/GameRoutes')
const TableRouter = require('./routes/TableRoutes')
const TeamRouter = require('./routes/TeamRoutes')

app.use('/api', GameRouter)
app.use('/api', TableRouter)
app.use('/api', TeamRouter)

app.listen(port, () => {
    console.log(`Servidor rodando na porta => ${port}`)
})