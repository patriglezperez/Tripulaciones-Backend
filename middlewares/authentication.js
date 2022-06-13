const firebase = require('../utils/firebase');

const getAuthToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    req.token = token;
    next();
  } else {
    res.status(403).json({
      status: 'error',
      error: 'No token provided',
    });
  }
}

const verifyToken = (req, res, next) => {
 
  getAuthToken(req,res, async ()=>{
    const decodedToken = await firebase.auth().verifyIdToken(req.token);
    req.user = decodedToken;
    next();
  })
}


module.exports = verifyToken;