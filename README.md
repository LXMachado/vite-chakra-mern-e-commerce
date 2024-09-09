# MERN E-Commerce App

This is a full-stack e-commerce application built using the **MERN stack** (MongoDB, Express, React, Node.js) with **Vite** for the front-end development environment and **Chakra UI** for the component styling. The application includes features such as product management (create, read, update, and delete), and is designed to be modular and scalable.

## Features

- **Front-End**: Built with React, using Vite for fast development and Chakra UI for responsive, accessible components.
- **Back-End**: REST API built with Express.js and MongoDB for data storage, connected using Mongoose.
- **Full CRUD Operations**: Supports full product management — add, update, delete, and fetch products.
- **Environment Variables**: The server is configured to use environment variables for configurations like the database URI and server port.

## Technologies Used

- **Front-End**: 
  - Vite (Development environment)
  - React
  - Chakra UI (Component library)

- **Back-End**:
  - Express.js (Server)
  - MongoDB (Database)
  - Mongoose (ODM)
  
- **Other Tools**:
  - Nodemon (for development)
  - dotenv (for managing environment variables)
  - Git (Version control)

## Setup Instructions

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (at least version 12.x)
- [MongoDB](https://www.mongodb.com/) (or a cloud-based instance like MongoDB Atlas)
- [Git](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/LXMachado/vite-chakra-mern-e-commerce.git
cd vite-chakra-mern-e-commerce
2. Install Dependencies
Navigate to both the backend and frontend folders and install the dependencies for both the server and client.

bash
Copy code
# Install server dependencies
cd backend
npm install

# Install client dependencies
cd ../frontend
npm install
3. Set Up Environment Variables
Create a .env file in the backend directory and add the following variables:

makefile
Copy code
MONGO_URI=<Your MongoDB URI>
PORT=5000
NODE_ENV=development
Replace <Your MongoDB URI> with your MongoDB connection string.
4. Running the Application
To start both the front-end and back-end development servers:

bash
Copy code
# Start the backend server
cd backend
npm run dev

# Start the front-end server (in another terminal)
cd ../frontend
npm run dev
The front-end will be running at http://localhost:3000.
The back-end will be running at http://localhost:5000.
5. Build for Production
To build the front-end for production, run the following:

bash
Copy code
cd frontend
npm run build
This will create a dist folder with the production build of your front-end.

6. Deployment
Ensure you have both the front-end and back-end hosted on platforms like Netlify/Vercel (for front-end) and Heroku or similar services (for back-end).

7. Git Usage
To push your code to GitHub:

bash
Copy code
git add .
git commit -m "Initial commit"
git push origin main
API Endpoints
The back-end provides several API endpoints to manage the products:

GET /api/products: Fetch all products
POST /api/products: Create a new product
PUT /api/products/:id: Update an existing product
DELETE /api/products/:id: Delete a product
Example Request
Here is an example of creating a new product:

bash
Copy code
POST /api/products
Content-Type: application/json

{
  "name": "Sample Product",
  "price": 99.99,
  "image": "http://example.com/image.jpg"
}
Folder Structure
bash
Copy code
/backend
  /config      # Contains db.js for database connection
  /controllers # Product controller logic
  /models      # Mongoose models
  /routes      # API routes for products
  server.js    # Entry point for the back-end server

/frontend
  /src
    /components  # Reusable UI components
    /pages       # Front-end pages
  vite.config.js # Vite configuration
License
This project is licensed under the MIT License. See the LICENSE file for more details.

markdown
Copy code

### What This README Covers:
- **Introduction** to your project and technologies.
- **Setup instructions** for cloning, installing, and running the app.
- **API endpoints** available in the back-end.
- **Folder structure** for an overview of the project layout.
- **Deployment instructions** for building and deploying the app.

Let me know if you'd like any changes or additional sections!
You said:
can you use a DATA.js file to seed a mongoDB database?
ChatGPT said:
ChatGPT
Yes, you can use a data.js file to seed your MongoDB database with initial data. In this case, you can create a script that imports data into MongoDB using Mongoose.

Steps to Seed a MongoDB Database with a data.js File:
Create a data.js file with the seed data.
Write a seeding script that inserts the data into MongoDB.
Run the script to populate your database.
Example: Seeding Data with a data.js File
1. Create data.js (Seed Data)
First, create a data.js file that contains sample product data:

js
Copy code
// data.js

const products = [
  {
    name: "Sample Product 1",
    price: 29.99,
    image: "http://example.com/image1.jpg",
  },
  {
    name: "Sample Product 2",
    price: 49.99,
    image: "http://example.com/image2.jpg",
  },
  {
    name: "Sample Product 3",
    price: 19.99,
    image: "http://example.com/image3.jpg",
  },
];

export default products;
2. Create seed.js (Seeding Script)
Next, create a seed.js file to handle the seeding process by inserting the data into MongoDB:

js
Copy code
// seed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/product.model.js"; // Your Product model
import products from "./data.js"; // Import seed data
import { connectDB } from "./config/db.js"; // Database connection

dotenv.config();

// Connect to MongoDB
connectDB();

const seedData = async () => {
  try {
    // Clear existing data in the products collection
    await Product.deleteMany();

    // Insert new data
    await Product.insertMany(products);

    console.log("Data successfully seeded!");
    process.exit(); // Exit after successful seeding
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1); // Exit with failure
  }
};

seedData();
3. Run the Seed Script
Now, you can run the seed script using Node to populate your MongoDB database with the product data:

bash
Copy code
node seed.js
This will:

Connect to your MongoDB database.
Delete any existing products in the collection.
Insert the new products from data.js.
Folder Structure:
bash
Copy code
/backend
  /config
    db.js           // Database connection
  /data.js          // Seed data
  /seed.js          // Seed script
  /models
    product.model.js // Mongoose Product model
  /controllers
  /routes
server.js
