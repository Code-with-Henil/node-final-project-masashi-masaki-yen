# Final Project - NodeJS - Interview Scheduler

## Description

Interview Scheduler is a single page application (SPA) built with React that allows users to book, edit and cancel interviews.

Data is persisted by the API server using a PostgreSQL / Mongo DB.

The client application communicates with an API server over HTTP, using the JSON format.

## Entities

-   Appointment

-   Day

-   Interview

-   Interviewer

-   Available Interviewer

## Goals

-   Create ERD diagram
-   Create a schema + database using PostgreSQL / Create your database using Mongo DB
-   Build an API server with Node/Express
-   Build the communication between React app and API server over HTTP, using the JSON format

## Bonus

-   Use WebSockets to build a realtime experience.
-   Implement user authentication.

## Plan ahead

-   Before you start coding, you need to prepare a few things:

    -   Understand what data you need to store in the database
    -   Create an ERD diagram (Use [draw.io](https://www.draw.io/) and add it to your presentation)
    -   Decide what routes you need to create in the API server
    -   Understand what data you need to fetch from the API server
    -   Investigate how components will communicate with each other
    -   Investigate where you should make the API calls and where you should store the data

## Game plan

With this information, you can present to the instructor and, if approved, you can start coding.

For the database, you need to:

-   Create a database
-   Create the schema
-   Seed the database (You can create it manually)

For the API server, you need to:

-   Create the routes
-   Create the controllers
-   Create the queries

For the client, you need to:

-   Create the API requests to fetch the data from the API server
-   Create socket.io connection to update the data in real time

## Project Setup

-   You will have to install a few dependencies to begin with.
-   `cd frontend` and then `npm install` to install the Frontend NPM Modules.
-   `cd backend` and then `npm install` to install the Frontend NPM Modules.
-   From Project Root: `npm run server` will spin up the backend server.
-   From Project Root: `npm run client` will spin up the frontend react app.
-   From Project Root: `npm run dev` will spin up both the backend & frontend.

## Resources

-   [Draw.io](https://www.draw.io/)
-   [PostgreSQL](https://www.postgresql.org/)
-   [Node.js](https://nodejs.org/en/)
-   [Express](https://expressjs.com/)
-   [React](https://reactjs.org/)
-   [Socket.io](https://socket.io/)
