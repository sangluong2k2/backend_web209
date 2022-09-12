const Product = require("../models/products")
const slugify = require("slugify");

const list = async (req, res) => {
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
const detail = async (req,res) => {
    try {
        const products = await Product.findOne({slug : req.params.slug}).exec();
        res.json(products)
    } catch (error) {
        res.status(400).json({
            message: "Show sản phẩm không thành công"
        })
    }
    
};
const add = async (req, res) => {
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
const remove = async (req,res) => {
    try {
        const products = await Product.findOneAndDelete({_id : req.params.id}).exec();
        res.json(products)
    } catch (error) {
        res.status(400).json({
            message: "Xóa sản phẩm không thành công"
        })
    }
};
const updated = async (req,res) => {
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

const search = async (req, res) => {
    try {
        const keySearch = req.query.q ? req.query.q : "";
        const product = await Product.find({$text: {$search: keySearch}}).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Lỗi"
        })
    }
}

module.exports = {list, detail, search, add, updated,remove}