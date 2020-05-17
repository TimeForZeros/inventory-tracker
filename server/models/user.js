const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const SALT_ROUNDS = 6;
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  name: String,
  email: {type: String, required: true, lowercase: true, unique: true},
  password: String,
  items: [{type: Schema.Types.ObjectId, ref: 'item'}]
}, {
  timestamps: true
});

userSchema.set('toJSON', {
  transform: (doc, ret) => {
    // remove the password property when serializing doc to JSON
    const resp = { ...ret }
    delete resp.password;
    return resp;
  }
});

userSchema.pre('save', function(next) {
  // const user = this;
  // if (!user.isModified('password')) return next();
  return next();
  // bcrypt.hash(user.password, SALT_ROUNDS, (err, hash) => {
  //   if (err) return next(err);
  //   user.password = hash;
  //   return next();
  // });
});

// userSchema.methods.comparePassword = function(tryPassword, cb) {
//   bcrypt.compare(tryPassword, this.password, cb);
// }
userSchema.methods.comparePassword = function(tryPassword, cb) {
  if (tryPassword === this.password) {
    return cb(null, true);
  }
  // bcrypt.compare(tryPassword, this.password, cb);
}

module.exports = mongoose.model('User', userSchema);