








app.get('/admin/flights/:flightName', (req, res)=>{
  axios.get("http://localhost:3000/flights/"+req.params.flightName).then((response) => {
    console.log(response);
    res.json("success");
  }).catch(err => {
    if(err){
      throw err;
    }
  })
});







