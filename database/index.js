const mongoose = require('mongoose');

// Set up mongoose connection
const dev_db_url = 'mongodb+srv://JobsNET:w17XBsdjnk1X7B1b@googlecloudsp.fe1rd.mongodb.net/JobsNET?retryWrites=true&w=majority';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = mongoose;