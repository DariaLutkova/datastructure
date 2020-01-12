  class HashTable {
    constructor(length = 13) {
      this._store = new Array(length);
    }
    hash(value) {
      let result = 0;
      for (let i = 0; i < value.length; i++) {
        result += value.charCodeAt(i);
      }
      return result % this._store.length;
    }
    add(key, value) {
      const hash = this.hash(key);
      this._store[hash] = this._store[hash] || new Array();
      this._store[hash].push({key,value});
      console.log(this._store);
    }
    get(key) {
      const hash = this.hash(key);
      const array = this._store[hash];
      if (!array) {
        return false;
      }
      return array.find(item => {
        return item.key === key;
      }).value;

    }
  }

  let hashTable = new HashTable(13);

 function addWord(event) {
   event.preventDefault();
   const word = document.querySelector('#addInput').value;
   const translate = document.querySelector('#addTranslate').value;
   hashTable.add(word, translate);
 }

 function translateWord(event) {
  event.preventDefault();
  const input = document.querySelector('#translateInput').value;

   const result = hashTable.get(input);
   if (result) {
     document.querySelector('#result').classList.remove('hide');
     document.querySelector('#result').innerHTML = result;
   }
 }
window.onload = function () {
  document.querySelector('#addButton').addEventListener('click', addWord);
  document.querySelector('#translateButton').addEventListener('click', translateWord);
}