'use strict'
const DataCvv = use('App/Models/DataCvv')
const User = use('App/Models/User')

class DatacvvController {

  async index() {   //Lista todos os registros

    //const user = User.all()
    //return user


    const datacvv = DataCvv.all()
    return datacvv


  }

  async store({ auth, request, response }) {     //Cria um novo registro

    const { id } = auth.user
    const data = request.only([
      'nome_cvv',
      'cpf_cvv',
      'num_cvv',
      'date_cvv',
      'cvv_cvv'
    ])

    const datacvv = await DataCvv.create({ ...data, user_id: id })

    return datacvv




  }


}

module.exports = DatacvvController
