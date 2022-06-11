import addWordForm from '../forms/addWordForm';

const navEvents = () => {
  document.querySelector('#barNav').addEventListener('click', (e) => {
    if (e.target.id.includes('addWord')) {
      addWordForm();
    }
  });
};

export default navEvents;
