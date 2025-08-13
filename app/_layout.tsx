import React from 'react';
import { useEffect } from 'react';
import {getValue} from './scripts/storage';
import {useRouter, Slot} from 'expo-router';

export default function RootLayout() {
 // console.log('root layout');
  const loaded = '';
  const router = useRouter();
    useEffect(() => {
    console.log(loaded);
    if (loaded) {
    const val = getValue('urla');
    console.log(val);
      if (val.length > 0) {
       // console.log('there is a value');
       // router.navigate('./MoviesScreen.tsx');
      }
    }
  }, [router]);

  if (!loaded) {
    return null;
  }

  return <Slot />;
}
