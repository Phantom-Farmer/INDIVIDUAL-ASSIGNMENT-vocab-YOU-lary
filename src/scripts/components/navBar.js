import logo from '../assets/logo.jpg';
import renderToDom from '../helpers/renderToDom';

const navBar = () => {
  const domString = `
  <nav class="navbar navbar-light bg-light" id="barNav">
  <div class="container-fluid">
    <img src="${logo}" alt="logo" >
    <span class="navbar-brand mb-0 h1">WORDMAX X-TREME!!!</span>
    <button type="button" class="newWordBtn btn btn-info" id="addWord">NEW WORD</button>
    <div class="logoutBtn" id="logoutBTN"></div>
  </div>
</nav>
  `;
  renderToDom('#navBar', domString);
};

export default navBar;
