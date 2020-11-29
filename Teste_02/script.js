
function alerta(nome){
    const obj = {
        "funcionarios": [
            "Alan",
            "Pedro Correa",
            "Allan Bomba",
            "Russo" ]}
      if(nome >= 4){
          alert("Parametro Invalido")
      }else{
            alert(`O funcionario escolhido foi: ${obj.funcionarios[nome]}`)
      }  
}
alerta(1)