
# Notes App

A simple notes application built with Node.js and Express.js. This app allows users to create, read, update, and delete notes.

## Features

- User authentication using Google OAuth 2.0
- Create, update, and delete notes
- Store notes in a MongoDB database
- Responsive design with EJS templates

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd notes-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:

   ```env
   MONGODB_URI=<your-mongodb-uri>
   SESSION_SECRET=<your-session-secret>
   GOOGLE_CLIENT_ID=<your-google-client-id>
   GOOGLE_CLIENT_SECRET=<your-google-client-secret>
   ```

4. Start the application:

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

## Dependencies

- `connect-mongo`: MongoDB session store for Express
- `dotenv`: Loads environment variables from a `.env` file
- `ejs`: Embedded JavaScript templating engine
- `express`: Web framework for Node.js
- `express-ejs-layouts`: EJS layout support for Express
- `express-session`: Session management for Express
- `method-override`: Allows HTTP methods like PUT and DELETE
- `mongoose`: MongoDB object modeling tool
- `passport`: Authentication middleware for Node.js
- `passport-google-oauth20`: Google OAuth 2.0 strategy for Passport

## Contributing

Feel free to open issues or submit pull requests to contribute to the project. Please ensure your contributions adhere to the project's coding style and standards.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Author

[Rabindra Kumar Meher] - [rabindrameher116@gmail.com]

