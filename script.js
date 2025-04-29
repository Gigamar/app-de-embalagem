
const setoresValidos = [
  "CAFETERIA", "PADARIA", "FRIOS", "ROTISSERIA", "CONFEITARIA",
  "AÇOUGUE", "FRENTE DE CX", "HORTIFRUTI", "EMPORIO", "MERCEARIA", "RECEBIMENTO"
];

function validarSetor() {
  const setor = document.getElementById('setor').value.trim().toUpperCase();
  if (setoresValidos.includes(setor)) {
    document.getElementById('login').style.display = 'none';
    document.getElementById('pedido').style.display = 'block';
    document.getElementById('setor-nome').innerText = setor;
    document.getElementById('erro').innerText = '';
  } else {
    document.getElementById('erro').innerText = 'Setor inválido. Tente novamente.';
  }
}

function enviarPedido() {
  document.getElementById('mensagem').innerText = 'Pedido enviado com sucesso!';
}
