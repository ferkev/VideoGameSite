//Paquets
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const customerSchema = new schema({
  firstName: { type: String },
  lastName: { type: String },
  age: { type: Number },
  email: { type: String },
  password: { type: String },
  created_at: {type: Date, default: Date.now }
});

customerSchema.pre('save', function(next) {
  var customer = this;

  // only hash the password if it has been modified (or is new)
  if (!customer.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
      if (err) return next(err);

      // hash the password along with our new salt
      bcrypt.hash(customer.password, salt, function(err, hash) {
          if (err) return next(err);

          // override the cleartext password with the hashed one
          customer.password = hash;
          next();
      });
  });
});

customerSchema.methods.comparePassword = function(password, cb) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
  });
};

// export du model
module.exports = mongoose.model('customers', customerSchema);