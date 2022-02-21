const db = require('../data/models');
const { Op } = require("sequelize");


 async function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.email;
    let userFromCookie = ''

    if(userFromCookie){
        await db.User.findOne({
            where:{
               email:{[Op.like]:emailInCookie}
           }}).then(req.session.userLogged = userFromCookie)
    }

    if (req.session.userLogged) {
        res.locals.isLogged = true;
        // res.locals.isLogged = req.session.isLogged;
        res.locals.userLogged = req.session.userLogged;
    } 

    next();

}

module.exports = userLoggedMiddleware;