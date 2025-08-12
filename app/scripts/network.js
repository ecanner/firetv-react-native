import {createColumnHelper, ColumnDefBase, useReactTable } from '@tanstack/react-table';
import NetInfo from "@react-native-community/netinfo"


const columnHelper = new createColumnHelper<String>()

type Setting = {
    name: String
    value: String
}

const defaultColumns = [
    columnHelper.display ('settings', {
        cell: info => <i>{info.getValue()}</i>,
    },
    columnHelper.display ('settings', {
        cell: info => <i>{info.getValue()}</i>,
    }
]
export const getNetworkTable = () {
    let defaultSettings = [];
      const networkSettings = NetInfo.useNetInfoInstance();
      let details;
      let ipAddress = '';
      if (networkSettings != null) {
        details  = networkSettings.netInfo.details;
        defaultSettings.push(new Setting('Connection Type', getConnType(networkSettings.netInfo.type)));
      if (details != null) {
          defaultSettings.push(new Setting('IP Address', details.ipAddress));
          if (networkSettings.netInfo.type == 'wifi') {
            defaultSettings.push(new Setting('SSID', details.ssid));  
          }
          if (networkSettings.netInfo.type == 'cellular') {
            defaultSettings.push(new Setting('Generation', details.cellularGeneration));  
          }
          defaultSettings.push(new Setting('Online', (networkSettings.netInfo.isInternetReachable ? 'Connected' : 'Disconnected')));
        
      }
    }
    
}
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