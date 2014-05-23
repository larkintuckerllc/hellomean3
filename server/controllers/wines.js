var Wine = require('../models/wines');

exports.findAll = function(req, res) {
	var conditions = {};
	if (req.query.winery) {
		conditions.winery = req.query.winery;
	}

	Wine.find(conditions, function(err, wines) {
		if (!err) {
			res.send(wines);
		} else {
			res.statusCode = 500;
			res.send('500');
		}
	});
};
 
exports.findById = function(req, res) {
	var _id = req.params._id;
	Wine.findById(_id, function(err, wine) {
		if (!err) {
			if (wine) {	
				res.send(wine);
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

exports.delete = function(req, res) {
	var _id = req.params._id;
	Wine.findByIdAndRemove(_id, function(err, wine) {
		if (!err) {
			if (wine) {	
				res.send(wine);
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
		var wine = new Wine({name: req.body.name, winery: req.body.winery});		
		wine.save(function(err) {
			if (!err) {
				res.send(wine);
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
		Wine.findById(_id, function(err, wine) {
			if (!err) {
				if (wine) {	
					wine.name = req.body.name;
					wine.winery = req.body.winery;
					wine.save(function(err) {
						if (!err) {
							res.send(wine);
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
