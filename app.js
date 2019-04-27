const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require("body-parser");

// This will allow our presentation layer to retrieve data from this API without
// running into cross-origin issues (CORS)
app.use(cors());
app.use(bodyParser.json());

// Connect to running database
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PW}@127.0.0.1:27017/monolithic_app_db`, 
    {useNewUrlParser: true});

// User schema for mongodb
const UserSchema = mongoose.Schema({
	name: { type: String },
    email: { type: String }
}, { collection: 'users' } );

// Define the mongoose model for use below in method
const User = mongoose.model('User', UserSchema);

function getUserByEmail (email, callback) {
      try {
            User.findOne({ email: email }, callback);
      } catch (err) {
            callback(err);
      }
};

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page 
app.get('/', function(req, res) {
    res.render('home');
});

app.post('/register', function(req, res) {
    
    const newUser = new User({
        name: req.body.name,
        email: req.body.email
    });

    newUser.save((err, user) => {
        res.status(200).json(user);
    });

});

app.listen(8080);
console.log("Visit app at http://localhost:8080")