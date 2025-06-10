import jwt from 'jsonwebtoken';

const authUser = (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) return res.json({ success: false, message: 'Not authorized' });

    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    if (!tokenDecode.id) return res.json({ success: false, message: 'Not authorized' });
    req.user = { id: tokenDecode.id };  // Attach user info here (you can attach more)

    next();
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export default authUser;
