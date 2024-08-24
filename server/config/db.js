// config/db.js

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://mmmutxyzdb:G3hfKaUBnohOUb1M@cluster0.azfx6av.mongodb.net/Reso?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
