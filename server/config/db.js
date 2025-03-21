import mongoose from "mongoose";

// Function to connect to the MongoDB database
const connectDB = async () => {

    mongoose.connection.on('connected', () => console.log('Database Connected'))

    await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`)

}

export default connectDB



// import mysql from 'mysql2';
// import dotenv from 'dotenv';

// dotenv.config();

// // Create MySQL connection
// const pool = mysql.createPool({
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DATABASE,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0,
// });

// // Promisify the pool for async/await support
// const db = pool.promise();

// export default db;


// import mysql from 'mysql2';
// import dotenv from 'dotenv';

// dotenv.config();

// // Create MySQL connection
// const pool = mysql.createPool({
//     host: process.env.MYSQL_HOST || 'localhost',
//     user: process.env.MYSQL_USER || 'root',
//     password: process.env.MYSQL_PASSWORD || '',
//     database: process.env.MYSQL_DATABASE || 'job_portal',
//     port: process.env.MYSQL_PORT || 3308,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0,
// });

// // Promisify the pool for async/await support
// const db = pool.promise();

// export default db;
