const mongoose = require('mongoose');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    ime: {
        type:String,
        required:true,
        minlength:2,
        maxlength:50
    },
    prezime: {
        type:String,
        required:true,
        minlength:2,
        maxlength:50
    },
    email: {
        type:String,
        required:true,
        minlength:5,
        maxlength:255,
        unique:true
    },
    lozinka: {
        type:String,
        required:true,
        minlength:5,
        maxlength:1024
    },
    datumUclanjenja: {
        type:Date,
        default:Date.now
    },
    rezervacije: {
        type: [mongoose.Schema.Types.ObjectId],
        ref:'Book',
        validate: [arrayLimit, 'Exceeds the limit of 5']
    },
    polica: {
        type: [mongoose.Schema.Types.ObjectId],
        ref:'Book'
    },
    isAdmin: {
        type: Boolean,
        default:false
    }
})

// Validacija za rezervacije

function arrayLimit(val) {
    return val.length<=5;
}

// Hashovanje lozinke
userSchema.pre('save', async function (next) {
    if (!this.isModified('lozinka')) {
        return next(); 
    }
    const salt = await bcrypt.genSalt(10);
    this.lozinka = await bcrypt.hash(this.lozinka, salt);
    next();
});

// Kreiranje tokena 
userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id, isAdmin:this.isAdmin},config.get('jwtPrivateKey'));
    return token;
}

// Validacija korisnickih podataka 
function validateUser(user) {
    const schema = Joi.object({
        ime: Joi.string().min(2).max(50).required(),
        prezime: Joi.string().min(2).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        lozinka: Joi.string().min(5).max(1024).required(),
    });
    return schema.validate(user);
}

const User = mongoose.model('User',userSchema);

module.exports = {
    User,
    validateUser
};