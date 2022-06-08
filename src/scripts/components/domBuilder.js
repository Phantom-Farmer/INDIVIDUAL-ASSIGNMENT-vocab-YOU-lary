import renderToDom from '../helpers/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navBar"></div>
  <div id="filterBTN"></div>
  <div id="main-container">
    <div id="form-container"></div>
    <div id="words-container"></div>
  </div>`;

  renderToDom('#app', domString);
};

export default domBuilder;
