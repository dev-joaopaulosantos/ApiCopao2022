const Game = require('../models/Game')

class GameController {

    // static async createGame(req, res) {
    //     const {
    //         fase,
    //         nome_equipe_01,
    //         nome_equipe_02,
    //         gols_equipe_01,
    //         gols_equipe_02,
    //         grupo,
    //         partida,
    //         escudo_equipe_01,
    //         escudo_equipe_02,
    //         gols_penaltis_equipe_01,
    //         gols_penaltis_equipe_02,
    //         local_partida,
    //         data_partida,
    //         status_partida,
    //         status_penaltis,
    //         vs_ou_x
    //     } = req.body

    //     try {
    //         const newGame = await Game.create({
    //             fase,
    //             nome_equipe_01,
    //             nome_equipe_02,
    //             gols_equipe_01,
    //             gols_equipe_02,
    //             grupo,
    //             partida,
    //             escudo_equipe_01,
    //             escudo_equipe_02,
    //             gols_penaltis_equipe_01,
    //             gols_penaltis_equipe_02,
    //             local_partida,
    //             data_partida,
    //             status_partida,
    //             status_penaltis,
    //             vs_ou_x
    //         })

    //         res.status(201).json({ game: newGame })
    //     } catch (error) {
    //         res.status(500).json({ message: error.message })
    //     }
    // }

    static async primeiraRodada(req, res) {
        try {
            const primeiraRodada = await Game.find({ fase: 'primeira rodada' })
            res.status(200).json(primeiraRodada)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    static async segundaRodada(req, res) {
        try {
            const segundaRodada = await Game.find({ fase: 'segunda rodada' })
            res.status(200).json(segundaRodada)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    static async terceiraRodada(req, res) {
        try {
            const terceiraRodada = await Game.find({ fase: 'terceira rodada' })
            res.status(200).json(terceiraRodada)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    static async quartas(req, res) {
        try {
            const quartas = await Game.find({ fase: 'quartas' })
            res.status(200).json(quartas)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    static async semiFinais(req, res) {
        try {
            const semiFinais = await Game.find({ fase: 'semi finais' })
            res.status(200).json(semiFinais)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    static async final(req, res) {
        try {
            const final = await Game.find({ fase: 'final' })
            res.status(200).json(final)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

}

module.exports = GameController