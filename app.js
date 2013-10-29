var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var routes = require('./routes');

MongoClient.connect('mongodb://localhost:27017/asset_reg', function(err, db){
	if(err) throw err;

	var app = express();
	app.use(express.static(__dirname + '/'));

	app.use(express.bodyParser());
	routes(app, db);

	app.listen(3000, function(){
		console.log('now listening on http://localhost:3000');
	})
})