const Table = require('../models/Table')

class TableController {

    // static async createTable(req, res) {
    //     const {
    //         grupo,
    //         equipe,
    //         pontos,
    //         jogos,
    //         vitorias,
    //         empates,
    //         derrotas,
    //         saldo_gols,
    //         gols_feitos,
    //         gols_sofridos,
    //         cartoes_amarelos,
    //         cartoes_vermelhos,
    //         escudo
    //     } = req.body

    //     if (!grupo || !equipe || !escudo) {
    //         return res.status(400).json({ message: "Dados incompletos!" })
    //     }

    //     try {
    //         const newTable = await Table.create({
    //             grupo,
    //             equipe,
    //             pontos,
    //             jogos,
    //             vitorias,
    //             empates,
    //             derrotas,
    //             saldo_gols,
    //             gols_feitos,
    //             gols_sofridos,
    //             cartoes_amarelos,
    //             cartoes_vermelhos,
    //             escudo
    //         })

    //         res.status(201).json({ table: newTable })
    //     } catch (error) {
    //         res.status(500).json({ message: error.message })
    //     }
    // }

    static async tabelaGrupo01(req, res) {
        try {
            const tabelaGrupo01 = await Table.find({ grupo: 'GRUPO 01' }).sort('-pontos -vitorias -saldo_gols -gols_feitos gols_sofridos cartoes_vermelhos cartoes_amarelos')
            res.status(200).json(tabelaGrupo01)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    static async tabelaGrupo02(req, res) {
        try {
            const tabelaGrupo02 = await Table.find({ grupo: 'GRUPO 02' }).sort('-pontos -vitorias -saldo_gols -gols_feitos gols_sofridos cartoes_vermelhos cartoes_amarelos')
            res.status(200).json(tabelaGrupo02)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    static async tabelaGrupo03(req, res) {
        try {
            const tabelaGrupo03 = await Table.find({ grupo: 'GRUPO 03' }).sort('-pontos -vitorias -saldo_gols -gols_feitos gols_sofridos cartoes_vermelhos cartoes_amarelos')
            res.status(200).json(tabelaGrupo03)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    static async tabelaGrupo04(req, res) {
        try {
            const tabelaGrupo04 = await Table.find({ grupo: 'GRUPO 04' }).sort('-pontos -vitorias -saldo_gols -gols_feitos gols_sofridos cartoes_vermelhos cartoes_amarelos')
            res.status(200).json(tabelaGrupo04)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

}

module.exports = TableController