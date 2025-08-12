import * as SecureStore from 'expo-secure-store';

export function setValue(key, value) {
  SecureStore.setItem(key, value);
}

export function getValue(key) {
  let result = SecureStore.getItem(key);
  if (result) {
   // console.log("🔐 Here's your value 🔐 \n" + result);
  } else {
    result = '';
    //console.log('No values stored under that key.');
  }

  return result;
}
