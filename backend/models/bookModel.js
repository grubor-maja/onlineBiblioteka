const mongoose = require('mongoose');
const Joi = require('joi');

const bookSchema = mongoose.Schema({
    naslov: {
        type:String,
        required:true,
        minlength:1,
        maxlength:255
    },
    autor: {
        type:[String],
        required:true,
        minlength:1,
        maxlength:255
    },
    izdavac: {
        type:String,
        required:true,
        minlength:1,
        maxlength:255
    },
    godinaIzdanja: {
        type:Number,
        required:true,
        max: new Date().getFullYear()
    },
    zanr: {
        type:String,
        required:true,
        minlength:2,
        maxlength:50
    },
    isbn: {
        type:String,
        required:true,
        minlength:10,
        maxlength:13,
        unique:true
    },
    signatura: [{
        inventarskiBroj: {
            type:String, 
            required:true,
            unique:true
        },
        status: {
            type:String,
            enum:['slobodan','zauzet'],
            default:'slobodan'
        }
    }],
    fotografija: {
        type:String,
        required:false,
        maxlength:1024
    }
});

function validateBook(book) {
    const schema = Joi.object({
        naslov: Joi.string().min(1).max(255).required(),
        autor: Joi.array().items(Joi.string().min(1).max(255)).required(),
        izdavac: Joi.string().min(1).max(255).required(),
        godinaIzdanja: Joi.number().max(new Date().getFullYear()).required(),
        zanr: Joi.string().min(2).max(50).required(),
        isbn: Joi.string().min(10).max(13).required(),
        signatura: Joi.array().items(Joi.object({
            inventarskiBroj: Joi.string().required(),
            status: Joi.string().valid('slobodan', 'zauzet').required()
        })),
        fotografija:Joi.string()
    
    });

    return schema.validate(book);
}

const Book = mongoose.model('Book',bookSchema);

module.exports = {
    Book,
    validateBook
};