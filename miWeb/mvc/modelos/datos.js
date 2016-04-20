//llamamos al paquete mysql que hemos instalado
var mysql = require('mysql'),
//creamos la conexion a nuestra base de datos con los datos de acceso de cada uno
connection = mysql.createConnection(
    { 
        host: 'localhost', 
        user: 'root',  
        password: '', 
        database: 'restaurante'
    }
);
//creamos un objeto para ir almacenando todo lo que necesitemos
var dataModel = {};
//obtenemos todos los usuarios
dataModel.getProductos = function(callback)
{
    if (connection) 
    {
        connection.query('SELECT * FROM productos ORDER BY id', function(error, rows) {
            if(error)
            {
                throw error;
            }
            else
            {
                callback(null, rows);
            }
        });
    }
};
//exportamos el objeto para tenerlo disponible en la zona de rutas
module.exports = dataModel;