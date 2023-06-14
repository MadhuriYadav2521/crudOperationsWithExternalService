import express from "express";
import { checksForRegister, sellerMiddleware } from "../middlewares/authMiddleware.js";
import { register } from "../controllers/userController.js";
import { addPrduct, deleteProduct, getAllCategories, getAllProducts, getPoductById, getProductByLimit } from "../controllers/productController.js";


var router = express.Router();

router.post('/register',checksForRegister,register);
router.post('/addPrduct',sellerMiddleware,addPrduct);
router.get('/getAllProducts',getAllProducts);
router.get('/getPoductById',getPoductById);
router.get('/getProductByLimit',getProductByLimit);
router.get('/getAllCategories',getAllCategories);
router.delete('/deleteProduct',deleteProduct);


// deleteProduct
export default router;