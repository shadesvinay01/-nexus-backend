const express = require('express');
const router = express.Router();

// Temporary test route
router.get('/', (req, res) => {
    res.json({ 
        success: true, 
        products: [
            { name: "Test Product 1", description: "This is a test" },
            { name: "Test Product 2", description: "Another test" }
        ] 
    });
});

module.exports = router;
