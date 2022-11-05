const Router = require("express");
const router = new Router();
const shopController = require("../controllers/shopController");
const productController = require("../controllers/productController");
const basketController = require("../controllers/basketController");
const orderController = require("../controllers/orderController");
const authController = require("../controllers/authController");

router.get("/shop-list", shopController.getShops);
router.get("/shop-list/:shop", shopController.getCategories);
router.get("/shop-list/:shop/:category/:product", productController.getProductInfo);

router.get("/basket", basketController.getBasket);
router.post("/basket/add", basketController.addProduct);
router.post("/basket/delete", basketController.deleteProduct);
router.get("/basket/delete-all", basketController.deleteAllProducts);
router.post("/basket/update", basketController.updateBasket);
router.post("/basket/inc", basketController.incProduct);
router.post("/basket/dec", basketController.decProduct);

router.get("/order", orderController.getOrders);
router.post("/order", orderController.createOrder);

router.post("/login", authController.login);
router.post("/registration", authController.registration);
router.post("/logout", authController.logout);
router.get("/refresh", authController.refresh);

module.exports = router;
