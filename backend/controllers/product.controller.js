import Product from "../models/product.model.js"

// add product :/api/product/add-product

export const addProduct = async (req, res) => {
    try {
        const { name, price, offerPrice, description, category } = req.body
        const image = req.files?.map((file) => file.filename);

        if (
        !name ||
        !price ||
        !offerPrice ||
        !description ||
        !category ||
        !image ||
        image.length === 0
        ) {
        return res.status(400).json({
        success: false,
        message: "All fields including images are required",
      });
    }
        await Product.create({
            name, 
            price, 
            offerPrice, 
            description, 
            category,
            image,
        })
        res
        .status(200)
        .json({ message: "Product added successfully", success: true });

    } catch (error) {
        console.error("Error in addProduct:", error);
        return res
        .status(500)
        .json({ 
            success: false, 
            message: "Server error while adding product" 
        });
    }
};

//get product : /api/product/list

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({}).sort({createdAt: -1});
        res
        .status(200)
        .json({ success: true, products });

    } catch (error) {
        console.error("Error in getProduct:", error);
        return res
        .status(500)
        .json({ 
            success: false, 
            message: "Server error while getting product" 
        });
    }
};

//get single product : /api/product/id

export const getProductById = async (req, res) => {
    try {
        const {id} = req.body
        const product = await Product.findById(id);
        if(!product){
            return res
            .status(404)
            .json({
                message: "product not found",
                success: "false"
            })
        }
        res
        .status(200)
        .json({ success: true, product });

    } catch (error) {
        console.error("Error in getProductById:", error);
        return res
        .status(500)
        .json({ 
            success: false, 
            message: "Server error in getting product id" 
        });
    }
};

// change stock : /api/product/stock

export const changeStock = async (req, res) => {
    try {
        const {id, inStock} = req.body
        const product = await Product.findByIdAndUpdate(
        id,
        {inStock},
        {new : true}
        );
        if(!product){
            return res
            .status(404)
            .json({
                message: "product not found",
                success: "false"
            });
        }
        res
        .status(200)
        .json({ success: true, product, message: "Stock updated successfully" });

    } catch (error) {
        console.error("Error in changeStock:", error);
        return res
        .status(500)
        .json({ 
            success: false, 
            message: "Server error in changing stock" 
        });
    }
}