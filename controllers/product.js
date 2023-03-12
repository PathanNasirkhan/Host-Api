const Product = require("../models/product");

const getAllProducts = async (req,res)=>{

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;
    let skip = (page - 1)*limit;
    
    const {category, name, language, sort, select} =req.query;
    const queryObject = {};

    if(category){
        queryObject.category = { $regex: category, $options: "action, drama, comedy, romentic, historical"};
    }
    if(name){
        queryObject.name = name;
    }
    if(language){
        queryObject.language = { $regex: language, $options: "hindi, gujrati, english"};
    }
    
    let apiData = Product.find(queryObject);

    if(sort){
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }

    if(select){
        // let selectFix = select.replace(",", " ");
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    apiData = apiData.skip(skip).limit(limit);

    const myProducts = await apiData;
    res.status(200).json({myProducts, nbHits: myProducts.length});
};
const getAllProductsTesting = async (req,res)=>{
    const myProducts = await Product.find(req.query);
    res.status(200).json({myProducts});
};

module.exports = {getAllProducts,getAllProductsTesting};