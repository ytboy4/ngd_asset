module.exports = function(app, db){

	var assets = db.collection('assets');

	app.get('/edit/:asset', function(req, res, next){
		var intId = parseInt(req.param('asset'));
		var query = {'_id': intId};

		assets.findOne(query, function(err, docs){
			if(err) throw err;

			res.render('edit.jade', {pageTitle: 'Edit Asset', asset: docs});
		});
	});

	app.post('/edit/:asset', function(req, res, next){
		// var asset_tag = req.param('asset_tag');
		// var device_type = req.param('device_type');

		// var assets = db.collection('assets');
		var asset_details = {
			// '_id': parseInt(req.param('asset_tag')),
			'device_type': req.param('device_type'),
			'make_model': req.param('make_model'),
			'serial': req.param('serial'),
			'purchase_date': req.param('purchase_date'),
			'cover_type': req.param('cover_type'),
			'cpu_type': req.param('cpu_type'),
			'ram': req.param('ram'),
			'disk': req.param('disk'),
			'storage': req.param('storage'),
			'allocated_to': req.param('allocated_to'),
			'currently_location': req.param('currently_location'),
			'rack': req.param('rack'),
			'u_position': req.param('u_position'),
			'os': req.param('os'),
			'system_type': req.param('system_type'),
			'network': req.param('network'),
			'hostname': req.param('hostname'),
			'vlan_id': req.param('vlan_id'),
			'primary_ip': req.param('primary_ip'),
			'secondary_ip': req.param('secondary_ip'),
			'subnet': req.param('subnet'),
			'gateway': req.param('gateway'),
			'mac_address': req.param('mac_address'),
			'notes': req.param('notes'),
			'details': req.param('details')
		}

		assets.update({'_id': parseInt(req.param('asset_tag'))}, asset_details, function(err, updated){
			if(err) throw err;

			console.log('Updated Asset ' + req.param('asset_tag'));
			res.redirect('/');
		});
				
	});
}