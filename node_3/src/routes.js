const routes = require('express').Router()
const controllers = require('./app/controllers')

const authMiddleware = require('./app/middlewares/auth')

routes.get('/users', controllers.UserController.list)
routes.post('/users', controllers.UserController.store)
routes.delete('/users/:id', controllers.UserController.remove)

routes.post('/sessions', controllers.SessionController.store)

routes.use(authMiddleware)

/* -- ADS -- */
routes.get('/ads', controllers.AdController.index)
routes.get('/ads/:id', controllers.AdController.show)
routes.post('/ads', controllers.AdController.store)
routes.put('/ads/:id', controllers.AdController.update)
routes.delete('/ads/:id', controllers.AdController.destroy)

module.exports = routes