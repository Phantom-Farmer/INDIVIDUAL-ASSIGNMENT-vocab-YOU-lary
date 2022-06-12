/* import {
  getMyWords, wordsHTML, wordsJavaScript, wordsPython, wordsCss
} from '../../../api/words';
import { renderWords } from '../myWords/renderWords';

const filterButtonEvents = (uid) => {
  document.querySelector('#clear').addEventListener('click', () => {
    getMyWords(uid).then((wordsArray) => renderWords(wordsArray));
  });

  document.querySelector('#html').addEventListener('click', () => {
    wordsHTML(uid).then((cardsArray) => renderWords(cardsArray));
  });

  document.querySelector('#js').addEventListener('click', () => {
    wordsJavaScript(uid).then((cardsArray) => renderWords(cardsArray));
  });

  document.querySelector('#python').addEventListener('click', () => {
    wordsPython(uid).then((cardsArray) => renderWords(cardsArray));
  });

  document.querySelector('#css').addEventListener('click', () => {
    wordsCss(uid).then((cardsArray) => renderWords(cardsArray));
  });
};

export default filterButtonEvents; */
