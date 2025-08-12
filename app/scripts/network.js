import NetInfo from "@react-native-community/netinfo"
import {StyleSheet, View, Text} from 'react-native';



export const getNetworkTable = () => {
    let defaultSettings = [];
    const networkSettings = NetInfo.useNetInfoInstance();
    let details;
    let ipAddress = '';
    if (networkSettings != null) {
        details  = networkSettings.netInfo.details;
        defaultSettings.push({name: 'Connection Type', value: getConnType(networkSettings.netInfo.type)});
        if (details != null) {
            defaultSettings.push({name:'IP Address', value: details.ipAddress});
            if (networkSettings.netInfo.type == 'wifi') {
                defaultSettings.push({name: 'SSID', value: details.ssid});  
            }
            if (networkSettings.netInfo.type == 'cellular') {
                defaultSettings.push({name:'Generation', value: details.cellularGeneration});  
            }
            defaultSettings.push({name:'Online', value: (networkSettings.netInfo.isInternetReachable ? 'Connected' : 'Disconnected')});
            
        }
    }
    const output = <View>
            {defaultSettings.map((setting) => {
                const output = <View style={styles.row}>
                <Text style={styles.rowLeft}>{setting.name}</Text>
                <Text style={styles.rowRight}>{setting.value}</Text>
                </View>;
                return output
            })}
    </View>;
return output;
}
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        color: 'black',
        fontSize: '40pt',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        paddingTop: '2rem'
      },
    rowLeft: {
        width: '35%',
    },
    rowRight: {
        width: '65%',
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