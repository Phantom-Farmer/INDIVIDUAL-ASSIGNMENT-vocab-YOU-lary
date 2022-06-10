import renderToDom from '../helpers/renderToDom';

const filterButtons = () => {
  const domString = `<button type="button" class="btn btn-info">HTML</button>
    <button type="button" class="btn btn-info">JavaScript</button>
    <button type="button" class="btn btn-info">Python</button>
    <button type="button" class="btn btn-info">CSS</button>`;
  renderToDom('#filters', domString);
};

export default filterButtons;
