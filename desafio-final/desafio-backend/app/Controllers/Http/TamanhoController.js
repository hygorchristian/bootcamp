'use strict'

const Tamanho = use('App/Models/Tamanho')

class TamanhoController {
  async index ({ request, response, view }) {
    const tamanhos = await Tamanho.all()
    // const tamanhos = await Tamanho.query().with('fiield').fetch()

    return tamanhos
  }

  async store ({ request, response, auth }) {
    const data = request.only(['nome'])

    const tamanho = await Tamanho.create(data)

    return tamanho
  }

  async show ({ params, request, response, view }) {
    const tamanho = await Tamanho.findOrFail(params.id)

    return tamanho
  }

  async update ({ params, request, response }) {
    const tamanho = await Tamanho.findOrFail(params.id)
    const data = request.only(['nome'])

    tamanho.merge(data)

    await tamanho.save()

    return tamanho
  }

  async destroy ({ params, request, response }) {
    const tamanho = await Tamanho.findOrFail(params.id)
    tamanho.delete()
  }
}

module.exports = TamanhoController
