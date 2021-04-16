const jwt = require("jsonwebtoken");
const protect = (req, res, next) => {
    const token = req.header("authorization")
    if (!token) return res.status(403).send("un authorize access")


    const varified_token = jwt.varify(token, process.env.SCRETE_CODE)
    req.user = varfy_token
    next()
}
module.exports = protect;