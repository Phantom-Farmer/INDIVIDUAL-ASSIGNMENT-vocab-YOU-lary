import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import { renderWords } from '../components/myWords/renderWords';
import domEvents from '../components/events/domEvents';
import formEvents from '../components/events/formEvents';
import navEvents from '../components/events/navEvents';
import { getMyWords } from '../../api/words';
import filterButtons from '../components/filterBtns';

const startApp = (user) => {
  domBuilder();
  navBar();
  filterButtons();
  navEvents(user.uid);
  formEvents(user.uid);
  domEvents(user.uid);
  getMyWords(user.uid).then(renderWords);
  logoutButton();
};

export default startApp;
