exports.findAll = (req, res) => {
    const risorse = [
        { id: '1', nome: 'Collega Frontend', lat: 45.4642, lng: 9.1900 }, 
        { id: '2', nome: 'Responsabile', lat: 45.5285, lng: 9.0400 } 
    ];

    res.status(200).json({ 
        success: true,
        data: risorse
    });
};