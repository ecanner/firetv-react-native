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
import {View, Text} from 'react-native';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Header} from '../components';
import { ColumnDefBase, useReactTable } from '@tanstack/react-table';
import { getNetworkTable } from '../scripts/network';

const columnn: ColumnDefBase<String>[] = [
  
];
const SettingsScreen = () => {
  //const ipAddress = getIPAddress();
  //console.log(ipAddress);

  return (
    <SafeAreaView style={styles.container}>
      <Header headerText="Settings" />
      <SafeAreaView style={styles.content}>
        <View style={styles.posters}>
          <Header headerText="Poster Settings" />
        </View>
        <View style={styles.network} >
          <Header headerText="Network Info" />
          <View>
         {getNetworkTable()}
         </View>
        </View>
      </SafeAreaView>
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
    backgroundColor: 'steelblue',
    color: 'lime',
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
  }
});

export default SettingsScreen;
