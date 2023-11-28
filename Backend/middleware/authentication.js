const CustomError = require('../errors');
const { isTokenValid } = require('../utils');

const authenticateUser = async (req, res, next) => {
  let token;
  if (req.signedCookies.token) {
    token = req.signedCookies.token
  }
  else if (req.headers.authorization) {
    token = req.headers.authorization
  }
  if (!token) {
    throw new CustomError.UnauthenticatedError('Authentication Invalid');
  }

  try {
    const { name, userId, role } = isTokenValid({ token });
    req.user = { name, userId, role };
    next();
  } catch (error) {
    throw new CustomError.UnauthenticatedError('Authentication Invalid');
  }
};

const authorizePermissions = (...roles) => {
  try {
    return (req, res, next) => {
      if (!req.user) {
        const token = req.headers.authorization
        const { role } = isTokenValid({ token });
        if (!roles.includes(role)) {
          throw new CustomError.UnauthorizedError(
            'Unauthorized to access this route'
          );
        }
      }
      else {
        if (!roles.includes(req.user.role)) {
          throw new CustomError.UnauthorizedError(
            'Unauthorized to access this route'
          );
        }
      }
      next();
    };
  } catch (error) {
    throw new CustomError.UnauthenticatedError('Authentication Invalid');
  }

};

module.exports = {
  authenticateUser,
  authorizePermissions,
};
