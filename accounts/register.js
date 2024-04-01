// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost:3306',
    user: 'root',
    password: 'LOLLYP0P',
    database: 'cslabs'
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

// Register a new user
const registerUser = (username, email, password) => {
    const sql = 'INSERT INTO users (username, email, password) VALUES (username, email, password, phoneNumber)';
    const values = [username, email, password];

    connection.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error registering user:', err);
            return;
        }
        console.log('User registered successfully');
    });
};

// Usage example
registerUser(username, email, password, phoneNumber);

// Close the database connection
connection.end();