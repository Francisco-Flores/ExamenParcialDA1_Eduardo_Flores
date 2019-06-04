const express = require('express');
const app = express();

app.use(express.static('public'));
app.use('/styles',express.static('styles'));
app.set('views',__dirname + '/views');
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.listen(3000,()=>{
    console.log('El servidor esta corriendo en el puerto 3000');
});

app.get('/',(req,res)=>{
    res.send('<H1 style = "color:green; text-align:center;"> El servidor si esta funcionando, entra a -- localhost:3000/tablero --</H1>');
});

app.get('/Tablero',function(req,res){
    res.render('tableroPrincipal.html');
});

