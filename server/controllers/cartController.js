import User from "../models/User.js"

export const updateCart = async (req , res) => {
    try{
        const {cartItems,userId} = req.body;
        await User.findByIdAndUpdate(userId, {cartItems});
        return res.json({success:true , message: "Cart Updated"});
    }
    catch (error) {
        return res.json({success:false , message: error.message});
    }
}