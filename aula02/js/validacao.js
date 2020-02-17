function validar(){
    console.log('Entrei na funcao validar()');
    // recupera o Nome a partir do FORM formSignUp
    var nome = formSignUp.nome.value;
    console.log('NOME', nome);
    // recupera o EMAIL se eu criar o atributo ID no input
    var email = document.getElementById('email').value;
    console.log('EMAIL', email);
    // recupera a SENHA usando metodo getELEMENTSByName
    // fazendo referencia por meio do INDICE [0] e seu VALOR
    var senha = document.getElementsByName('senha')[0].value;
    console.log('SENHA', senha);
    var confirm_senha = formSignUp.confirm_senha.value;
    console.log('CONFIRM-SENHA', confirm_senha);

    var msgerro = document.getElementById('msg_erro');
    if (nome == ''){
        msgerro.innerHTML = 'Campo NOME é obrigatório!';
        formSignUp.nome.focus();
        return false;
    }
    if(nome.length < 3){
        msgerro.innerHTML = 'Digite o Nome Completo!';
        formSignUp.nome.focus();
        formSignUp.nome.value = '';
        return false;
    }
    if (email == ''){
        msgerro.innerHTML = 'Campo EMAIL é obrigatório!';
        formSignUp.email.focus();
        return false;
    }
    if (senha == ''){
        msgerro.innerHTML = 'Campo SENHA é obrigatório!';
        formSignUp.senha.focus();
        return false;
    }
    if (confirm_senha == ''){
        msgerro.innerHTML = 'Campo CONFIRM-SENHA é obrigatório!';
        formSignUp.confirm_senha.focus();
        return false;
    } 
    if (senha !== confirm_senha){
        msgerro.innerHTML = 'Senhas diferentes!';
        formSignUp.senha.value = '';
        formSignUp.confirm_senha.value = '';
        formSignUp.senha.focus();
        return false;
    }
    msgerro.innerHTML = 'FORMUlÁRIO PREENCHIDO CORRETAMENTE';
}