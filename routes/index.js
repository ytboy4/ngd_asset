var errors = require('./errors');
var newasset = require('./newasset');
var addasset = require('./addasset');
var sortasset = require('./sort');
var editasset = require('./edit');

module.exports = function(app, db){

	var assets = db.collection('assets');

	app.get('/', function(req, res, next){
		assets.find().sort({asset_tag: -1, device_type: 1}).toArray(function(err, docs){
			if(err) return next(err);

			res.render('home.jade', {pageTitle: 'Asset Register v2.0', 'assets': docs});

		});
		
	});

	

	newasset(app);
	addasset(app, db);
	sortasset(app, db);
	editasset(app, db);
	errors(app);
}