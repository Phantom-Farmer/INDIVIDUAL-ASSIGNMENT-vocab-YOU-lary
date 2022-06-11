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

export {
  getMyWords, createNewWord, updateWord, deleteWord, getAllTheWords, getSingleWord
};
