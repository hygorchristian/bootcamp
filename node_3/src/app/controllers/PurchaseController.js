const Ad = require('../models/Ad')
const User = require('../models/User')
const Mail = require('../services/Mail')

class PurchaseController {
  async store (req, res) {
    const { ad, content } = req.body

    const purchaseAd = await Ad.findById(ad).populate('author')
    const user = await User.findById(req.userId)

    try {
      await Mail.sendMail({
        from: '"Hygor Dias <hygor.christian@gmail.com>"',
        to: purchaseAd.author.email,
        subject: `Solicitação de compra: ${purchaseAd.title}`,
        template: 'purchase',
        context: { user, content, ad: purchaseAd }
      })
    } catch (error) {
      return res.status(400).json({ error: `Erro ao enviar o email ${error}` })
    }

    return res.send()
  }
}

module.exports = new PurchaseController()
