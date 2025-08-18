//import * as SecureStore from 'expo-secure-store';
import React, { useCallback, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import SyncStorage from 'sync-storage';
/*
export async function setItemValue(key, value) {
  let result = await SecureStorage.setItem(key, value, {accessControl: 'AccessibleWhenUnlockedThisDeviceOnly'});
}*/
/*
export function getItemSync(key) {
  return getItemValue(key).then((value) => {
    return value ? value : null; 
  }).catch((error) => {
    console.error("Error retrieving item from secure storage:", error);
    return null;
  });
/*  return SecureStorage.getItem(key).then((value) => {
    console.log("🔐 Here's your value 🔐 \n" + value);
    return value ? value : null;
  }).catch((error) => {
    console.error("Error retrieving item from secure storage:", error); 
    return null;
  }); */
// return 'something'; // Placeholder for synchronous retrieval
//}
const getValue = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }
};

export const getItemSync = (key) => {
//  const retVal = getItem(key);
  const retVal = SyncStorage.get(key);
  console.log("🔐 Retrieving value for key: " + key);
  console.log("🔐 Here's your value 🔐 \n" + retVal);
  /*const myval = AsyncStorage.getItem(key).then((value) => {
    //console.log("🔐 Here's your value 🔐 \n" + (value == null));
    return value ? value : '';
  }).catch((error) => {
    console.error("Error retrieving item from secure storage:", error);
    return null;
  });
  console.log("🔐 Here's your value 🔐 \n" + JSON.stringify(myval));
  return myval;*/
  return retVal;
}
/*export const getItemSync = useCallback(async (key) => {
  try {
    const value = await getItemValue(key);
    return value;
  } catch (error) {
    console.error("Error retrieving item from secure storage:", error);
    return null;
  }
}, []);*/
 
export  const setItem = async(key, value) => {
  console.log(`🔐 Setting item with key "${key}" to value "${value}"`);
  return AsyncStorage.setItem(key, value).then(() => {
    console.log(`Item with key "${key}" set successfully.`);
  }).catch((error) => {
    console.error("Error setting item in secure storage:", error);
  });
};

export const getItem = async(key) =>{
  let result = await AsyncStorage.getItem(key).then((value) => {
    console.log(`🔐 getITemValue: ${value}`);
    return value ? value : '';
  }).catch((error) => {
    console.error("Error retrieving item from secure storage:", error); 
    return null;
  });
/*  if (result) {
   // console.log("🔐 Here's your value 🔐 \n" + result);
  } else {
    result = '';
    //console.log('No values stored under that key.');
  }
*/
console.log("🔐 Here's your value 🔐 \n" + result);
  return result;
}
export const getAllItemsSync = () => {
  const allKeys = SyncStorage.getAllKeys();
  console.log("🔐 All keys in storage: ", allKeys);
  return allKeys.map((key) => {
    const value = SyncStorage.get(key);
    console.log(`🔐 Key: ${key}, Value: ${value}`);
    return { key, value };
  });
}

export const getAllItems = async () => {
  try {
    const allKeys = await AsyncStorage.getAllKeys();
    return allKeys.map(([key, value]) => ({ key, value }));
  } catch (error) {
    console.error("Error retrieving all items from secure storage:", error);
    return [];
  }
};

export const setItemSync = (key, value) => {
  console.log(`🔐 Setting item with key "${key}" to value "${value}"`) ;
  SyncStorage.set(key, value);
  SyncStorage.set(key, value)
  .then(() => {
    SyncStorage.get(value); // 'bar'
  })
  .catch(error => {
    console.log(error);
  });
  console.log(`Item with key "${key}" set successfully.`);

}
  /*return  
/*
export const getItemSync = (key) => {
 const retVal = getItem('currentUrl').then((value) => {
    console.log('getItemSync value: ', value);
    return value;
  }).catch((error) => {
    console.error("Error retrieving item from secure storage:", error);
    return null;
  });
  //console.log("🔐 Here's your value 🔐 \n" + retVal);
  //return retVal
}*/
export const setAllItems = async (items) => {
  AsyncStorage.multiMerge
  try {
    await AsyncStorage.multiSet([firstPair, secondPair])
  } catch(e) {
    //save error
  }

  console.log("Done.")
}

export const clearAll = async () => {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    // clear error
  }

  console.log('Done.')
}