module.exports.iniciaChat = (application, req, res) => {
    
    let dadosForm = req.body;
    
    //validations
    req.assert('apelido','Nome ou apelido é obrigatório').notEmpty();
    req.assert('apelido','Nome ou apelido deve conter entre 3 e 15 caracteres').len(3, 15);

    let errors = req.validationErrors(); //return the errors

    if(errors){
        res.render('index', { validacao: errors });
        return;
    }

    application.get('io')
               .emit('msgParaCliente', 
                        { apelido: dadosForm.apelido,
                          mensagem: ' acabou de logar.',
                          isLogin: true
                         }); //recupero o objeto io do application definido no app.js e emito um msgParaCliente

    res.render('chat');
}