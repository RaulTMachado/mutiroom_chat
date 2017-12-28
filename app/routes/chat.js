module.exports = (application) => {

    application.post('/chat', (req, res) => {
        application.app.controllers.chat.iniciaChat(application, req, res);
    }); //for insert nickname button

    application.get('/chat', (req, res) => {
        application.app.controllers.chat.iniciaChat(application, req, res);
    });
}