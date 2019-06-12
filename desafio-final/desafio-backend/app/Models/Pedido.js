'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pedido extends Model {
  async usuario () {
    return this.belongsTo('App/Models/User')
  }

  async itens () {
    return this.belongsToMany('App/Models/ProdutoTamanho')
      .pivotTable('pedido_produtos')
  }
}

module.exports = Pedido
