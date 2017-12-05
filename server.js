var express=require('express');
var bodyParser = require('body-parser');
var app=express();
var port_no = process.env.PORT || 3010;

/*------------------Routing Started ------------------------*/
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static(__dirname + '/app'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.get('/',function(req,res){
	res.sendFile( __dirname + "/app/" + 'index.html');
});

app.listen(port_no, function(){
	console.log("Express Started on Port "+port_no);
});