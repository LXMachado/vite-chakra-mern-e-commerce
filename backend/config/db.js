import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        console.log("DEBUG - Loading MONGO_URI:", process.env.MONGO_URI); // Check if the value is correct

        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is missing in environment variables!");
        }

        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ Error: ${error.message}`);
        process.exit(1);
    }
};
