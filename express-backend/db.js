require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(' MongoDB connected');
  } catch (err) {
    console.error(' Failed to connect to MongoDB', err);
  }
};

module.exports = connectDB;
