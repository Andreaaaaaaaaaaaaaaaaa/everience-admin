const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = { 
        id: '123', 
        email: email, 
        ruolo: 'admin' 
    };

    const payload = {
        userId: user.id,
        email: user.email,
        ruolo: user.ruolo
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { 
        expiresIn: '8h' });

    res.status(200).json({
        success: true,
        data: {
            token,
            user: payload
        }
    });
};