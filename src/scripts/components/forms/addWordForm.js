import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';

const addWordForm = (obj = {}) => {
  clearDom();
  const domString = `
<form id="${obj.firebaseKey ? `updateWord--${obj.firebaseKey}` : 'submitWord'}">
  <div class="mb-3">
    <label for="title-term" class="form-label">Enter Word</label>
    <input type="text" class="form-control" id="title-term" aria-describedby="term" value="${obj.title || ''}">
    <div id="title-word" class="form-text">Taking your tech terminology to the MAX!!!</div>
  </div>
  <div class="mb-3">
    <label for="define" class="form-label">Definition</label>
    <input type="text" class="form-control" id="define" value="${obj.definition || ''}">
  </div>
  <label for="select-tech">Language</label>
  <select class="form-select" aria-label="Select Tech Category" id="select-tech">
    <option selected>${obj.language || 'Select Tech Category'}</option>
    <option value="HTML">HTML</option>
    <option value="JavaScript">JavaScript</option>
    <option value="Python">Python</option>
    <option value="CSS">CSS</option>
  </select>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`;
  renderToDom('#form-container', domString);
};

export default addWordForm;
