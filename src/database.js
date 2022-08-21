const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/exampledatabase')
  .then( db => console.log('Connected to: ', db.connection.host) )
  .catch( err => console.error(err))