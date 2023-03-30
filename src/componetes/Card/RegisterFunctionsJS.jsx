const form = document.querySelector("formulario");
const login = document.querySelector("login");
const password = document.querySelector("senha");
const nameUser = document.querySelector("nome");
const cpf = document.querySelector("cpf");

function register() {
    fetch('http://localhost:8089/user/register', {
      method: 'POST',
      body: JSON.stringify({ login: login.value,
                             senha: password.value,
                             nome: nameUser.value,
                             cpf: cpf.value }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('Cadastro realizado com sucesso:', data);
    })
    .catch(error => {
      console.error('Erro ao cadastrar:', error);
    });
  }
  



form.addEventListener("submit", function (event){
    event.preventDefault();
    register();
})