const User = require('../Models/User');
const axios = require('axios');

const SECRET = '';

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();

        res.json({
            users
        });
    } catch(error) {
        console.log(error)
        res.status(400).json(error)
    }
};

exports.create = (req, res) => {
    try {
        const { firstName, lastName, email, phone, recaptchaValue } = req.body;

        axios({url: `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET}&response=${recaptchaValue}`, 
        method: 'POST',
        })
        .then(async ({data}) => {
            console.log(data);
        
            if(data.success) {
                const user = await User.create({
                    firstName,
                    lastName,
                    email,
                    phone
                });
    
                res.json(user);
            } else {
                res.status(400).json({message: 'Recaptcha verification failed!'})
            }
        })
        .catch(error => {
            console.log(error)
            res.status(400).json({message: 'Invalid Recaptcha'})
        })
       

    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}
