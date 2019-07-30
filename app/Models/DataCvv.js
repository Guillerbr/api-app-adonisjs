'use strict'

const Database = use('Database')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class DataCvv extends Model {



  user () {
    return this.belongsTo('App/Models/User')
 }
}

module.exports = DataCvv
