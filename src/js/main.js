function cadastraMensagem() {
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

    alert("Mensagem enviada com sucesso! Em breve entraremos em contato!")
   
}