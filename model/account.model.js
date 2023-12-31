const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const accountSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    fullname: {
      type: String,
      require: true,
    },
    dob: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
  },
  {
    versionKey: false,
  },
);

accountSchema.pre('save', function(next){
    const account = this;
    if(account.password){
        account.password = bcryptjs.hashSync(
            account.password,
            10,
        );
    }
    next();
})
module.exports = mongoose.model('account', accountSchema);
