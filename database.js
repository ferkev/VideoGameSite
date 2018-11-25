//npm modules
const mongoose = require('mongoose');

//connection mongoose
mongoose.connect('mongodb://localhost/VideoGameSite', { useNewUrlParser: true} );

const db = mongoose.connection;

module.exports = () => {

  //connection à la bdd
  db.once('open', () => { console.log('connecté à la bdd!!') });

  //affichage des erreurs en cas de problèmes de connexion
  db.on('error', (error) => { console.log(error) } );

}