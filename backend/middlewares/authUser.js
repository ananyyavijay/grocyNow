import jwt from "jsonwebtoken"

export const authUser = (req, res, next) => {
    //checks if user is already log in or not
    const {token} = req.cookies;
        if(!token) {
            return res
            .status(401)
            .json({
                message: "Unauthorized", 
                success: false
            });
        }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.id; //fetch user id from token and attach user id to request
        next();
    } catch (error) {
        console
        .error("Error in authUser middleware:", error);
    return res
        .status(401)
        .json({ message: "Invalid token", success: false });
    }
}
