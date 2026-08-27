const Order = require('../model/Order.js');


const sendEmail = require('../utils/sendEmail.js');

//create a new order

const createOrder = async (req , res)=>{
    try{
        const {items , totalAmount , address , paymentId} = req.body ;
        if(!items || items.length === 0 || !totalAmount || !address){
            return res.status(400).json({message:'Invalid order data'});
        }
        else{
            const order = new Order({
                user:req.user._id,
                items,
                totalAmount,
                address ,
                paymentId
            });
            await order.save();
            const message = `Dear ${req.user.name},\n\nYour order has been created successfully. Your order ID is ${order._id}.\n\nThank you for shopping with us!`;

            await sendEmail(req.user.email , "Order Created",message);
            res.status(201).json({message:'Order created successfully',order});
        }
    }
    catch(error){
        res.status(500).json({message:'Server error',error});
    }
};


const myOrders = async (req , res)=>{
    try{
        const orders = await Order.find({user:req.user._id}).populate(`items.productId`,`name price`);
        res.status(200).json({orders});
    }catch(error){
        res.status(500).json({message:`Error fetching orders`,error});
    }
};

const getOrders = async (req , res)=>{
    try{
        const orders = await Order.find({}).populate('user','id name');
        res.json(orders);
    }catch(error){
        res.status(500).json({message:'error fetching orders',error});
    }
};

const updateOrderStatus = async (req , res)=>{
    try{
        const {status} = req.body;
        const order = await Order.findById(req.params.id);
        if(order){
            order.status = status ,
            await order.save();
            res.json({message:`Order status updated`,order});
        }
        else{
            res.status(404).json({message:'Order not found'});
        }
    }catch(error){
        res.status(500).json({message:`Error updating order status`,error});
    }
}

module.exports = {
    createOrder,
    myOrders,
    getOrders,
    updateOrderStatus
}