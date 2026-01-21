const userModel = require('../models/usermodel'); 
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken'); 

module.exports.authUser= async ( req , res , next) =>{

    const token = req.cookies.token || req.headers.authorization?.split( ' ')[ 1 ];
    if(!token){
        return res.status(401).json( { message: 'Unauthorized'}); 
    } 
   // It is a check required , if a token is blocked but saved in local storage 
    const isBlackListed = await userModel.findOne( { token:token } );

    if(isBlackListed){
        return res.status(401).json( { message: 'Unauthorized'}); 
    }

    // Now if token found , then have to decode or decrypt 
    try {
       const decoded = jwt.verify(token,process.env.JWT_SECRET); 
       const user = await userModel.findById(decoded._id)

       req.user = user ; 

       return next(); 



    } catch(err){
        return res.status(401).json( { message: 'Unauthorized'}); 
    }


}