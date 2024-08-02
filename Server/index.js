const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

//  multiple database connections
const dbUserdata = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'userdata',
});

const dbWorkouts = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'workouts',
});

// Connect to both databases
dbUserdata.connect(err => {
  if (err) {
    console.error('Error connecting to userdata database:', err);
    return;
  }
  console.log('Connected to the userdata database.');
});

dbWorkouts.connect(err => {
  if (err) {
    console.error('Error connecting to workouts database:', err);
    return;
  }
  console.log('Connected to the workouts database.');
});

// Starts the server
app.listen(3002, () => {
  console.log('Server is running on port 3002');
});

// Registers a user route
app.post('/register', (req, res) => {
  const sentEmail = req.body.Email;
  const sentPassword = req.body.Password;

  const SQL = 'INSERT INTO users (email, password) VALUES (?, ?)';
  const values = [sentEmail, sentPassword];

  dbUserdata.query(SQL, values, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send({ message: 'User added!' });
    }
  });
});

// Login a user route
app.post('/login', (req, res) => {
  const sentEmail = req.body.Email;
  const sentPassword = req.body.Password;

  const SQL = 'SELECT * FROM users WHERE email = ? AND password = ?';
  const values = [sentEmail, sentPassword];

  dbUserdata.query(SQL, values, (err, results) => {
    if (err) {
      res.status(500).send({ error: 'Database query error' });
    } else if (results.length > 0) {
      res.send(results);
    } else {
      res.status(401).send({ message: "Invalid email or password" });
    }
  });
});

// This checks if user exists
app.post('/checkUser', (req, res) => {
  const sentEmail = req.body.Email;

  const SQL = 'SELECT * FROM users WHERE email = ?';
  const values = [sentEmail];

  dbUserdata.query(SQL, values, (err, results) => {
    if (err) {
      res.status(500).send({ error: 'Database query error' });
    } else if (results.length > 0) {
      res.send({ exists: true });
    } else {
      res.send({ exists: false });
    }
  });
});

// creating a workout
app.post('/createWorkout', (req, res) => {
  const { workoutName, description, duration, difficulty } = req.body;

  const SQL = 'INSERT INTO workouts (name, description, duration, difficulty) VALUES (?, ?, ?, ?)';
  const values = [workoutName, description, duration, difficulty];

  dbWorkouts.query(SQL, values, (err, results) => {
    if (err) {
      console.error('Error inserting workout:', err);
      res.status(500).send(err);
    } else {
      console.log('Workout inserted successfully!');
      res.send({ message: 'Workout created!' });
    }
  });
});

//  gets all workouts
app.get('/getWorkouts', (req, res) => {
  const SQL = 'SELECT * FROM workouts';

  dbWorkouts.query(SQL, (err, results) => {
    if (err) {
      console.error('Error fetching workouts:', err);
      res.status(500).send({ error: 'Database query error' });
    } else {
      res.send(results);
    }
  });
});
