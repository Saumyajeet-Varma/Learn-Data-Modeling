# Data Modelling using Mongoose

A project demonstrating how to code data models using Mongoose in a Node.js application. <br>
**Note:** This project uses Mongoose for defining data models only and it is not connect to a MongoDB database.

## Table of Contents

- [About](#about)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)

## About

This project illustrates the creation and structure of data models in Mongoose. It focuses on defining schemas, understanding data types, and organizing models effectively without implementing CRUD operations or database connectivity.

#### The Repo provides information about
- Mongoose-based data modeling
- Schema definitions

## Technologies

- Node.js
- Express
- Mongoose

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js
- Express
- Mongoose

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Saumyajeet-Varma/Learn-Data-Modeling.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Learn-Data-Modeling
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the application:
   ```bash
   npm start
   ```

## Usage

1. Define your Mongoose models in the `models` folder.
2. Customize and expand the project as needed.

## Example Data Model

```javascript
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
```

