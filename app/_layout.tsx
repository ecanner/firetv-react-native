import React from 'react';
import '../scripts/globals'; // Ensure global variables are set up
import { useEffect } from 'react';
import {useRouter, Stack} from 'expo-router';
import { setItemSync, getItemSync } from '../scripts/storage';
import { requestLocationPermissions } from '../scripts/permissions';

const RootLayout = () => {
  console.log('RootLayout component loaded');
//  requestLocationPermissions();
  //RootLayout();
  setItemSync('testUrl', 'https://missingkidsaver.com/posters/?');
  console.log('root layout');
/*  const loaded = '';
  const router = useRouter();
    useEffect(() => {
    console.log(loaded);
    if (loaded) {
    const val = ''; // = getItemValue('urla');
    console.log(val);
      if (val.length > 0) {
        console.log('there is a value');
        router.navigate('./posters/PosterScreen');
      } else {
        console.log('there is no value');
        router.navigate('./settings/SettingsScreen');
      }
    }
  }, [router]);

  if (!loaded) {
    return null;
  }
*/ 


  return <Stack />;
}

export default RootLayout;