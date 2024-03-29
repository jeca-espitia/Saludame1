var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000
app.get('/makers/:nombre', (req, res) => {
  if (!req.params.nombre){
    res.send("<h1>Hola desconocido!</h1>");
  }else{
    var str = req.params.nombre;
    str = str[0].toUpperCase() + str.substring(1);
  
     res.send("<h1>Hola " + str + "!</h1>");
  } 
});

app.listen(PORT, () => console.log('Listening on port 3000!'));