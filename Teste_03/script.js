const pizzas = ['Calabresa','Milho com Catupiry', 'Palmito','Calamussa']
function testeArray(args){
    let name = prompt('Qual seu nome ? ');
    if (Array.isArray(args) == false) {
        alert(`${name} o parametro passado esta invalido, tente novamente !`)
    } else {

    for (i in args){
        console.log(args[i]);
        document.writeln(`Seu Array contem este elemento: ${args[i]} <br>` );
    }
}}

testeArray(pizzas)