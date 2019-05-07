const Ad = require('../models/Ad')

class AdController {
  async index (req, res) {
    const ads = await Ad.find()

    return res.json(ads)
  }

  async show (req, res) {
    const { id } = req.params
    const ad = await Ad.findById(id)

    if (!ad) return res.status(400).json({ error: 'Ad not found' })

    return res.json({ ad })
  }

  async store (req, res) {
    console.log('data -> ', { ...req.body, author: req.userId })
    const ad = await Ad.create({ ...req.body, author: req.userId })

    if (!ad) res.status(400).json({ error: 'Could not create Ad' })

    return res.json({ ad })
  }

  async update (req, res) {
    const { id } = req.params
    const ad = await Ad.findByIdAndUpdate(id, req.body, {
      new: true
    })

    return res.json({ ad })
  }
  async destroy (req, res) {
    const { id } = req.params
    await Ad.findByIdAndDelete(id)

    return res.send()
  }
}

module.exports = new AdController()
