'use strict'
const Payment = use('App/Models/Payment')
//const User = use('App/Models/User')


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with payments
 */
class PaymentController {
  /**
   * Show a list of all payments.
   * GET payments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index() {   //Lista todos os registros

    //const { latitude, longitude } = request.all()
    //const payment = Payment.query()
    //.nearBy(latitude, longitude, 10)
    //   .fetch()

    // return payment

    //const user = User.all()
    //return user


    const payment = Payment.all()
    return payment


  }



  /**
   * Create/save a new payment.
   * POST payments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ auth, request, response }) {     //Cria um novo registro

    const { id } = auth.user
    const data = request.only([
      'title',
      'address',
      'latitude',
      'longitude',
      'price'
    ])

    const payment = await Payment.create({ ...data, user_id: id })

    return payment




  }

  /**
   * Display a single payment.
   * GET payments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params }) {  //Exibe um registro

    const pay = await Payment.findOrFail(params.id)
    await pay.load('images')
    return pay

  }



  /**
   * Update payment details.
   * PUT or PATCH payments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {   //Altera um registro
  }

  /**
   * Delete a payment with id.
   * DELETE payments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, auth, response }) {  //Remove um registro

    const payment = await Payment.findOrFail(params.id)

    if (payment.user_id !== auth.user.id) {
      return response.status(401).send({ error: 'Not authorized' })
    }

    await payment.delete()
  }
}

module.exports = PaymentController
