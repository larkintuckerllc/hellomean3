var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var winerySchema = new Schema({
	name: String
});
var Winery = mongoose.model('Winery', winerySchema);
Winery.schema.path('name').validate(function(value) {
	return !(value == null || value == '');	
}, 'Invalid name');
module.exports = Winery;
