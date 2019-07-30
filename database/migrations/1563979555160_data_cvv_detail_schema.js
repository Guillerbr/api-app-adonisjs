'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DataCvvDetailSchema extends Schema {
  up() {
    this.create('data_cvv_details', (table) => { //nome da tabela que será criada no db-vem por padrão ao criar migration"
      table.increments()
      table
        .integer('data_cvv_id')  //interage com a tabela *user* ,esse é o caminho para relacionamentos!
        .unsigned()
        .references('id')
        .inTable('data_cvvs')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')  //termina o bloco de relacionamento
      table.string('bandeira_card').notNullable()
      table.string('cep').notNullable()
      table.string('estado').notNullable()
      table.string('cidade').notNullable()





      table.timestamps()
    })
  }

  down() {
    this.drop('data_cvv_details')
  }
}

module.exports = DataCvvDetailSchema
