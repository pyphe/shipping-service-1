const express = require('express')
const app = express()
const ShippingController = require('../src/controllers/shipping-controller')

app.get('/shipping/:itemID/:type', (request, response) => {
    let ctrl = new ShippingController()

    ctrl
        .getItemShipping({id: request.params.itemID, type: request.params.type})
        .then(amount => {
            response.send({ product: request.params.itemID, priceUSD: amount})
        })  

        .catch(error => {
            response.status(500).send({ error: error.message })
        })
})

let PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log('ShippingService is listening on port ' + PORT))