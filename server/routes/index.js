'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/houseController')

router.get('/houses', controller.getHouses)
router.get('/house/:slug', controller.getOneHouse)
router.post('/house', controller.createHouse)
router.put('/house/:slug', controller.updateHouse)
router.delete('/house/:slug', controller.deleteHouse)

module.exports = router
