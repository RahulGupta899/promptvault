import mongoose from 'mongoose';

// Track the connection (if already connected)
let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    if (isConnected) {
        console.log(`MongoDB is already connected.`);
        return;
    }
    // Else if not connected
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: 'share_prompt',
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        isConnected = true;
        console.log('MongoDB connected successfully...');
    }
    catch (err) {
        console.log('MongoDB connection failed...')
        console.log(err);
    }

}