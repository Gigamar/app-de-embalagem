
document.getElementById('form-pedido').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('mensagem').innerText = 'Pedido enviado com sucesso!';
});
