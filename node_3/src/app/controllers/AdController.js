/* eslint-disable camelcase */
const Ad = require('../models/Ad')

class AdController {
  async index (req, res) {
    const filters = {}
    const { price_min, price_max, title, q } = req.query

    if (price_min || price_max) {
      filters.price = {}

      if (price_min) {
        filters.price.$gte = price_min
      }

      if (price_max) {
        filters.price.$lte = price_max
      }
    }

    if (title) {
      filters.title = new RegExp(title, 'i')
    }

    if (q) {
      const regex = new RegExp(q, 'i')
      filters.$or = [{ title: regex }, { description: regex }]
    }

    const ads = await Ad.paginate(filters, {
      page: req.query.page || 1,
      limit: 20,
      populate: ['author'],
      sort: '-createdAt'
    })

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
