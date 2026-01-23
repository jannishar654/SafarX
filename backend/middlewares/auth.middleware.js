const userModel = require('../models/usermodel');
const blackListTokenModel = require('../models/blackListToken.model'); 
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken'); 
const captainModel = require('../models/captain.model');

module.exports.authUser= async ( req , res , next) =>{

    const token = req.cookies.token || req.headers.authorization?.split( ' ')[ 1 ];
    if(!token){
        return res.status(401).json( { message: 'Unauthorized'}); 
    } 
   // It is a check required , if a token is blocked but saved in local storage 
    const isBlackListed = await blackListTokenModel.findOne( { token:token } );

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

module.exports.authCaptain= async ( req , res , next) =>{
   

    const token = req.cookies.token || req.headers.authorization?.split( ' ')[ 1 ];
   // console.log(token);
    if(!token){
        return res.status(401).json( { message: 'Unauthorized'}); 
    }   

    const isBlackListed = await blackListTokenModel.findOne( { token:token } );
    //console.log(isBlackListed);

    if(isBlackListed){
        return res.status(401).json( { message: 'Unauthorized'}); 
    }

    try {
       const decoded = jwt.verify(token,process.env.JWT_SECRET); 
       console.log(decoded);

       const captain = await captainModel.findById(decoded._id);
       req.captain= captain;  
       return next();      
       } catch(err){

        console.log(err);

        res.status(401).json({ message: 'Unauthorized '}); 


    }
}    