const express = require('express')
const router = express.Router()
const { getHomepage, getABC } = require('../controllers/homeController')
// middleware that is specific to this router
const timeLog = (req, res, next) => {
  console.log('Time: ', Date.now())
  next()
}
router.use(timeLog)
router.get('/', getHomepage)
router.get('/ooo', getABC)
// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

module.exports = router