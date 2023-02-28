const functions = require('firebase-functions')

const express = require('express')
const cors = require('cors')

const stripe = require('stripe')(
  'sk_test_51MNZg6ESksPW0D65tqup51Bs2arYbUBeklIpN4L4HbJ69dTGgvE69ep0rIurJkMvRlAHa1QEDrf4trAxatXvAuMf00Ic8IYMYV'
)

// config app
const app = express()

// middlewares
app.use(cors({ origin: true }))
app.use(express.json())

app.get('/', (request, response) => response.status(200).send('hello world'))
app.post('/payments/create', async (request, response) => {
  const total = request.query.total
  // console.log('Payment Request Recieved for this amount >>> ', total
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: 'usd',
  })

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})
// - Listen command
exports.api = functions.https.onRequest(app)
// http://127.0.0.1:5001/g-66515/us-central1/api
