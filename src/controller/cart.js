import cart from "../models/cart";

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

export const updated = async (req,res) => {
    const condition = {_id: req.params.id};
    const update = req.body;
    const optional = { new : true}
    try {
        const newProduct = await  cart.findOneAndUpdate(condition, update, optional).exec();
        res.json(newProduct)
    } catch (error) {
        res.status(400).json({
            message: "Edit không thành công"
        })
    }
};