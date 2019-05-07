const User = require('../models/User')

class UserController {
  async store (req, res) {
    const { email } = req.body

    if (await User.findOne({ email })) {
      return res.status(400).json({ error: 'User already exists' })
    }

    const user = await User.create(req.body)

    return res.json(user)
  }

  async list (req, res) {
    const users = await User.find()

    return res.json(users)
  }

  async remove (req, res) {
    const { id } = req.params
    const user = await User.remove({ where: { id } })

    return res.json({ message: 'Deletado com sucesso!', user })
  }
}

module.exports = new UserController()
