'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Produto extends Model {
  async categoria () {
    return this.belongsTo('App/Models/Categoria')
  }

  async tamanhos () {
    return this.belongsToMany('App/Models/Tamanho')
      .pivotTable('produto_tamanhos')
  }

  async file () {
    return this.belongsTo('App/Models/File')
  }
}

module.exports = Produto
