const clearDom = () => {
  document.querySelector('#login-form-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#words-container').innerHTML = '';
  document.querySelector('#filters').innerHTML = '';
};

export default clearDom;
