function cadastraMensagem() {
    event.preventDefault()
    let nome = document.getElementById("nome-completo").value;
    let email = document.getElementById("email").value;
    let tel = document.getElementById("telefone").value;
    let msg = document.getElementById("mensagem").value;

    dados = {
        "name": nome,
        "email": email,
        "telefone": tel,
        "mensagem": msg
    }
    console.log(dados)
   
}   