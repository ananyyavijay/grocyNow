import express from "express"
import { 
    sellerAuth, 
    sellerLogin, 
    sellerLogout 
} from "../controllers/seller.controller.js";
import { authSeller } from "../middlewares/authSeller.js";

const router = express.Router();

router.post('/seller-login', sellerLogin)
router.get('/seller-logout', authSeller, sellerLogout)
router.get('/seller-auth', authSeller, sellerAuth)

export default router;