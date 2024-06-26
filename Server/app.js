const express = require('express');
const cors = require('cors'); // Import the cors library
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors()); // Use the cors middleware

app.use('/customers', require('./Customers/routes/userRoutes'));
app.use('/owners', require('./Owners/routes/userRoutes'));

app.listen(3000, () => {
  console.log('Server is running on port 3000...');
});
