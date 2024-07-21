const { createConnection } = require('../database');

// Fonction pour enregistrer un nouvel utilisateur
exports.registerUser = async (req, res) => {
    const { username, password, access_code } = req.body;

    if (!username || !password || !access_code) {
        return res.status(400).json({ success: false, message: 'Username, password, and access code are required' });
    }

    try {
        const connection = await createConnection();
        const [existingUser] = await connection.execute('SELECT * FROM tbl_61_users WHERE username = ?', [username]);

        if (existingUser.length > 0) {
            connection.end();
            return res.status(400).json({ success: false, message: 'Username already exists' });
        }

        const query = 'INSERT INTO tbl_61_users (username, password, access_code) VALUES (?, ?, ?)';
        await connection.execute(query, [username, password, access_code]);
        connection.end();

        res.json({ success: true, message: 'User registered successfully!' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};