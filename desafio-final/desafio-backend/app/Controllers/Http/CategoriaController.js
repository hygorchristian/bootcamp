'use strict'

const Categoria = use('App/Models/Categoria')

class CategoriaController {
  async index ({ request, response, view }) {
    const categorias = await Categoria.all()
    // const categorias = await Categoria.query().with('fiield').fetch()

    return categorias
  }

  async store ({ request, response, auth }) {
    // todo: const data = request.only(['title', 'description'])

    const categoria = await Categoria.create({ ...data, user_id: auth.user.id })

    return categoria
  }

  async show ({ params, request, response, view }) {
    const categoria = await Categoria.findOrFail(params.id)

    return categoria
  }

  async update ({ params, request, response }) {
    const categoria = await Categoria.findOrFail(params.id)
    // todo: const data = request.only(['title', 'description'])

    categoria.merge(data)

    await categoria.save()

    return categoria
  }

  async destroy ({ params, request, response }) {
    const categoria = await Categoria.findOrFail(params.id)
    categoria.delete()
  }
}

module.exports = CategoriaController
