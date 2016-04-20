var dataModel = require('../modelos/datos');
/* GET home page */
module.exports.index = function(req, res){
res.render('index', { title: 'Express' });
};
module.exports.pagina = function(req, res){
res.render('pagina', { title: 'Express' });
};

module.exports.select=function(req, res)
{
    dataModel.getProductos(function(error, data)
    {
        if (typeof data !== 'undefined')
        {
            var text=" ";
            for(i=0;i<data.length;i++)
            {
                text+=data[i].nombre+"\n";
            }
            res.render('pagina',{ 
                title : 'Productos ',datos:text,tamanio:data.length,productos:data
                });
        }
        //en otro caso mostramos un error
        else
        {
            res.json(404,{"msg":"notExist"});
        }
    });
};