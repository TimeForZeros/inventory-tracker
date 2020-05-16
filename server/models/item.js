const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema(
  {
    name: String,
    date: Date,
    location: String,
    type: String,
    creatorId: String,
    creatorName: String,
  },
  {
    timestamp: true,
  },
);

module.exports = mongoose.model('Event', eventSchema);
