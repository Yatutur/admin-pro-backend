const mongoose = require('mongoose');

const dbConnection = async() => {

  try {
    await mongoose.connect(process.env.DB_CNN);

    console.log('DB online');
  } catch (error) {
    throw new Error('Error when trying to initialize database.');
  }

}

module.exports = {
  dbConnection
}