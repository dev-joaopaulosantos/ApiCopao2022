const Team = require('../models/Team')

class TeamController {

    static async createTeam(req, res) {
        const {
            nome_equipe,
            escudo,
        } = req.body

        try {
            const newTeam = await Team.create({
                nome_equipe,
                escudo,
            })

            res.status(201).json({ team: newTeam })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    static async equipes(req, res) {
        try {
            const equipes = await Team.find()
            res.status(200).json(equipes)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}

module.exports = TeamController