const userAuth = (req, res, next) => {

    console.log("User Authenticated");

    next();

};

module.exports = userAuth;