# Mavarick-Backend-Assignment

This is the backend for the mavarick-assignment project, built with Node.js, Express, and Mongoose.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Features](#features)
- [Usage](#usage)
- [Notes](#notes)


## Installation
 
### Prerequisites

- Node.js 
- npm 
- MongoDB

### Steps
1. Clone the repository:

```bash
git clone https://github.com/Himanshidabral/mavarick_backend_assignment.git
cd mavarick_backend_assignment



2. Install dependencies:

npm install


3. Configuration
Create a .env file in the root of the project 
paste the variables that has been shared in mail in form of env doc
Example of .env file 
NODE_ENV=development
PORT=3000
JWT_SECRET=xxxxxxx
MONGO_URI='xxxxxxx

4.Running the Application
Development
To start the application in development mode:

bash
Copy code
npm run start:dev
This will start the server with nodemon for auto-reloading.


## Project Overview

### Introduction
This document provides an overview of a Node.js backend project organized into two main modules: Products Module and Dashboard Module. The project is designed to support product management with CRUD operations and to provide data for visualization through graphs.

### Project Structure
The Node.js backend project is structured into two primary modules, each serving a distinct purpose:

1. Products Module
The Products Module is responsible for handling CRUD operations related to products. This module includes endpoints for managing product data and interacts with the database to perform various operations.
Features
1. Create Product: Endpoint to add new product details.
2. Read Products: Endpoint to retrieve a list of all products.
3. Update Product: Endpoint to modify existing product details.
4. Delete Product: Endpoint to remove a product from the system.

Key Components
Controllers:
ProductController: Manages HTTP requests and responses for product-related operations.
Services:
ProductService: Contains business logic and interacts with the database to manage product data.
Interfaces:
ProductInterface: Defines the structure of the product data model.

2. Dashboard Module
The Dashboard Module provides data for various charts used in the frontend. It includes endpoints to fetch data required for visualization, such as sales metrics and trends.

Features
Fetch Chart Data: Endpoints to retrieve data for charts including sales by category, monthly revenue, and yearly sales trends. 
  - Description: Fetches static data for each chart. 

Key Components
Controllers:
DashboardController: Handles requests for dashboard data and returns the necessary information.
Services:
DashboardService: Fetches and processes data for chart visualizations.
Interfaces:
ChartDataInterface: Specifies the format for chart data returned by the API.


3.Category and Vendor 
1.Fetch Category list and Vendor list
2.Vendor list will be fetched based on category list 

## Usage

- The server will start on `http://localhost:3000`.
- Use the provided API endpoints to interact with the backend.

## Notes

- Ensure you have Node.js and TypeScript installed.
- For any issues, please refer to the project documentation or raise an issue on the repository.









