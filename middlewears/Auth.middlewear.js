const jwt =require("jsonwebtoken")
require('dotenv').config()



const AuthCheck = async(req, res, next)=>{
try {
    const token = req.headers.authorization.split(" ")[1];
    if(token){
        const decoded = await jwt.verify(token, process.env.ACCESS_KEY);
        req.body.uerid = decoded.userid
        next()
    }else{
        return res.status(400).json({
            error:true,
            message:"Token not found"
        })
    }
    
} catch (error) {
    console.log(error.message);
    res.status(400).json({
        error:true,
        message:"Authentication faild"
    })
    
}
}


module.exports =AuthCheck