module.exports = (app) => {
    app.get('/noticias', (req, res) => {
        var connection = app.config.dbConnection();
        connection.query('select * from noticias', function (error, result) {
            res.render("noticias/noticias", { noticias: result });
        });
    }); 
};