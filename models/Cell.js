const { Schema } = require('mongoose');
const config = require('config');

const cellValues = config.get('numbersUsedInCard');

const cellSchema = new Schema({
    value: { type: Number, required: true, },
    opened: { type: Boolean, required: true, default: false }
});

cellSchema.pre('validate', function(next) {
    if (!cellValues.includes(this.value)) {
        throw new Error('Cell has invalid value.');
    }

    next();
});

module.exports.cellSchema = cellSchema;
