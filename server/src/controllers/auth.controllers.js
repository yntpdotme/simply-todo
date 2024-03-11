import {User} from '../models/index.js';
import {ApiError, ApiResponse, asyncHandler} from '../utils/index.js';
import {ValidateRegister} from '../validators/index.js';

const registerUser = asyncHandler(async (req, res) => {
  const {error} = ValidateRegister(req.body);
  if (error) throw new ApiError(400, error.issues[0].message, []);

  const {name, email, password} = req.body;

  let user = await User.findOne({email});
  if (user) throw new ApiError(409, 'User with email already exists', []);

  user = await User.create({
    name,
    email,
    password,
  });

  const accessToken = user.generateAccessToken();

  // get the user document ignoring the password and __v field
  const createdUser = await User.findById(user._id).select('-password -__v');

  if (!createdUser)
    throw new ApiError(500, 'Something went wrong while registering the user');

  return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        {user: createdUser, accessToken},
        'User registered successfully'
      )
    );
});

export {registerUser};
