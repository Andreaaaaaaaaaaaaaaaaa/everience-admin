
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors()); 

const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        req.token = bearerHeader.split(' ')[1];
        next();
    } else {
        res.status(401).json({ success: false, error: { code: 'UNAUTHORIZED', message: 'Token mancante' } });
    }
};


app.post('/api/auth/login', (req, res) => {
    
    res.status(200).json({ message: 'Login endpoint' });
});

app.post('/api/auth/logout', verifyToken, (req, res) => {
    res.status(200).json({ message: 'Logout endpoint' });
});


app.get('/api/risorse', verifyToken, (req, res) => {
    res.status(200).json({ data: [] });
});

app.get('/api/risorse/:id/domicilio', verifyToken, (req, res) => {
    res.status(200).json({ lat: 0, lng: 0 });
});


app.post('/api/percorso/calcola', verifyToken, (req, res) => {
    res.status(200).json({ message: 'Calcolo percorso endpoint' });
});

app.get('/api/analytics/token', verifyToken, (req, res) => {
    res.status(200).json({ message: 'Token Power BI' });
});


app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: { code: 'NOT_FOUND', message: 'Risorsa non trovata' }
    });
});

app.listen(PORT, () => {
    console.log(`Server Everience Admin in ascolto sulla porta ${PORT}`);
});