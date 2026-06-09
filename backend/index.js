require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const risorseRoutes = require('./routes/risorseRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:4200'
}));

app.use('/api/auth', authRoutes);
app.use('/api/risorse', risorseRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: { code: 'NOT_FOUND', message: 'Risorsa non trovata' }
  });
});

app.listen(PORT, () => {
  console.log(`Server di Everience Admin attivo sulla porta ${PORT}`);
});