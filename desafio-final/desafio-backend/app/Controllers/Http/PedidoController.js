'use strict'

const Pedido = use('App/Models/Pedido')
const Ws = use('Ws')

class PedidoController {
  async index () {
    const pedidos = await Pedido.all()
    // const pedidos = await Pedido.query().with('fiield').fetch()

    return pedidos
  }

  async store ({ request, auth }) {
    const { itens, ...data } = request.only(['valor_total', 'itens'])

    const pedido = await Pedido.create({ ...data, status: 'criado', usuario_id: auth.user.id })
    await pedido.itens().sync(itens)

    return pedido
  }

  async show ({ params }) {
    const pedido = await Pedido.findOrFail(params.id)
    await pedido.load('itens')

    return pedido
  }

  async update ({ params, request }) {
    const pedido = await Pedido.findOrFail(params.id)
    const data = request.only(['status'])

    pedido.merge(data)

    await pedido.save()

    const socket = Ws.getChannel('pedido:*').topic(`pedido:${pedido.id}`)

    if (socket) {
      console.log("socket -> ", JSON.stringify(socket))
      socket.broadcast('status', pedido.status)
    }

    return pedido
  }

  async destroy ({ params }) {
    const pedido = await Pedido.findOrFail(params.id)
    pedido.delete()
  }
}

module.exports = PedidoController
