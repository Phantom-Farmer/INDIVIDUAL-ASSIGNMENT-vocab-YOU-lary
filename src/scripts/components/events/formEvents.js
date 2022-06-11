import { createNewWord, updateWord } from '../../../api/words';
import { renderWords } from '../myWords/renderWords';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submitWord')) {
      const wordObject = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
        time: new Date().toLocaleString(),
        uid
      };
      createNewWord(wordObject).then((wordsArray) => renderWords(wordsArray));
    }

    if (e.target.id.includes('updateWord')) {
      const [, firebaseKey] = e.target.id.split('--');
      const wordObject = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
        time: new Date().toLocaleString(),
        firebaseKey,
        uid
      };
      updateWord(wordObject).then(renderWords);
    }
  });
};

export default formEvents;
