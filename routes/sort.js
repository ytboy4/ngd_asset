module.exports = function(app, db){

	var assets = db.collection('assets');

	app.get('/sort/:sortBy', function(req, res, next){
		var cursor = assets.find({});

		cursor.sort(req.param('sortBy', 1)).toArray(function(err, docs){
			if(err) return next(err);

			res.render('home.jade', {pageTitle: 'Asset Register v1.0', 'assets': docs});
		});

	})
}