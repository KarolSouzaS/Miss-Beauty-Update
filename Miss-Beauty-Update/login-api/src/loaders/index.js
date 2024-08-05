const mongooseLoader = require('./mongoose');
const expressLoader = require('./express');

module.exports = async ({ expressApp }) => {
    await mongooseLoader();
    console.log('MongoDB está funcionando!');
    
    await expressLoader({ app: expressApp });
    console.log('Express está funcionando!');
};
