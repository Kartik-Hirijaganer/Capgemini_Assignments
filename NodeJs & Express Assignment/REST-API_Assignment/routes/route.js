const bodyParser = require('body-parser');
const { Router } = require('express');
const router = Router();

//item schema
const item = require('../models/item');

router.use(bodyParser.json());

//get method for all elements
router.get('/inventory', async (req, res)=>{
  try{
    const data = await item.find({});
    res.send(data);
  }
  catch (err) {
    console.log(err);
  }
});

//get single element
router.get('/inventory/:itemName', async (req, res)=>{
  try{
    let itemName = req.body.itemName;
    const data = await item.find({ name: itemName });
    res.send(data);
  }
  catch (err) {
    console.log(err);
  }
});


//post method
router.post('/inventory', async (req, res)=>{
  const { name, quantity } = req.body;
  try{
    const singleItem = await item.create({ name, quantity });
    res.send(singleItem);
  }
  catch(err){
    console.log(err);
  }
});

//put method for single element
router.put('/inventory/:itemName/:newName', async (req, res)=>{
  try{
    let name= req.params.itemName;
    let newName = req.params.newName;
    let result = await item.updateOne({name:name}, {name : newName});

    res.send( res.nModified);
  }
  catch (err) {
    console.log(err);
  }
});


//put method for all
router.put('/inventory', (req, res)=>{
  item.updateMany(req.body).then( (item) => {
    res.json(item);
    console.log('updated all');
  }).catch ( err => {
    if (err) {
      throw err;
    }
  });
});

//delete method for single element
router.delete('/inventory/:itemName', async (req, res)=>{
  try{
    let name = req.query.itemName;
  
    let result = await item.deleteOne({ name: name });
    if(result){
      res.send('successfully delete');
    }
    else{
      res.send('unsuccessfull');
    }
  }
  catch (err) {
    console.log(err);
  }
});

//delete all
router.delete('/inventory/', async (req, res)=>{
  try{
    let result =  await item.deleteMany({});
    if(result){
      res.send('deleted');
    }
    else{
      res.send('not deleted');
    }
  }
  catch (err) {
    console.log(err);
  }
});

module.exports = router;