import renderToDom from '../helpers/renderToDom';

const filterButtons = () => {
  const domString = `<button type="button" class="btn btn-info" id="html">HTML</button>
    <button type="button" class="btn btn-info" id="js">JavaScript</button>
    <button type="button" class="btn btn-info" id="python">Python</button>
    <button type="button" class="btn btn-info" id="css">CSS</button>
    <button type="button" class="btn btn-info" id="clear">CLEAR</button>`;
  renderToDom('#filters', domString);
};

export default filterButtons;
