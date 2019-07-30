'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DataCvvDetailUltraUltimateSchema extends Schema {
  up() {
    this.create('data_cvv_detail_ultra_ultimates', (table) => {
      table.increments()
      table
        .integer('data_cvv_id','data_cvv_detail_ultra_id') //tabela e seu campo que relacionará com essa tabela.Interage com o campo das tabelas
        .unsigned()
        .references('id')
        .inTable('data_cvv_detail_ultras')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')  //termina o bloco de relacionamento
      table.string('vendedor_rate').notNullable()
      table.string('quality_info').notNullable()



      table.timestamps()
    })
  }

  down() {
    this.drop('data_cvv_detail_ultra_ultimates')
  }
}

module.exports = DataCvvDetailUltraUltimateSchema
