'use strict'

const house = require('../models/house')
const slug = require('slug')

let methods = {}

methods.getHouses = (req, res, next) => {
  house.find()
    .then((houses) => {
      res.send(houses)
    })
    .catch((error) => {
      res.send({
        message: 'Find houses erorr',
        error: error
      })
    })
}

methods.getOneHouse = (req, res, next) => {
  house.findOne(req.params.slug)
    .then((house) => {
      res.send(house)
    })
    .catch((error) => {
      res.send({
        message: 'Find one error',
        error: error
      })
    })
}

methods.createHouse = (req, res, next) => {
  let houseProperty = {
    title: req.body.title,
    address: req.body.address,
    square_feet: req.body.square_feet,
    num_bedrooms: req.body.num_bedrooms,
    num_baths: req.body.num_baths,
    num_floor: req.body.num_floor,
    cost: req.body.cost,
    sold: req.body.sold,
    slug: slug(req.body.title).toLowerCase(),
    img: req.body.img
  }

  house.create(houseProperty)
    .then((house) => {
      res.send(house)
    })
    .catch((error) => {
      res.send({
        message: 'create house error',
        error: error
      })
    })
}

methods.updateHouse = (req, res, next) => {
  let houseProperty = {
    title: req.body.title,
    address: req.body.address,
    square_feet: req.body.square_feet,
    num_bedrooms: req.body.num_bedrooms,
    num_baths: req.body.num_baths,
    num_floor: req.body.num_floor,
    cost: req.body.cost,
    sold: req.body.sold,
    slug: slug(req.body.title).toLowerCase(),
    img: req.body.img
  }

  house.findOne({
    slug: req.params.slug
  })
    .then((house) => {
      if (!house) {
        res.send({
          houseUndefined: 'House is not found!'
        })
      } else {
        house.update(houseProperty)
          .then((house) => {
            res.send(house)
          })
          .catch((error) => {
            res.send({
              message: 'Error update house',
              error: error
            })
          })
      }
    })
    .catch((error) => {
      res.send({
        message: 'Find one error, method update',
        error: error
      })
    })
}

methods.deleteHouse = (req, res, next) => {
  house.findOne({
    slug: req.params.slug
  })
    .then((house) => {
      if (!house) {
        res.send({
          houseUndefined: 'House is not found!'
        })
      } else {
        house.remove(house)
          .then((house) => {
            res.send({
              message: `${house.slug} has been deleted`
            })
          })
          .catch((error) => {
            res.send({
              message: 'Error delete house',
              error: error
            })
          })
      }
    })
    .catch((error) => {
      res.send({
        message: 'Find one error, method delete',
        error: error
      })
    })
}

module.exports = methods
