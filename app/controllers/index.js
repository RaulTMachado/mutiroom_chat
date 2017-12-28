module.exports.home = (application, req, res) => {
    res.render("index", { validacao: {} });
} //exporting a property (application.app.controllers.index.home())