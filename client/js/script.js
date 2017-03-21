let app = new Vue({
  el: '#app',
  data: {
    houseItem: [],
    add: {
      title: '',
      address: '',
      square_feet: '',
      num_bedrooms: '',
      num_baths: '',
      num_floor: '',
      cost: '',
      sold: '',
      img: '',
      latitude: '',
      longitude: ''
    },
    get: {
      title: '',
      address: '',
      square_feet: '',
      num_bedrooms: '',
      num_baths: '',
      num_floor: '',
      cost: '',
      sold: '',
      img: '',
      latitude: '',
      longitude: ''
    }

  },
  methods: {
    loadHouses: () => {
      axios.get('http://localhost:3000/api/houses')
        .then((response) => {
          app.houseItem = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    addHouse: () => {
      axios.post('http://localhost:3000/api/house', app.add)
        .then((response) => {
          console.log(response.data)
          app.houseItem.push(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getHouse: (slug) => {
      axios.get(`http://localhost:3000/api/house/${slug}`)
        .then((response) => {
          app.get = response.data
        })
    },
    editHouse: (slug) => {
      let self = this
      axios.put(`http://localhost:3000/api/house/${slug}`, app.get)
        .then((response) => {
          app.loadHouses()
        })
        .catch((error) => {
          console.log(error)
        })
    },
    deleteHouse: (slug) => {
      axios.delete(`http://localhost:3000/api/house/${slug}`)
        .then((response) => {
          app.loadHouses()
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
})

app.loadHouses()
