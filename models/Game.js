const mongoose = require('../db/conn')
const { Schema } = mongoose

const gameSchema = new Schema({
    fase: { type: String },
    nome_equipe_01: { type: String, required: true },
    nome_equipe_02: { type: String, required: true },
    gols_equipe_01: { type: Number },
    gols_equipe_02: { type: Number },
    grupo: { type: String },
    escudo_equipe_01: { type: String, required: true },
    escudo_equipe_02: { type: String, required: true },
    gols_penaltis_equipe_01: { type: Number },
    gols_penaltis_equipe_02: { type: Number },
    local_partida: { type: String, required: true },
    data_partida: { type: Date, required: true },
    status_partida: { type: String, required: true },
    status_penaltis: { type: String },
    vs_ou_x: { type: String, required: true },
})

module.exports = mongoose.model('Game', gameSchema)