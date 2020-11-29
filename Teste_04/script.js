

function logar(){
    let userLogin = document.getElementById('login')
    let userPass = document.getElementById('senha')

    if (userLogin.value == "joao" && userPass.value == 1234){
        alert('Logado')
        
    }  else {
        alert('Acesso Negado')
    }
}



