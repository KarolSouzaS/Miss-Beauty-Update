document.getElementById('registerForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const cpf = document.getElementById('cpf').value;
  const birthDate = document.getElementById('birthDate').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  const response = await fetch('http://localhost:3000/api/register', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          Nome: nome,
          cpf: cpf,
          birthDate: birthDate,
          email: email,
          senha: senha
      })
  });

  if (response.ok) {
      const result = await response.json();
      alert(result.message);
  } else {
      const error = await response.json();
      alert(`Erro: ${error.error}`);
  }
});
