const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
dotenv.config();

const cors = require('cors');

// Route imports

const UserRoutes = require('./routes/UserRoute');
const UploadRoutes = require('./routes/UploadRoute');
const ProductRoutes=require('./routes/ProductRoute');


const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const port = process.env.PORT || 3000;

const app = express();
app.use(express.static('view'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// All routes 

app.use('/api/products',ProductRoutes);
app.use('/api/users', UserRoutes);
app.use('/api/upload', UploadRoutes);


app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
