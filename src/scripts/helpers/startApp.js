import domBuilder from '../components/domBuilder';
import filterButtons from '../components/filterBtns';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import clearDom from './clearDom';

const startApp = () => {
  domBuilder();
  clearDom();
  navBar();
  logoutButton();
  filterButtons();
};

export default startApp;
