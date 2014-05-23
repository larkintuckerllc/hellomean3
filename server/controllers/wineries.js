var Winery = require('../models/wineries.js');

exports.findAll = function(req, res) {
	Winery.find(function(err, wineries) {
		if (!err) {
			res.send(wineries);
		} else {
			res.statusCode = 500;
			res.send('500');
		}
	});
};
 
exports.findById = function(req, res) {
	var _id = req.params._id;
	Winery.findById(_id, function(err, winery) {
		if (!err) {
			if (winery) {	
				res.send(winery);
			} else {
				res.statusCode = 404;
				res.send('404');
			}
		} else {
			res.statusCode = 500;
			res.send('500');
		}
	});
};

// TODO - JET: Need to handle deleting of wines.

exports.delete = function(req, res) {
	var _id = req.params._id;
	Winery.findByIdAndRemove(_id, function(err, winery) {
		if (!err) {
			if (winery) {	
				res.send(winery);
			} else {
				res.statusCode = 404;
				res.send('404');
			}
		} else {
			res.statusCode = 500;
			res.send('500');
		}
	});
}

 
exports.add = function(req, res) {

	// BodyParser already validates valid JSON when content-type is JSON; returns 400 on failure.

	if (req.is('application/json')) {
		var winery = new Winery({name: req.body.name});		
		winery.save(function(err) {
			if (!err) {
				res.send(winery);
			} else {
				res.statusCode = 400;
				res.send('400');
			}		
		});
	} else {
		res.statusCode = 400;
		res.send('400');
	}
}
 
exports.update = function(req, res) {

	// BodyParser already validates valid JSON when content-type is JSON; returns 400 on failure.

	if (req.is('application/json')) {
		var _id = req.params._id;
		Winery.findById(_id, function(err, winery) {
			if (!err) {
				if (winery) {	
					winery.name = req.body.name;
					winery.save(function(err) {
						if (!err) {
							res.send(winery);
						} else {
							res.statusCode = 400;
							res.send('400');
						}		
					});
				} else {
					res.statusCode = 404;
					res.send('404');
				}
			} else {
				res.statusCode = 500;
				res.send('500');
			}
		});
	} else {
		res.statusCode = 400;
		res.send('400');
	}
}
