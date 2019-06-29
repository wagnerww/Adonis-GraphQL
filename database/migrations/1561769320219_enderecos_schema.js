'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EnderecosSchema extends Schema {
  up () {
    this.create('enderecos', (table) => {
      table.increments()
      table.integer('user_id').notNullable().references('id').inTable('users')
      table.string('endereco').notNullable()
      table.string('numero').notNullable()
      table.string('bairro')
      table.string('complemento')
      table.timestamps()
    })
  }

  down () {
    this.drop('enderecos')
  }
}

module.exports = EnderecosSchema
