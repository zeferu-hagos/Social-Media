const router = require("express").Router();
const bcrypt = require("bcrypt")

const User = require("../models/User")
//REGISTER
router.post('/register', async (req, res) => {
    
    try {

        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        
        //Create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPassword,
        });

        //Save user and responsed
        const user = await newUser.save();
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err);
    }
});

//LOGIN

router.post('/login', async (req, res) => {
    const user =await User.findOne({ email: req.body.email });
    !user && res.status(400).json("user not found");

    const validPassword= await bcrypt.compare(req.body.password, user.password);
    !validPassword && res.status(400).json("wrong password");

    res.status(200).json(user);
})
module.exports = router;