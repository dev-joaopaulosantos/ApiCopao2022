const mongoose = require('mongoose')

async function main() {
    mongoose.set('strictQuery', true)
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wx6qt6r.mongodb.net/dbcopao2022?retryWrites=true&w=majority`)
    console.log('Conectado com o banco de dados!')
}

main().catch((err) => console.log(err))

module.exports = mongoose