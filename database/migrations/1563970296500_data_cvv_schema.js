'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DataCvvSchema extends Schema {
  up() {
    this.create('data_cvvs', (table) => {

      table.increments()
      table
        .integer('user_id')  //interage com a tabela *user* ,esse é o caminho para relacionamentos!
        .unsigned()          // sem assinatura
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')  //termina o bloco de relacionamento
      table.string('nome_cvv').notNullable()
      table.string('cpf_cvv').notNullable()
      table.string('num_cvv').notNullable()
      table.string('date_cvv').notNullable()
      table.string('cvv_cvv').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('data_cvvs')
  }
}

module.exports = DataCvvSchema
