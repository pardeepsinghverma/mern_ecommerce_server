const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/user');




//register
const registerUser = async (req, res) => {
    const {
        username,
        email,
        password,
        role
    } = req.body;
    const HashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
        username,
        email,
        password: HashedPassword,
    });

    await newUser.save();
    res.status(200).json({
        success: true,
        message: 'User created successfully',
        data: newUser
    });

    try {

    }  catch (err) {
        console.log(err);
        res.status(400).json({
            success: false,
            message: 'An error occurred',
            error: err
        });
    }
}



//login
const login = async (req, res) => {
    const {
        username,
        password,
    } = req.body;

    try {

    }  catch (err) {
        console.log(err);
        res.status(400).json({
            success: false,
            message: 'An error occurred',
            error: err
        });
    }
}



//logout



//auth-middleware



module.exports = {
    registerUser,
}