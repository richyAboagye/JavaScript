import express from 'express'; 
import cors from 'cors';
import data from './data';
import mongoose from 'mongoose';
import config from './config';
import userRouter from './routers/userRouter';


mongoose.connect(config.MONGODB_URL).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});

const app = express()
app.use(cors())

app.use('/api/users', userRouter)

app.get('/api/products', (req, res) => {
  res.send(data.products)
});

app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((product) => product._id == req.params.id)
  if (product) {
    res.send(product)
  } else {
    res.status(404).send({message: "Product not found"})
  }
})




app.listen(5000, () => {
  console.log('server running at http://localhost:5000')
});