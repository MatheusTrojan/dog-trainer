dadoTeste= {nome: "teste",
        email: "teste@teste.com",
        telefone: "(99)99999-9999",
        mensagem:  "teste"  
    };

dados = [dadoTeste]

function cadastraMensagem() {
    event.preventDefault()
    let name = document.getElementById("nome-completo").value;
    let mail = document.getElementById("email").value;
    let tel = document.getElementById("telefone").value;
    let msg = document.getElementById("mensagem").value;

    var novoDado = {
        nome: name,
        email: mail,
        telefone: tel,
        mensagem: msg
    }

    dados.push(novoDado);
    console.clear();
    console.log(dados);
    alert("Mensagem enviada com sucesso! Em breve entraremos em contato!") ;
    alert(`Nome: ${dados[1].nome}\n` + `Email: ${dados[1].email}\n` + `Telefone: ${dados[1].telefone}\n` + `Mensagem: ${dados[1].mensagem}`
    ); 
    
    document.getElementById("nome-completo").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("mensagem").value = "";
}

function mascara(telefone){ 
    if(telefone.value.length == 1)
        telefone.value = '(' + telefone.value; //quando começamos a digitar, o script irá inserir um parênteses no começo do campo.
    if(telefone.value.length == 3)
        telefone.value = telefone.value + ') '; //quando o campo já tiver 3 caracteres (um parênteses e 2 números) o script irá inserir mais um parênteses, fechando assim o código de área.
    if(telefone.value.length == 10)
        telefone.value = telefone.value + '-'; //quando o campo já tiver 8 caracteres, o script irá inserir um tracinho, para melhor visualização do telefone.
}