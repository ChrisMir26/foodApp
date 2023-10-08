import express from "express"
import cors from "cors"
import db from "./db/db.js"
import dotenv from "dotenv"
import conectarDB from "./db/db.js"
import productRoutes from "./routes/productRouter.js"
import stripe from 'stripe';
import e from "express"
import Order from "./models/orderModel.js"

const app = express()

app.use(express.json()) // PARA HABILTAR POSTS TIPO JSON
dotenv.config(); // Cargar las variables de entorno

conectarDB()
const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);
app.use(cors());

const calculateOrderAmount = (orderItems) => {
    const initialValue = 0;
    const itemsPrice = orderItems.reduce(
        (previousValue, currentValue) =>
        previousValue + currentValue.price * currentValue.amount, initialValue
    );
    return itemsPrice * 100;
}

app.use(
    express.json({
      // We need the raw body to verify webhook signatures.
      // Let's compute it only when hitting the Stripe webhook endpoint.
      verify: function (req, res, buf) {
        if (req.originalUrl.startsWith('/webhook')) {
          req.rawBody = buf.toString();
        }
      },
    })
  );
  
  // Expose a endpoint as a webhook handler for asynchronous events.
  // Configure your webhook in the stripe developer dashboard
  // https://dashboard.stripe.com/test/webhooks
  app.post('/webhook', async (req, res) => {
      let data, eventType;
    
      // Check if webhook signing is configured.
      if (process.env.STRIPE_WEBHOOK_SECRET) {
        // Retrieve the event by verifying the signature using the raw body and secret.
        let event;
        let signature = req.headers['stripe-signature'];
        try {
          event = stripeInstance.webhooks.constructEvent(
            req.rawBody,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET
          );
        } catch (err) {
          console.log(`⚠️  Webhook signature verification failed.`);
          return res.sendStatus(400);
        }
        data = event.data;
        eventType = event.type;
      } else {
        // Webhook signing is recommended, but if the secret is not configured in `config.js`,
        // we can retrieve the event data directly from the request body.
        data = req.body.data;
        eventType = req.body.type;
      }
    
      if (eventType === 'payment_intent.succeeded') {
        // Funds have been captured
        // Fulfill any orders, e-mail receipts, etc
        // To cancel the payment after capture you will need to issue a Refund (https://stripe.com/docs/api/refunds)
        console.log('💰 Payment captured!');
      } else if (eventType === 'payment_intent.payment_failed') {
        console.log('❌ Payment failed.');
      }
      res.sendStatus(200);
    });
  

app.use("/api",productRoutes)

app.post(`/create-payment-intent`,async(req,res)=>{
    try {
        const { orderItems, shippingAddress, userId } = req.body;
        console.log(shippingAddress);

        const totalPrice = calculateOrderAmount(orderItems);

        const taxPrice = 0;
        const shippingPrice = 0;

        const order = new Order({
            orderItems,
            shippingAddress,
            paymentMethod: 'stripe',
            totalPrice,
            taxPrice,
            shippingPrice,
            user: ''
        })

         await order.save();

        const paymentIntent = await stripeInstance.paymentIntents.create({
            amount: totalPrice,
            currency: 'usd'
        })

        console.log(`soy payment intent`, paymentIntent)
        res.send({
            clientSecret: paymentIntent.client_secret
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error:{
                message:error.message
            }
        })
    }
})


app.listen(process.env.HOST_PORT,()=>{
    console.log(`server listenning on port ${process.env.HOST_PORT}`)
}) 
