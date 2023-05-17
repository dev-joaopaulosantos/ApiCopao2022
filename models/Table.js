const mongoose = require('../db/conn')
const { Schema } = mongoose

const tableSchema = new Schema({
    grupo: { type: String, required: true },
    equipe: { type: String, required: true },
    pontos: { type: Number, default: 0 },
    jogos: { type: Number, default: 0 },
    vitorias: { type: Number, default: 0 },
    empates: { type: Number, default: 0 },
    derrotas: { type: Number, default: 0 },
    saldo_gols: { type: Number, default: 0 },
    gols_feitos: { type: Number, default: 0 },
    gols_sofridos: { type: Number, default: 0 },
    cartoes_amarelos: { type: Number, default: 0 },
    cartoes_vermelhos: { type: Number, default: 0 },
    escudo: { type: String, required: true },
})

module.exports = mongoose.model('Table', tableSchema)