const mongoose = require('mongoose');
const express = require('express');
//const morgan = require('morgan');
const app = express();

main().catch(err => console.log(err));
app.listen('5000');
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/votingdb');
  if(mongoose.connect){
    console.log('db connected successfully')
  };
  app.use(express.static('public'));
  app.use(express.urlencoded({extended: true }));
  app.use(morgan('dev'));

  
  const voterSchema = new mongoose.Schema({
    vin: String
    
  });


  const Voter = mongoose.model("Voter", voterSchema);
  const voter = new Voter({
    vin: "1415GFTRDFG6",
    
  }); 
 /* voter.save(); 
  if(voter.save){
    console.log("Record saved Successfully");
  }
  */
Voter.find().then((voters) => {
    console.log(voters);
    voters.forEach(function(voter){
        console.log(voter.firstName);
        })
   }) 
  //  '648dcbc8e1eaae939008f188' use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled


app.get('/', (req, res) => {
    res.render('index')
});



app.post("/index", function(req, res){

  const vin = res.body.vin;
  const password = res.body.password;

  Voter.findOne({vin: vin}, function(err, foundvoter){ 
    if(err){ console.log(err);
    } else{
      if(foundvoter.password === password){
        res.render("details");
      }

      }
    })
});


/*app.get('/about', (req, res) => {
  const id = "648dcbc8e1eaae939008f188";
  voters.find()
    .then(voters => {
      res.render('about', { voters: firstName, lastName: 'names' });
    })
    .catch(err => {
      console.log(err);
    });
});*/
app.set('view engine', 'ejs');
}
module.exports = server;
//connect to mongodb
