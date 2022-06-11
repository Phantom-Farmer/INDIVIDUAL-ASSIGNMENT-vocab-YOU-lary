import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import { renderWords } from '../components/myWords/renderWords';
import clearDom from './clearDom';
import domEvents from '../components/events/domEvents';
import formEvents from '../components/events/formEvents';
import navEvents from '../components/events/navEvents';
import { getMyWords } from '../../api/words';

const startApp = (user) => {
  domBuilder();
  clearDom();
  navBar();
  logoutButton();
  navEvents(user.uid);
  formEvents(user);
  domEvents(user.uid);
  getMyWords(user.uid).then((wordsArray) => renderWords(wordsArray));
};

export default startApp;
