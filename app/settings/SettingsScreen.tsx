/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import React from 'react';
import {StyleSheet, SafeAreaView,ScrollView} from 'react-native';
import {Header} from '../components';
import { getNetworkTable } from '../scripts/network';
import {View, Text} from 'react-native-ui-lib';
import { renderSettingsForm } from './PosterUrl';

const SettingsScreen = () => {
  //const ipAddress = getIPAddress();
  //console.log(ipAddress);

  return (
    <SafeAreaView style={styles.container}>
      <Header headerText="Settings" />
      <View style={styles.content}>
        <View style={styles.posters} marginL-60 padding-s5 flex>
          <ScrollView>
            {renderSettingsForm()}
          </ScrollView>
        </View>
        <View style={styles.network} >
          <Header headerText="Network Info" />
          <View centerH top paddingH-s5>
         {getNetworkTable()}
         </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

/* <Text style={styles.text}>{details == null ? 'IP Address not found' : details.ipAddress}</Text>
          <Text style={styles.text}>{(networkSettings == null ? 'Not Available' : networkSettings.netInfo.type)}</Text>
          <Text style={styles.text}>{(details == null ? 'Not Available' : networkSettings.netInfo.details.ssid )}</Text>
          <Text style={styles.text}>{(networkSettings == null ? 'Not Available' : (networkSettings.netInfo.isInternetReachable ? 'Connected' : 'Disconnected'))}</Text> */
/*function getNetworkInfo():Network.NetworkState {
  Network.getNetworkStateAsync()
  .then ((networkState) => {
    console.log(networkState);
    return networkState;
  });
  return null;
}

function getIPAddress() {
  Network.getIpAddressAsync()
  .then ((ipAddress) => {
    console.log(ipAddress);
    return ipAddress;
  });
  return '';
}*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12181F',
  },
  content: {
    flexDirection: 'row',
    flexGrow:1,
  },
  posters: {
    width: '70%',
    paddingLeft: 50,
    backgroundColor: 'skyblue',
  },
  network: {
    width: '30%',
    backgroundColor: '#232f3e',
    color: 'white',
  },
  networkLeft: {
    width: '30%',
    backgroundColor: 'steelblue',
  },
  networkRight: {
    width: '30%',
    backgroundColor: 'steelblue',
  },
  text: {
    backgroundColor:'black',
    color:'white',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    color: 'black',
    fontSize: 80,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20
  },
rowLeft: {
    width: '35%',
},
rowRight: {
    width: '65%',
    fontWeight: 'bold',
}
});

export default SettingsScreen;
