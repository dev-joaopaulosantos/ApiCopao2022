const mongoose = require('../db/conn')
const { Schema } = mongoose

const teamSchema = new Schema({
    nome_equipe: { type: String, required: true },
    escudo: { type: String, required: true },
})

module.exports = mongoose.model('Team', teamSchema)