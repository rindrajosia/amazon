import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';

// @desc Auth user && get token
// @route post /api/users/login
// @access public
const authUser = asyncHandler(async(request, response) => {
  const { email, password } = request.body;

  const user = await User.findOne( { email });

  if(user && (await user.matchPassword(password))) {
    response.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.admin,
      token: null,
    })

  } else {
    response.status(401);
    throw new Error('Invalid email or password');
  }
})

export { authUser }
