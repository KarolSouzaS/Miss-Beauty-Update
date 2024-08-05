const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Nome: { type: String, required: true },
    cpf: { type: String, required: true },
    birthDate: { type: Date, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;

