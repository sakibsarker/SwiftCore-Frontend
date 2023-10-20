const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const asyncHandler = require('./asyncHandler');

const prisma = new PrismaClient();

// Middleware to protect routes
const protect = asyncHandler(async (req, res, next) => {
    let token;

    // Read JWT from cookies
    token = req.cookies.jwt;

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Retrieve user from the database using Prisma
            req.user = await prisma.user.findUnique({
                where: { id: decoded.userId },
                select: {
                    password: false, // Exclude the password from the result
                    id: true,
                    name: true,
                    email: true,
                    isAdmin: true,
                    // Add or remove fields as needed
                }
            });

            next();
        } catch (error) {
            console.error(error);
            res.status(401);
            throw new Error('Not authorized, token failed');
        }
    } else {
        res.status(401);
        throw new Error('Not authorized, no token');
    }
});

// Middleware to check if the user is an admin
const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401);
        throw new Error('Not authorized as an admin');
    }
};

module.exports = { protect, admin };
