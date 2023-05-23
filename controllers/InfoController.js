const Info = require('../models/Info')

class InfoController {

    // static async createInfo(req, res) {
    //     const {
    //         texto_titulo,
    //         nome,
    //         escudo,
    //         titulo_gols,
    //         gols,
    //         trofeu,
    //     } = req.body

    //     try {
    //         const newInfo = await Info.create({
    //             texto_titulo,
    //             nome,
    //             escudo,
    //             titulo_gols,
    //             gols,
    //             trofeu,
    //         })

    //         res.status(201).json({ info: newInfo })
    //     } catch (error) {
    //         res.status(500).json({ message: error.message })
    //     }
    // }

    static async infos(req, res) {
        try {
            const infos = await Info.find()
            res.status(200).json(infos)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}

module.exports = InfoController