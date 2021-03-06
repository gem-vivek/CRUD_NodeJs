const { body, validationResult } = require('express-validator');

app.post('/models/Notes.js',
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({
        min: 6
    }),
    (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        res.status(200).json({
            success: true,
            message: 'Login successful',
        })
    });