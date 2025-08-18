/*import React, { useEffect } from 'react';
import { useNavigation } from 'expo-router';
import { getItemSync } from '../scripts/storage';
import { View, Text } from 'react-native-ui-lib';
import { NavigationContainer } from '@react-navigation/native'; */
import SettingsScreen from './settings/SettingsScreen';
import PostersScreen from './posters/PostersScreen';
/*
const Home = () =>{
    //RootLayout();
    console.log('Home component loaded');
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({ headerShown: false });
      }, [navigation]);
    const currentUrl = getItemSync('currentUrl');
      return 
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
        </View>;

}
*/
export {SettingsScreen, PostersScreen};
/*export default function Home() {
    const router = useRouter();
    const currentUrl = getItemSync('currentUrl');
    console.log('currentUrl:', currentUrl);
    let pathName = '/posters/PostersScreen';
    if (!currentUrl) {
        pathName = '/settings/SettingsScreen';
    } 
    console.log('Redirecting to:', pathName);
    useEffect(() => {
        router.replace(pathName);
    }, [router]);    

    return null; // No need to render anything here, as we are redirecting
}*/
 
//export {RootLayout, SettingsScreen, PostersScreen};
