const Dev = require('../models/Dev')

module.exports = {
  async index(request,response) {
    const dev = await Dev.find()
    console.log(dev)
    return response.json(dev)
  }
}