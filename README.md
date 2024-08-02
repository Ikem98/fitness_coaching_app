Fitness Coaching App


Hello Instructor,

Welcome to our Fitness Coaching App! 

Features:
User registration and login
Workout program creation
Preview of some created workout programs
Dynamic and responsive UI
Technologies We Used Include:
Frontend: React, Axios
Backend: Node.js, Express
Database: MySQL
Styling: CSS


Prerequisites: Very Important

Before running this project, Install the following:

Node.js (npm init)
## https://www.youtube.com/watch?v=3F5IaPqj7ds&ab_channel=DarrenDoesEverything
MySQL
npm 
XAMPP 
## (https://www.youtube.com/watch?v=VCHXCusltqI&list=LL&index=1&ab_channel=GeekyScript)
Setup:
1. Clone the Repository

2. Install all Dependencies
Insure you are i nthe right project directory and install both the front end and back end dependencies:


#  the server directory 
cd server
npm install
npm init

#  the client directory 
npm install
3. Setup MySQL Database  
## (https://www.youtube.com/watch?v=co-xyHRdHRg&ab_channel=AmitThinks)
Using XAMPP, Open MySQL. You will need two databases:
 userdata and workouts.
 
 See the codebelow for the Database Schema
userdata Database Schema
sql

CREATE DATABASE userdata;



CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

Now for the 

\workouts Database Schema
sql

CREATE DATABASE workouts;



CREATE TABLE workouts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  duration INT NOT NULL,
  difficulty VARCHAR(50) NOT NULL
);

## The actual input will look diffeent depending on the db you are using.

4. Run the Server
cd server
node index.js
5. Run the Frontend
In a new Terminal:

cd client
npm start