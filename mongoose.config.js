const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/product_manager_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Se estableció conexión con la base de datos"))
    .catch(err => console.log("Hubo un error al conectarse a la base de datos", err));