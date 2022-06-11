import signIn from '../helpers/signIn';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `<h1>THIS IS WORDMAX X-TREME!!!</h1>
  <p>sell your soul to learn some words</p>
  <button id="google-auth" class="btn btn-danger">Enter If You Dare</button>`;
  document.querySelector('#login-form-container').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
