import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';

const noWords = () => {
  clearDom();
  const domString = '<h1>Add a word to the MAX!!!</h1>';
  renderToDom('#words-container', domString);
};

const renderWords = (arr) => {
  clearDom();
  if (arr.length) {
    let domString = '';
    arr.forEach((word) => {
      domString += `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${word.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${word.language}</h6>
    <p class="card-text">${word.definition}</p>
    <hr>
        <i id="editMeBtn--${word.firebaseKey}" class="fas fa-edit btn btn-info"></i>
        <i id="delMeBtn--${word.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
      </div>
      </div>`;
    });
    renderToDom('#words-container', domString);
  } else {
    noWords();
  }
};

export { renderWords, noWords };
