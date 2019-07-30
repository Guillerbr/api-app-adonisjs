'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InfoBasicCvvSchema extends Schema {
  up () {
    this.create('info_basic_cvvs', (table) => {  //nome da tabela que será criada
      table.increments()
      table
      .integer('data_cvv_id')  //interage com a tabela *data_cvv e seu id* ,esse é o caminho para relacionamentos!
      .unsigned()
      .references('id')
      .inTable('data_cvvs')  //nome da tabela que será referenciada,essa tabela já existe no db e deve ter seu nome aqui!
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.string('bin_cvv').notNullable()
      table.string('bank_bin').notNullable()
      table.string('date_cvv').notNullable()
      table.string('level_card').notNullable()



      table.timestamps()
    })
  }

  down () {
    this.drop('info_basic_cvvs')
  }
}

module.exports = InfoBasicCvvSchema
