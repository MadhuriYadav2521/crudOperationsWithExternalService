import express from "express";
import { checksForRegister, middlewareForAddProduct, middlewareForDeleteProduct, middlewareForGetProduct, middlewareForUpdateProduct } from "../middlewares/authMiddleware.js";
import { register } from "../controllers/userController.js";
import { addPrduct, deleteProduct, getAllProducts, getPoductById, updateProduct } from "../controllers/productController.js";


var router = express.Router();

router.post('/register',checksForRegister,register);
router.post('/addPrduct',middlewareForAddProduct,addPrduct);
router.get('/getAllProducts',middlewareForGetProduct,getAllProducts);
router.get('/getPoductById',getPoductById);
router.put('/updateProduct',middlewareForUpdateProduct,updateProduct);
router.delete('/deleteProduct',middlewareForDeleteProduct,deleteProduct);


// deleteProduct
export default router;