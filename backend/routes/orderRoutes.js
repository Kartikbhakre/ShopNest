const express = require("express");
const {protect} = require("../middleware/authMiddleware.js");
const {admin} = require("../middleware/adminMiddleware.js");
const {createOrder , getOrders , myOrders , updateOrderStatus} = require("../controllers/orderController.js");

const router = express.Router();

router.route('/').post(protect , createOrder).get(protect , admin , getOrders);
router.route('/myOrders').get(protect , myOrders);
router.route('/:id/status').put(protect , admin , updateOrderStatus);

module.exports = router ;
