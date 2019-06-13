'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PedidoProduto extends Model {
  static boot () {
    super.boot()
    this.addHook('beforeCreate', produto => {
      console.log('produto -> ', produto)
      const dados = produto.produto_tamanho_id
      const { produto_tamanho_id, quantidade } = dados
      produto.quantidade = quantidade
      produto.produto_tamanho_id = produto_tamanho_id

      console.log('ProdutoTamanho -> ', produto)
    })
  }
}

module.exports = PedidoProduto
