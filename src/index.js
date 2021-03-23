const app = require('./app');


async function main() {
    await app.listen(app.get('port'));
    console.log('Servidor escuchando en el puerto: ', app.get('port'));
}


main();


 