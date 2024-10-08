const {User, validateUser} = require('../models/userModel');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const {Book} = require('../models/bookModel');

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

    console.log(user);
    console.log(user.lozinka);
    const validPassword = await bcrypt.compare(lozinka, user.lozinka);
    if (!validPassword) {
        return res.status(400).json({
            message: 'Pogresna lozinka',
            providedPassword: lozinka,
            storedPasswordHash: user.lozinka,
            bcryptComparisonResult: validPassword
        });
    }
    const token = user.generateAuthToken();
    res.send(token);
}

exports.getUser = async(req,res) => {
    const user = await User.findById(req.user._id).select('-lozinka');
    res.send(user);
}

exports.addBookToReservations = async(req,res) => {
    try {
        const user = await User.findById(req.user._id);
        if(user.rezervacije.length>=5) {
            return res.status(400).send('Ne mozete rezervisati vise od 5 knjiga.')
        }
        const book = await Book.findById(req.body.bookId);
        if(!book) return res.status(404).send('Knjiga nije pronadjena');

        const slobodnaSignatura = book.signatura.find(sig => sig.status === 'slobodan');
        if(!slobodnaSignatura) {
            return res.status(400).send('Svi primerci ove knjige su zauzeti');

        }
        slobodnaSignatura.status = 'zauzet';

        user.rezervacije.push(book._id);
        await user.save()
        await book.save();
        res.send(user);
    } catch (error) {
        res.status(500).send('Greska na serveru');
    }
};

exports.addBookToShelf = async(req,res) => {
    try {
        const user = await User.findById(req.user._id);
        const book = await Book.findById(req.body.bookId);
        if(!book) return res.status(400).send('Knjiga nije pronadjena');

        if (user.polica.includes(book._id)) {
            return res.status(400).send('Knjiga je vec na Vasoj polici.');
        }
       
        user.polica.push(book._id);
        await user.save();

        res.send(user);
    } catch (error) {
        res.status(500).send('Greska na serveru');
    }
}

exports.removeBookFromShelf = async(req,res) => {
    try {
        const user = await User.findById(req.user._id);
        if(!user) return res.status(404).send('Korisnik nije pronadjen');
        
        const bookIndex = user.polica.indexOf(req.body.bookId);
        if(bookIndex == -1) {
            return res.status(400).send('Knjiga nije pronadjena na polici');
        }
        user.polica.splice(bookIndex,1);
        await user.save();

        res.send(user);
    } catch (error) {
        res.status(500).send('Greska na serveru');
    }
}

exports.removeBookFromReservations = async(req,res) => {
    try {
        const user = await User.findById(req.user._id);
        if(!user) return res.status(404).send('Korisnik nije pronadjen');

        const bookIndex = user.rezervacije.indexOf(req.body.bookId);
        if(bookIndex == -1) {
            return res.status(400).send('Knjiga nije pronadjena u rezervacijama.');
        } 
        user.rezervacije.splice(bookIndex,1);

        const book = await Book.findById(req.body.bookId);
        if(!book) return res.status(404).send('Knjiga nije pronadjena');

        const signatura = book.signatura.find(sig=> sig.status =='zauzet');
        if(signatura) {
            signatura.status = 'slobodan';
            await book.save();
        }

        await user.save();
        res.send(user);
    } catch (error) {
        res.status(500).send('Greska na serveru');
    }
}

exports.getUserShelf = async(req,res) => {
    try {
        const user = await User.findById(req.user._id).populate('polica');
        if(!user) return res.status(404).send('Korisnik nije pronadjen');

        res.send(user.polica);
    } catch (error) {
        res.status(500).send('Greska na serveru prilikom dohvatanja knjiga sa police')
    }
};

exports.getUserReservations = async(req,res) => {
    try {
        const user = await User.findById(req.user._id).populate('rezervacije');
        if(!user) return res.status(404).send('Korisnik nije pronadjen');

        res.send(user.rezervacije);
    } catch (error) {
        res.status(500).send('Greska na serveru prilikom dohvatanja knjiga sa police')
    }
};