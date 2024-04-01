
// Create a connection to the SQL database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database'
});


function login(usernameOrEmail, password) {
    const query = `SELECT * FROM users WHERE username = ? OR email = ? AND password = ?`;
    connection.query(query, [usernameOrEmail, usernameOrEmail, password], (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
        }

        if (results.length === 0) {
            alert('Invalid username/email or password');
        } else {
            user = results[0];
            // User found and authenticated
            // Redirect the user to the dashboard
            window.location.href = '/accounts/index.html';
        }
    });
}

// Usage example
const usernameOrEmail = "example@example.com";
const password = "password123";

login(usernameOrEmail, password);