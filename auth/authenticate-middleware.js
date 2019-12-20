/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

module.exports = (req, res, next) => {

  const { authorization } = req.headers;

  if (authorization) {
    const secret = process.env.JWT_SECRET || "key";

    jwt.verify(authorization, secret, function(err, decodedToken) {
      if (err) {
        res.status(401).json({ message: "Invalid Token" });
      } else {
        req.token = decodedToken;

        next();
      }
    });
  } else {

  res.status(401).json({ you: 'shall not pass!' });
  }
};
