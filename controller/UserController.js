const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const asycHandler = require('../middleware/asyncHandler');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const { generateToken } = require('../utils/generateToken');
const bcrypt = require('bcryptjs');



//post and public access
exports.authUser = asycHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });

  if (user && await bcrypt.compare(password, user.password)) {
    const token = generateToken(res, user.id);
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});


//post and public access
exports.registerUser = asycHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await prisma.user.findUnique({ where: { email } });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      // Add other fields as necessary
    }
  });

  if (user) {
    generateToken(res, user.id);
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error('Invalid User Data');
  }
});


// POST and Admin access
exports.registerCustomer = asycHandler(async (req, res) => {

  const { name, email, password } = req.body;
  const userExists = await prisma.user.findUnique({ where: { email } });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      isAdmin: false,  // Ensure the customer is never an admin.
      // Add other fields as necessary
    }
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error('Invalid User Data');
  }
});




//post and private access and logout and clear cookie
exports.logoutUser = asycHandler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: 'Logged out successfully' });
});

//get user profile and private access
exports.getUserProfile = asycHandler(async (req, res) => {
  const user = await prisma.user.findUnique({ where: { id: req.user.id } });

  if (user) {
      res.status(200).json({
          _id: user.id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
      });
  } else {
      res.status(404);
      throw new Error('User not found');
  }
});

//put and access private
exports.updateUserProfile = asycHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const updatedUser = await prisma.user.update({
      where: { id: req.user.id },
      data: {
          name: name || undefined,
          email: email || undefined,
          password: password ? await bcrypt.hash(password, 10) : undefined,
      },
  });

  res.status(200).json({
      _id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
  });
});

//private and get and admin
exports.getAllUsers = asycHandler(async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
});

//private and get user by id
exports.getUsersById = asycHandler(async (req, res) => {
  const user = await prisma.user.findUnique({
      where: { id: parseInt(req.params.id) },
      select: {
          id: true,
          name: true,
          email: true,
          isAdmin: true,
          //... add other fields you want to select
      }
  });
  if (user) {
      res.status(200).json(user);
  } else {
      res.status(404);
      throw new Error('User not found');
  }
});

//private and delete and admin delete user/:id
exports.deleteUsers = asycHandler(async (req, res) => {
  const user = await prisma.user.findUnique({ where: { id: parseInt(req.params.id) } });

  if (user) {
      if (user.isAdmin) {
          res.status(400);
          throw new Error('Cannot delete admin user');
      }
      await prisma.user.delete({ where: { id: user.id } });
      res.status(200).json({ message: 'User deleted successfully' });
  } else {
      res.status(404);
      throw new Error('User not found');
  }
});


//private and put and admin update user/:id
exports.updateUsers = asycHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Check if a new password is provided
  const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;

  const updatedUser = await prisma.user.update({
      where: { id: parseInt(req.params.id) },
      data: {
          name: name,
          email: email,
          password: hashedPassword,  // Update password only if provided in the request
          isAdmin: false   // Always set isAdmin to false
      },
  });

  res.status(200).json({
      _id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
  });
});




