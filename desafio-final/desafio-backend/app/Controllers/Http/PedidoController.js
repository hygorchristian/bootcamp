'use strict'

const Pedido = use('App/Models/Pedido')

class PedidoController {
  async index ({ request, response, view }) {
    const pedidos = await Pedido.all()
    // const pedidos = await Pedido.query().with('fiield').fetch()

    return pedidos
  }

  async store ({ request, auth }) {
    const { itens, ...data } = request.only(['valor_total', 'itens'])

    const pedido = await Pedido.create({ ...data, usuario_id: auth.user.id })
    await pedido.itens().sync(itens)

    return pedido
  }

  async show ({ params, request, response, view }) {
    const pedido = await Pedido.findOrFail(params.id)

    return pedido
  }

  async update ({ params, request, response }) {
    const pedido = await Pedido.findOrFail(params.id)
    const { itens, ...data } = request.only(['valor_total', 'itens'])

    pedido.merge(data)

    await pedido.save()
    await pedido.itens().sync(itens)

    return pedido
  }

  async destroy ({ params, request, response }) {
    const pedido = await Pedido.findOrFail(params.id)
    pedido.delete()
  }
}

module.exports = PedidoController
