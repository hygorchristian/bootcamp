'use strict'

const Env = use('Env')
const Youch = use('Youch')
const Config = use('Config')

const Sentry = require('@sentry/node');

const BaseExceptionHandler = use('BaseExceptionHandler')

class ExceptionHandler extends BaseExceptionHandler {
  async handle (error, { request, response }) {
    if (error.name === 'ValidationException') {
      return response.status(error.status).send(error.messages)
    }

    if (Env.get('NODE_ENV') === 'development') {
      const youch = new Youch(error, request.request)
      const errorJson = await youch.toJSON()
      return response.status(error.status).send(errorJson)
    }

    return response.status(error.status)
  }

  async report (error, { request }) {
    Sentry.init(Config.get('services.sentry'));
    Sentry.captureException(error);
  }
}

module.exports = ExceptionHandler
