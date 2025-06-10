import Order from "../models/Order.js";
import Product from "../models/Product.js"

export const placeOrderCOD = async (req, res) => {
    try {
        const { userId, items, address } = req.body;
        
        if (!address || items.length === 0) {
            return res.json({ success: false, message: "Invalid data" })
        }

        let amount = await items.reduce(async (acc, item) => {
            const product = await Product.findById(item.product);
            return (await acc) + product.offerPrice * item.quantity;
        }, 0);
        amount += Math.floor(amount * 0.02);

        await Order.create({
            userId,
            items,
            amount,
            address,
            paymentType: "COD"
        });
        return res.json({ success: true, message: "Order placed successfully" });
    }
    catch (error) {
        return res.json({ success: false, message: error.message });
    }
}

//get orders by userId: /api/order/user
export const getUserOrders = async (req, res) => {
    try {
        const  userId  = req.user.id;
        const orders = await Order.find({
            userId,
            $or: [{ paymentType: "COD" }, { isPaid: true }]
        }).populate("items.product address").sort({ createdAt: -1 });
        return res.json({ success: true, orders });
    }
    catch (error) {
        return res.json({ success: false, message: error.message });
    }
}

//get All orders
export const getAllOrders = async(req, res) => {
    try {
        const orders = await Order.find({
            $or:  [{paymentType: "COD"} , {isPaid: true}]
        }).populate("items.product address").sort({createdAt: -1});
        return res.json({ success: true, orders });

    }
    catch(error){
        return res.json({ success: false, message: error.message });
    }
}