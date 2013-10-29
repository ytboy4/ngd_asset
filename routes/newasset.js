module.exports = function(app, db){

	app.get('/newasset', function(req, res, next){
		res.render('newasset.jade', {pageTitle: 'Add Asset'});
	})
}