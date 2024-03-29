'use strict'

const User = use('App/Models/User')

class SessionController {
  async store ({ request, auth }) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)
    const user = await User.findByOrFail('email', email)
    user.token = token.token

    return user
  }
}

module.exports = SessionController
