import firebase from 'firebase/app';
import 'firebase/auth';
import clearDom from '../helpers/clearDom';

const signMeOut = () => {
  firebase.auth().signOut();
  clearDom();
  document.querySelector('#navBar').innerHTML = '';
};

const logoutButton = () => {
  clearDom();
  const domString = '<button id="google-auth" class="btn btn-danger">SIGNOUT</button>';
  document.querySelector('#logoutBTN').innerHTML = (domString);
  document.querySelector('#logoutBTN').addEventListener('click', signMeOut);
};

export default logoutButton;
