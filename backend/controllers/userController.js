const {User, validateUser} = require('../models/userModel');
const bcrypt = require('bcrypt');
const _ = require('lodash');

exports.registerUser = async(req,res) => {
    const {error} = validateUser(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({email:req.body.email});
    if(user) return res.status(400).send('Korisnik sa ovim email-om vec postoji');

    user = new User(_.pick(req.body,['ime','prezime','email','lozinka','polica','rezervacije']))
    await user.save();

    const token = user.generateAuthToken();
    res.header('x-auth-token',token).send(_.pick(user,['_id','ime','prezime','email']));
    
};

exports.loginUser = async(req,res) => {
    const {email,lozinka} = req.body;

    let user = await User.findOne({email});
    if(!user) return res.status(400).send('Korisnik ne postoji sa datim email-om');

    const validPassowrd = await bcrypt.compare(lozinka,user.lozinka);
    if(!validPassowrd) return res.status(400).send('Pogresna lozinka');

    const token = user.generateAuthToken();
    res.send(token);
}

exports.getUser = async(req,res) => {
    const user = await User.findById(req.user._id).select('-lozinka');
    res.send(user);
}