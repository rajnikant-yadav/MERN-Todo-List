const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./Models/Todo')
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger.json'); // Reference to the Swagger specifications
require('dotenv').config();

const app = express()
app.use(cors())
app.use(express.json())
const mongodb_url=process.env.DB_URL
console.log("this is db",mongodb_url)

try {
mongoose.connect(mongodb_url);

  
    // Connection successful
    console.log('MongoDB connected successfully!');
  } catch (error) {
    // Handle connection error
    console.error('Error connecting to MongoDB:', error.message);
  }

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  
app.get('/get', (req, res) => {
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.put('/update/:id', (req, res) => {
    const {id} = req.params;
    TodoModel.findByIdAndUpdate({_id: id}, {done: true})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.delete('/delete/:id', (req, res) => {
    const {id} = req.params;
    TodoModel.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/add', (req, res) => {
    const task = req.body.task;
    TodoModel.create({
        task: task
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("Server is Running")

})