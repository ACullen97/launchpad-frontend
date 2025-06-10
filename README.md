# Evently - events platform

This repository hosts the source code for Evently, a full-stack responsive events platform with google calendar integration.

## Demo

- User Panel: [https://launchpad-frontend-main.onrender.com/)
- Admin Panel: [https://launchpad-frontend-admin.onrender.com/)

## Features

- User Panel
- Admin Panel
- JWT Authentication
- Password Hashing with Bcrypt
- Login/Signup
- Logout
- Create Event
- Manage Events
- REST API
- React Toastify notification panel
  
## Run Locally

Clone the project

```bash
    git clone https://github.com/ACullen97/launchpad-frontend
```
Go to the project directory

```bash
    cd launchpad-frontend
```
Install dependencies (frontend)

```bash
    cd events-fe
    npm install
```
Install dependencies (admin)

```bash
    cd admin
    npm install
```
Install dependencies (backend)

```bash
    cd events-be
    npm install
```
Setup Environment Vaiables

```Make .env file in "backend" folder and store environment Variables
  JWT_SECRET=YOUR_SECRET_TEXT
  SALT=YOUR_SALT_VALUE
  MONGO_URL=YOUR_DATABASE_URL
 ```

Check any urls that end in onrender.com are correct

Start the Backend server

```bash
    nodemon server.js
```
OR

```bash
    npm run server
```

Start the Frontend project

```bash
    npm start

```
OR

```bash
    npm run dev
```

Start the Admin page

```bash
    npm start
```
OR

```bash
    npm run dev
```
## Tech Stack
* [React](https://reactjs.org/)
* [Node.js](https://nodejs.org/en)
* [Express.js](https://expressjs.com/)
* [Mongodb](https://www.mongodb.com/)
* [JWT-Authentication](https://jwt.io/introduction)
* [Multer](https://www.npmjs.com/package/multer)

## Deployment

The application is deployed on Render.

