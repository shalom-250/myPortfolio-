# Getting Started

This guide will help you get the Shalom Dev Portfolio up and running on your local machine.

## Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.0 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation Steps

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd MyPortfolio
   ```

2. **Navigate to the Client Directory**
   The main application is located in the `client` folder.
   ```bash
   cd client
   ```

3. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Run the Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **View the Application**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Environment Variables
Currently, the portfolio does not require any external environment variables for the basic frontend. If you integrate a CMS or Backend later, you should create a `.env.local` file in the `client` directory.

## Build for Production
To create an optimized production build:
```bash
npm run build
npm run start
```
