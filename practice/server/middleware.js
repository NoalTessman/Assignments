const logget = (req, res, next) =>{
    req.thing = "What";
    next();
}

module.exports = logget;