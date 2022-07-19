import slugify from "slugify";
import Product from "../models/products";
import Category from "../models/category";


export const create = async (req, res) => {
    req.body.slug = slugify(req.body.name);
    try {
        const category = await new Category(req.body).save()
        res.json(category)
    } catch (error) {
        res.status(400).json({
            message: "Thêm danh mục không thành công"
        })
    }
}
export const list = async (req, res) => { // get all
    try {
        const categories = await Category.find().exec();
        res.json(categories);    
    } catch (error) {
       
    }
}
export const removecate = async (req,res) => { //remove
    try {
        const category = await Category.findOneAndDelete({_id : req.params.id}).exec();
        res.json(category)
    } catch (error) {
        
    }
};
export const read = async (req, res) => { // get all
    try {
        const category = await Category.findOne({slug: req.params.slug}).exec();
        const products = await Product.find({category: category}).populate('category').select('-category').exec()
        console.log('products', products);
        res.json({
            // category,
             products
        });    
    } catch (error) {
        
    }
  }

export const get = async (req, res) => {
    const category = await Category.findOne({_id: req.params.id}).exec();
    res.json(category)}

export const update = async (req, res) => {
    req.body.slug = slugify(req.body.name)
    try {
        const newCate = await Category.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true})
        res.json(newCate)
    } catch (error){
        
    }
}
