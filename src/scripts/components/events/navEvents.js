import addWordForm from '../forms/addWordForm';

const navEvents = () => {
  document.querySelector('#barNav').addEventListener('click', (event) => {
    if (event.target.id.includes('addWord')) {
      addWordForm();
    }
  });
};

export default navEvents;
