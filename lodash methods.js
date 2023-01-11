const _ = {
  clamp(num, minVal, maxVal) {
    //copied hints val order
    const lowerClampVal = Math.max(num, minVal); // choses max number between num & lowerVal ex(n10, m8, l5) = 8 as 8 is set to max number

    const higherClampVal = Math.min(lowerClampVal, maxVal);
    return higherClampVal;
  },

  inRange(num, start, end) {
    //checking if num in inbetween both nums
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      const endVar = end; // var so end wont be overwritten before start assigned end**
      end = start;
      start = endVar; //**
    }
    return start <= num && num < end ? true : false;
  },
  words(string) {
    let words = string.split(" ");
    return words;
  },
  pad(str, len) {
    if (len < str.length) {
      return str;
    }
    const paddingStart = Math.floor((len - str.length) / 2); //diff between length
    const paddingEnd = len - str.length - paddingStart;
    const paddingStr = " ".repeat(paddingStart) + str + " ".repeat(paddingEnd);

    return paddingStr;
  },
  has(obj, key) {
    // testing for obj's key has val = true, no val = false
    //bracket notation required to to avoid searching for a property named key, as the key name in this instance is key and we are checking if the key has a value or not.
    const keyVal = obj[key] !== undefined ? true : false;
    return keyVal;
  },
  invert(obj) {
    // used coecademy implement secion
    const invertedObj = {}; // empty obj
    for (let key in obj) {
      // iterating each key in obj
      const originalValue = obj[key]; //setting val of the key in the obj
      invertedObj[originalValue] = key; // setting same key&val to then be iverted by this method
    }
    return invertedObj;
  },
  findKey(obj, predFunc) {
    //had help on the line no 54
    for (let key in obj) {
      let val = obj[key];
      //giving predFunc a val to if can return truthy or fasly and giving it val which is the key val
      let predicateReturnValue = predFunc(val);

      if (predicateReturnValue) {
        // truthy or fasly check
        return key;
      }
    }
    return undefined; // if falsy
  },
  drop(array, num) {
    // 50/50
    num === undefined ? (num = 1) : undefined; // asigning num as 1 if no val is given
    let dropNewArr = array.slice(num);
    return dropNewArr;
  },

  dropWhile(arr, predFunc) {
    //stops at truthy and prints the rest
    const dropNum = arr.findIndex((element, index) => {
      return !predFunc(element, index, arr);
    });
    const droppedArr = this.drop(arr, dropNum);
    return droppedArr;
  },
  chunk(arr, size) {
    size === undefined ? (size = 1) : undefined;
    const arrayChunks = [];

    for (let i = 0; i < arr.length; i += size) {
      // increments by size
      const arrayChunk = arr.slice(i, i + size); //going from the current loop index to the current loop index plus size
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  },
};

// Do not write or modify code below this line.
module.exports = _;
