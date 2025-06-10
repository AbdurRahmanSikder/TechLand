import jwt from 'jsonwebtoken';

const authSeller = async (req,res,next) => {
    try {
        const {sellerToken} = req.cookies;
        if (!sellerToken) return res.json({ success: false, message: 'No token provided' });

        const tokenDecode =  jwt.verify(sellerToken, process.env.SELLER_EMAIL);
        if (tokenDecode.email)
            req.user = tokenDecode.email;
        else
            return res.json({ success: false, message: 'Not authorized' });
        next();
    }
    catch (error) {
        return res.json({success:false , message: error.message});
    }
}

export default authSeller;