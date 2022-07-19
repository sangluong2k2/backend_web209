import Product from "../models/products"
import slugify from "slugify";

export const list = async (req, res) => {
    const limitNumber = 20
    const limit = req.query.limit ? +req.query.limit : limitNumber;
    const sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    const order = req.query.order ? req.query.order : 'desc';

    try {
        const products = await Product.find().limit(limit).exec();
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Show sản phẩm không thành công"
        })
    }
    
};
export const detail = async (req,res) => {
    try {
        const products = await Product.findOne({_id : req.params.id}).exec();
        res.json(products)
    } catch (error) {
        res.status(400).json({
            message: "Show sản phẩm không thành công"
        })
    }
    
};
export const add = async (req, res) => {
    req.body.slug = slugify(req.body.name)
    try {
        const products = await new Product(req.body).save();
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Thêm sản phẩm không thành công"
        })
    }
};
export const remove = async (req,res) => {
    try {
        const products = await Product.findOneAndDelete({_id : req.params.id}).exec();
        res.json(products)
    } catch (error) {
        res.status(400).json({
            message: "Xóa sản phẩm không thành công"
        })
    }
};
export const updated = async (req,res) => {
    const condition = {_id: req.params.id};
    const update = req.body;
    const optional = { new : true}
    try {
        const newProduct = await  Product.findOneAndUpdate(condition, update, optional).exec();
        res.json(newProduct)
    } catch (error) {
        res.status(400).json({
            message: "Thêm sản phẩm không thành công"
        })
    }
};