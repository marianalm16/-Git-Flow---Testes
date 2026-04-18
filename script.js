function cadastrar() {
  const nome = document.getElementById('nomecompleto').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const senha = document.getElementById('senha').value;

  if (!nome || !email || !telefone || !senha) {
    alert('Preencha todos os campos, se não, não tem conta bonitinha!');
    return;
  }

  alert('Cadastro realizado com sucesso, até breve!!!');
}