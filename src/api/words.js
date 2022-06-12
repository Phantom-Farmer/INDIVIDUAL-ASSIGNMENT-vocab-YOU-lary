import axios from 'axios';

const dbUrl = 'https://vocab-2-lary-default-rtdb.firebaseio.com';

const getMyWords = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/words.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const createNewWord = (obj, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/words.json`, obj)
    .then((response) => {
      const giveFBK = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/words/${response.data.name}.json`, giveFBK)
        .then(() => {
          getMyWords(uid).then((wordsArray) => resolve(wordsArray));
        });
    }).catch((error) => reject(error));
});

const updateWord = (obj, firebaseKey) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/words/${obj.firebaseKey || firebaseKey}.json`, obj)
    .then(() => {
      getMyWords(obj.uid).then((wordsArray) => resolve(wordsArray));
    }).catch((error) => reject(error));
});

const deleteWord = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/words/${firebaseKey}.json`)
    .then(() => {
      getMyWords(uid).then((wordsArray) => resolve(wordsArray));
    }).catch((error) => reject(error));
});

const getAllTheWords = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/words.json`)
    .then((wordsArray) => resolve(Object.values(wordsArray.data)))
    .catch((error) => reject(error));
});

const getSingleWord = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/words/${firebaseKey}.json`)
    .then((wordObject) => resolve(wordObject.data))
    .catch((error) => reject(error));
});

const wordsHTML = (uid) => new Promise((resolve, reject) => {
  getMyWords(uid)
    .then((filterWords) => {
      const htmlWords = filterWords.filter((word) => word.language === 'HTML');
      resolve(htmlWords);
    })
    .catch(reject);
});

const wordsCss = (uid) => new Promise((resolve, reject) => {
  getMyWords(uid)
    .then((filterWords) => {
      const cssWords = filterWords.filter((word) => word.language === 'CSS');
      resolve(cssWords);
    })
    .catch(reject);
});

const wordsJavaScript = (uid) => new Promise((resolve, reject) => {
  getMyWords(uid)
    .then((filterWords) => {
      const javaScriptWords = filterWords.filter((word) => word.language === 'JavaScript');
      resolve(javaScriptWords);
    })
    .catch(reject);
});

const wordsPython = (uid) => new Promise((resolve, reject) => {
  getMyWords(uid)
    .then((filterWords) => {
      const pythonWords = filterWords.filter((word) => word.language === 'Python');
      resolve(pythonWords);
    })
    .catch(reject);
});

export {
  getMyWords, createNewWord, updateWord, deleteWord, getAllTheWords, getSingleWord, wordsHTML, wordsCss, wordsJavaScript, wordsPython
};
