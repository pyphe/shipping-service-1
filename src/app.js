const express = require('express')
const app = express()
const ShippingController = require('../src/controllers/shipping-controller')

app.get('/shipping/', (request, response) => {
    let ctrl = new ShippingController()

    ctrl
        .getItemShipping({id: request.query.itemID, type: request.query.type})
        .then(amount => {
            response.send({ product: request.query.itemID, priceUSD: amount})
        })  

        .catch(error => {
            response.status(500).send({ error: error.message })
        })
})

let PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log('ShippingService is listening on port ' + PORT))