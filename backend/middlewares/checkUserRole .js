// backend/middleware/checkUserRole.js
const checkUserRole = (role) => {
    return (req, res, next) => {
      // Assuming roles are stored in req.user.role
      if (req.user && req.user.role && req.user.role === role) {
        next(); // User has the required role, continue to the next middleware or route handler
      } else {
        res.status(403).json({ message: 'Permission denied' });
      }
    };
  };
  
  module.exports = {checkUserRole};
  