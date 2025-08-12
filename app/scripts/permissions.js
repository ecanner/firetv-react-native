import React from 'react';
import {PermissionsAndroid} from 'react-native';
const requestLocationPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Network Info Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('We can get the network info');
      } else {
        console.log('Network permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  export {requestLocationPermissions};