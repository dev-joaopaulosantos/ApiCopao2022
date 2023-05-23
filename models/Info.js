const mongoose = require('../db/conn')
const { Schema } = mongoose

const infoSchema = new Schema({
    texto_titulo: { type: String },
    nome: { type: String },
    escudo: { type: String },
    titulo_gols: { type: String },
    gols: { type: String },
    trofeu: { type: String },
})

module.exports = mongoose.model('Info', infoSchema)