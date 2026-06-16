const axios = require('axios');

exports.findAll = async (req, res) => {
    try {
        const externalUrl = 'https://everience-admin-ggdtbxd7bqf6gsb2.westeurope-01.azurewebsites.net/api/getusers';
        const response = await axios.get(externalUrl);
        
        const datiGrezzi = response.data;

        const risorseFormattate = datiGrezzi.map((user, index) => {
            return {
                id: user.id || String(index + 1),
                nome: user.displayName || user.name || 'Dipendente Aziendale',
                lat: user.lat || 45.4642, 
                lng: user.lng || 9.1900
            };
        });

        res.status(200).json({
            success: true,
            data: risorseFormattate
        });

    } catch (error) {
        console.error('Errore integrazione endpoint esterno:', error.message);
        res.status(500).json({
            success: false,
            error: { 
                code: 'INTEGRATION_ERROR', 
                message: 'Impossibile recuperare i dati dall\'endpoint aziendale esterno.' 
            }
        });
    }
};