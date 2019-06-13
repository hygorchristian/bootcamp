'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PedidoSchema extends Schema {
  up () {
    this.create('pedidos', (table) => {
      table.increments()
      table.integer('usuario_id').unsigned().index()
      table.foreign('usuario_id').references('id').on('users').onDelete('cascade')
      table.decimal('valor_total', 2)
      table.timestamps()
    })
  }

  down () {
    this.drop('pedidos')
  }
}

module.exports = PedidoSchema