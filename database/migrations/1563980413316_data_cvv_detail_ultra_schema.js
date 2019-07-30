'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DataCvvDetailUltraSchema extends Schema {
  up () {
    this.create('data_cvv_detail_ultras', (table) => {
      table.increments()
      table
      .integer('data_cvv_id','data_cvv_detail_id') //forma usada para adicionar referencia de duas tabelas
      .unsigned()                       //nao assinado
        .references('id')               //campo da tabela referencia
        .inTable('data_cvv_details')    //nome da tabela referencia
        .onUpdate('CASCADE')
        .onDelete('CASCADE')           //termina o bloco de relacionamento
      table.string('bandeira_card').notNullable()
      table.string('cep').notNullable()
      table.string('estado').notNullable()


      table.timestamps()
    })
  }

  down () {
    this.drop('data_cvv_detail_ultras')
  }
}

module.exports = DataCvvDetailUltraSchema
