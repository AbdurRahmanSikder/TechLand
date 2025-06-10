import jwt from "jsonwebtoken";
export const sellerLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({ success: true, message: "Missing details" })
        }
        if (password === process.env.SELLER_PASSWORD && email === process.env.SELLER_EMAIL) {
            const token = jwt.sign({ email }, process.env.SELLER_EMAIL, { expiresIn: '7d' });

            res.cookie('sellerToken', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
                maxAge: 7 * 24 * 60 * 60 * 1000
            })
            return res.json({ success: true, message: 'Logged In' });
        }
        else return res.json({ success: false, message: 'Invalid credentials' });
    }
    catch(error){
        return res.json({success:false , message: error.message});
    }
}

export const isSellerAuth = async (req,res) => {
    try{
        const {email} = req.user;
        // console.log(email);
        return res.json({success:true , email});
    }
    catch(error){
        return res.json({ success:false , message: error.message})
    }
}

export const logout = async (req,res) => {
  try{
    res.clearCookie('sellerToken', {
        httpOnly:true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict'
    });
    return res.json({success:true , message: "Log Out"});
  }
  catch(error){
    return res.json({success:false, message:error.message });
  }
}