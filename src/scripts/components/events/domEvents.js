import { renderWords } from '../myWords/renderWords';
import addWordForm from '../forms/addWordForm';
import {
  deleteWord, getMyWords, getSingleWord, wordsCss, wordsHTML, wordsJavaScript, wordsPython
} from '../../../api/words';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delMeBtn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you friggin sure?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteWord(firebaseKey, uid).then((wordsArray) => renderWords(wordsArray));
      }
    }

    if (e.target.id.includes('editMeBtn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleWord(firebaseKey, uid).then((wordObject) => addWordForm(wordObject));
    }

    if (e.target.id.includes('html')) {
      wordsHTML(uid).then(renderWords);
    }

    if (e.target.id.includes('js')) {
      wordsJavaScript(uid).then(renderWords);
    }

    if (e.target.id.includes('python')) {
      wordsPython(uid).then(renderWords);
    }

    if (e.target.id.includes('css')) {
      wordsCss(uid).then(renderWords);
    }

    if (e.target.id.includes('clear')) {
      getMyWords(uid).then(renderWords);
    }
  });
};

export default domEvents;
