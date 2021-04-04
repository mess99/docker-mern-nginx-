const mongoose = require('mongoose')

const mongoUrl = process.env.NODE_ENV === 'production' ? 
`mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@db` : 
`mongodb://db`

mongoose.connect(mongoUrl, 
  { useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false })
  .then(() => console.log('Connected to Mongo (using mongoose) !'))
  .catch((err) => console.log('Failed to connect !', err)); 


// const MongoClient = require('mongodb').MongoClient

// const mongoUrl = process.env.NODE_ENV === 'production' ? `` : `mongodb://db`

// MongoClient.connect(mongoUrl, 
//   { useNewUrlParser: true, 
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false })
//   .then(() => console.log('Connected to Mongo !'))
//   .catch((err) => console.log('Failed to connect !', err)); 