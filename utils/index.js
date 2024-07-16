const jwt = require("jsonwebtoken");

function lockIt(req, res, next){
    console.log("teste");
    if(!req.headers.authorization){
        return res.status(401).send("Token é necessário")
    }
    try {
        let decoded = jwt.verify(req.headers.authorization.split(' ')[1], process.env.SECRET, (err) => {
            if(err){
                return res.status(401).send('Token inválido!');
            }
            console.log(decoded);
            next();
        });

    } catch (error) {
        return {
            status: 401,
            detail: error.message,
            severity: "error"
        }
    }
}

module.exports = {
    lockIt
}