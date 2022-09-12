const User = require( "../models/user");
const jwt  = require("jsonwebtoken");


const signup = async (req, res) => {
    const { email, name, password } = req.body;
    try {
        const existUser = await User.findOne({ email }).exec();
        if (existUser) {
            return res.status(400).json({
                message: "User da ton tai"
            })
        } else {
            const user = await new User({ email, name, password }).save();
            res.json({
                user: {
                    _id: user._id,
                    email: user.email,
                    name: user.name
                }
            })
        }
    } catch (error) {

    }
}

const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).exec();
        if (!user) {
            return res.status(400).json({
                message: "User khong ton tai"
            })
        }
        if (!user.authenticate(password)) {
            return res.status(400).json({
                message: "Mat khau khong dung"
            })
        }
        const token = jwt.sign({ _id: user._id }, "123456", { expiresIn: 60 * 60 });
        res.cookie("user", {
            token,
            user: {
                _id: user._id,
                email: user.email,
                name: user.name
            }
        })
        return res.json({
            token,
            user: {
                _id: user._id,
                email: user.email,
                name: user.name
            }
        })
    } catch (error) {

    }

}

const list = async (req, res) => {
    const user = await User.find().exec();
    res.json(user)
}

const edituser = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).exec();
        res.json(user)
    } catch (error) {

    }
}

const removeuser = async (req, res) => {
    try {
        const remove = await User.findOneAndDelete({ _id: req.params.id }).exec()
        res.json(remove)
    } catch (error) {

    }
}

const findone = async (req, res) => {
    try {
        const getone = await User.findOne({ _id: req.params.id }).exec()
        res.json(getone)
    } catch (error) {

    }
}

module.exports = {signin, signup, list, removeuser, findone, edituser}