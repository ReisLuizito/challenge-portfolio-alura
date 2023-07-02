function enviarEmail() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("assunto").value;
    var mensagem = document.getElementById("mensagem").value;
    
    var link = "mailto:luixguilherm3@gmail.com" +
               "?subject=" + encodeURIComponent(assunto) +
               "&body=" + encodeURIComponent(mensagem);
    
    window.location.href = link;
  }