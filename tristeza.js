function verificarResposta() {
    var resposta = document.getElementById("resposta").value.toLowerCase();
    var respostaCorreta = "sarinha"; 
    if (resposta === respostaCorreta) {
        window.location.href = "espc_falas.html";  
    } else {
        alert("Resposta incorreta! Tente novamente.");
    }
}