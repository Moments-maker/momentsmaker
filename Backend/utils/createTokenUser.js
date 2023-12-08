const createTokenUser = (user) => {
  return { name: user.name, userId: user._id, role: user.role,token : user.token};
};

module.exports = createTokenUser;
