import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import renderToDom from './renderToDom';

const startApp = () => {
  renderToDom();
  domBuilder();
  navBar();
};

export default startApp;
