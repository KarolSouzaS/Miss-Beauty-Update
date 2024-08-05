const { check, validationResult } = require('express-validator');

const validateUserSignup = [
    check('Nome')
        .isLength({ min: 3, max: 50 }).withMessage('O nome completo deve ter entre 3 e 50 caracteres')
        .matches(/^[A-Za-z\s]+$/).withMessage('O nome completo deve conter apenas letras e espaços'),

    check('cpf')
        .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/).withMessage('Insira um CPF válido'),

    check('birthDate')
        .matches(/^\d{2}-\d{2}-\d{4}$/).withMessage('A data de nascimento deve estar no formato dd-mm-yyyy'),

    check('email')
        .isEmail().withMessage('Insira um e-mail válido'),

    check('senha')
        .isLength({ min: 6 }).withMessage('A senha deve ter no mínimo 6 caracteres'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    validateUserSignup,
};
