import NetInfo from "@react-native-community/netinfo"
import {StyleSheet, View} from 'react-native';
import { getMacAddressSync } from "react-native-device-info";

//import {View, Text, Card} from 'react-native-ui-lib';
import { CardProps } from 'tamagui';
import {XStack, Card, Text} from 'tamagui';
export const getNetworkTable = () => {
    let defaultSettings = [];
    const networkSettings = NetInfo.useNetInfoInstance();
    let details;
    let ipAddress = '';
    
    if (networkSettings != null) {
        details  = networkSettings.netInfo.details;
        defaultSettings.push({key: 0, name: 'Connection Type', value: getConnType(networkSettings.netInfo.type)});
        if (details != null) {
            defaultSettings.push({key: 1, name:'IP Address', value: details.ipAddress});
            if (networkSettings.netInfo.type == 'wifi') {
                defaultSettings.push({key: 2, name: 'SSID', value: details.ssid});  
            }
            if (networkSettings.netInfo.type == 'cellular') {
                defaultSettings.push({key: 3, name:'Generation', value: details.cellularGeneration});  
            }
            defaultSettings.push({key: 4, name:'Online', value: (networkSettings.netInfo.isInternetReachable ? 'Connected' : 'Disconnected')});
            
        }
    }
    let mac = getMacAddressSync();
    defaultSettings.push({name:"MAC Address", value: mac})
    const output = <Card size='$3' mx='$4' gap='$4' backgroundColor={'white'} bordered elevate padded m-5>
            {defaultSettings.map((setting) => {
                const output = <XStack>
                <Text style={styles.rowLeft}>{setting.name}:</Text>
                <Text style={styles.rowRight}>{setting.value}</Text>
                </XStack>;
                return output
            })}
    </Card>;
return output;
}
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        color: 'black',
        fontSize: 40,
      },
    rowLeft: {
        width: '50%',
        fontSize:20,
    },
    rowRight: {
        width: '50%',
        fontSize:20,
        fontWeight: 'bold',
    }
});
    //const Item = ({settings}) => 
    /*
    console.log(defaultSettings);
    return <GridList
        data={defaultSettings}
        renderItem={}
        numColumns={2}
        itemSpacing={Spacings.s3}
        listPadding={Spacings.s5}
    />;*/

function getConnType(type) {
    let connName = '';
    switch(type) {
        case 'wifi':
            connName = 'Wi-Fi';
            break;
        case 'none':
            connName = 'No Connection';
            break;
        case 'unknown':
            connName = 'Unknown';
            break;
        case 'cellular':
            connName = 'Cellular';
            break;
        case 'bluetooth':
            connName = 'Bluetooth';
            break;
        case 'ethernet':
            connName = 'Ethernet';
            break;
        case 'wifi':
            connName = 'WiMax';
            break;
        case 'vpn':
            connName = 'VPN';
            break;
        default:
            connName = 'Other';
    }
    return connName;
}