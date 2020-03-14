const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
  async store(request,response) {
    const { github_username, techs, latitude, longitude } = request.body
    let dev = await Dev.findOne({ github_username })
  
    if (!dev) {
      const apiResponse = await axios.get(`https://api.github.com/users/${ github_username }`)
      const { blog, avatar_url } = apiResponse.data
      
      const location = {
        type: "Point",
        coordinates: [longitude, latitude]
      }
  
      const techsArray = parseStringAsArray(techs)
      dev = await Dev.create({
        github_username,
        location,
        blog,
        avatar_url,
        techsArray
      })
      console.log(dev)
      return response.json(dev)
    } else {
      return response.send(`${github_username} já cadastrado`)
    }
  }
}
