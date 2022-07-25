import cart from "../models/cart";
import order from "../models/order";
import Product from "../models/product";

export const listCart = async (req, res) => {
    try {
        const listCart = await cart.find().exec()
        res.json(listCart)
    } catch (error) {
        
    }
}

export const addCart = async (req, res) => {
    try {
        const addCart = await new cart(req.body).save()
        res.json(addCart)
    } catch (error) {
        
    }
}

export const listCarts = async (req, res) => {
    try {
        const user = await cart.find({user:req.params.user, "order":null}).exec()
        res.json(user)
    } catch (error) {
        
    }
}

export const removeCart = async (req, res) => {
    try {
        const remove = await cart.findByIdAndRemove({_id:req.params.id}).exec()
        res.json(remove)
    } catch (error) {
        
    }
}

export const updateCart = async (req, res) => {
    try {
        const user = await cart.updateMany({user: req.params.user , "order":null}, req.body, {new: true}).exec()
        res.json(user)
    } catch (error) {
        
    }
}