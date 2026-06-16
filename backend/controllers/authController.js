const jwt = require('jsonwebtoken');


exports.login = async (req, res) => {
    const { microsoftToken } = req.body;

    try {
        const azureUser = {
            email: "utente@everience.com",
            name: "Nome Dipendente",
            roles: ["admin"]
        };

        if (!azureUser) {
            return res.status(401).json({
                success: false,
                error: { code: 'INVALID_CREDENTIALS', message: 'Autenticazione aziendale fallita.' }
            });
        }

        
        const payload = {
            userId: azureUser.email, 
            email: azureUser.email,
            ruolo: azureUser.roles[0]
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

    } catch (error) {
        res.status(500).json({
            success: false,
            error: { code: 'SERVER_ERROR', message: 'Errore durante la validazione Entra ID.' }
        });
    }
};