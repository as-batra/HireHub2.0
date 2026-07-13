import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {  // next is basically used to send to the next route
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                message: "User not authenticated",
                success: false,
            })
        }
        const decode = await jwt.verify(token, process.env.SECRET_KEY);
        if(!decode){
            return res.status(401).json({ 
                message:"Invalid token", //if decode does not happen
                success:false
            })
        };
        req.id = decode.userId;  //if decode happens
        next();   //next route
    } catch (error) {
        console.log(error);
    }
}
export default isAuthenticated;