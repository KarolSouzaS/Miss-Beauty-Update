const UserService = require('../services/userServices');

exports.register = async (req, res) => {
    const { Nome, cpf, birthDate, email, senha } = req.body;

    if (!Nome || !cpf || !birthDate || !email || !senha) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios!' });
    }

    try {
        const userDTO = { Nome, cpf, birthDate, email, senha };
        const { user } = await UserService.signup(userDTO);
        res.status(201).json({ message: 'Usuário registrado com sucesso!', user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

