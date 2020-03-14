const express = require('express')
const routes = express.Router()

const FilterController = require('./Controllers/FilterController')
const RegisterController = require('./Controllers/RegisterController')
const DeleteController = require('./Controllers/DeleteController')

routes.get('/users', FilterController.index)
routes.post('/users', RegisterController.store)
routes.delete('/users/:user', DeleteController.destroy)

module.exports = routes
