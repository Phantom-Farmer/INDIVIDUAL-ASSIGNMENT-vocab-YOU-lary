// USE WITH FIREBASE AUTH
import checkLoginStatus from './helpers/auth';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import { loginFunction } from './components/pages/loginFunction';

const init = () => {
  loginFunction();

  // USE WITH FIREBASE AUTH
  checkLoginStatus();
};

init();
