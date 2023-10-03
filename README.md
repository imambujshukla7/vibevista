### VibeVista

VibeVista is a full-stack social media platform that allows users to connect, share their thoughts, and explore a vibrant community.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Features

- **User Authentication**: Secure user authentication to protect user data.
- **Create and Share Posts**: Users can create posts and share them with the community.
- **Profile Customization**: Personalize your profile with a profile picture, bio, and more.
- **Explore Content**: Discover interesting posts from other users.
- **Responsive Design**: A responsive and user-friendly design that works on various devices.

## Technologies Used

- **Frontend**: React.js, React Router
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Styling**: CSS, Styled-components
- **Dependency Management**: npm
- **Other Tools**: Git, GitHub

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed locally or a cloud-based MongoDB instance.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/imambujshukla7/vibevista.git
   ```

2. Navigate to the project directory:

   ```bash
   cd vibevista
   ```

3. Install dependencies for both the server and the client:

   ```bash
   npm install
   cd client
   npm install
   ```

4. Set up your MongoDB database and update the `mongoURI` in `server/config.js` with your database connection string.

5. Start the development server:

   ```bash
   npm run dev
   ```

   This command will concurrently run the server and the client.

## Usage

- Open your browser and go to `http://localhost:3001` to access the VibeVista platform.
- Sign up for a new account or log in if you already have one.
- Explore the platform, create posts, customize your profile, and connect with other users.

## License

This project is licensed under the [MIT License]
