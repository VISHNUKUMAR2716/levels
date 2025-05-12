// seed.js
const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect('mongodb://localhost:27017/users', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const seedUsers = [
  { name: 'Alice Johnson', email: 'alice@example.com' },
  { name: 'Bob Smith', email: 'bob@example.com' },
  { name: 'Charlie Brown', email: 'charlie@example.com' },
  { name: 'David Miller', email: 'david@example.com' },
  { name: 'Eve Jackson', email: 'eve@example.com' },
  { name: 'Frank Castle', email: 'frank@example.com' },
  { name: 'Grace Hopper', email: 'grace@example.com' },
  { name: 'Henry Ford', email: 'henry@example.com' },
  { name: 'Isabel Garcia', email: 'isabel@example.com' },
  { name: 'Jack White', email: 'jack@example.com' }
];

User.insertMany(seedUsers)
  .then(() => {
    console.log('Users seeded!');
    mongoose.connection.close();
  })
  .catch(err => console.log(err));
