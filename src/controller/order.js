const order = require("../models/order");
const cart = require("../models/cart");

export const listOrder = async (req, res) => {
    const listOrder = await order.find().exec()
    res.json(listOrder)
}

export const listOrderWeb = async (req, res) => {
    const listOrders = await order.find({ user: req.params.user }).exec();
    res.json(listOrders)
}

export const addOrder = async (req, res) => {
    const AddOrder = await new order(req.body).save();
    res.json(AddOrder)
}
export const detailInfo = async (req, res) => {
    const order = await order.findOne({ _id: req.params.id })
    res.json(order)
}

export const listdeltail = async (req, res) => {
    const order = await order.findOne({ _id: req.params.id })
    const cart = await cart.find({ order: order }).populate('order').select('-order').exec()
    res.json(
        //  order,
        cart
    )
}

export const updatenew = async (req, res) => {
    const Updatenew = await cart.updateOne({ user: req.params.user }, Add._id, { new: true }).exec()
    res.json(Updatenew)
}

export const updatestatus = async (req, res) => {
    const Updatestatus = await order.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).exec()
    res.json(Updatestatus)
}