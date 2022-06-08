import loginButton from '../loginButton';

const loginFunction = () => {
  document.querySelector('#app').innerHTML = `
  <h1>THIS IS WORDMAX X-TREME!!!</h1>
  <p>sell your soul to learn some words</p>
  <div id="login-form-container"></div>
  `;
  loginButton();
};

export default loginFunction;
