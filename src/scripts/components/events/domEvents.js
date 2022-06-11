import { renderWords } from '../myWords/renderWords';
import addWordForm from '../forms/addWordForm';
import { deleteWord, getSingleWord } from '../../../api/words';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.dispatchEvent.includes('delMeBtn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you friggin sure?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteWord(firebaseKey, uid).then((wordsArray) => renderWords(wordsArray));
      }
    }

    if (e.target.id.includes('editMeBtn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleWord(firebaseKey).then((wordObject) => addWordForm(wordObject));
    }
  });
};

export default domEvents;
