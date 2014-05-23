var mongoose = require('mongoose');
var idvalidator = require('mongoose-id-validator');
var Schema = mongoose.Schema;
var wineSchema = new Schema({
	name: String,
	winery: { 
		type: Schema.Types.ObjectId, 
		ref: 'Winery', 
		required: true 
	}
});
wineSchema.plugin(idvalidator);
var Wine = mongoose.model('Wine', wineSchema);
Wine.schema.path('name').validate(function(value) {
        return !(value == null || value == '');
}, 'Invalid name');
module.exports = Wine;
