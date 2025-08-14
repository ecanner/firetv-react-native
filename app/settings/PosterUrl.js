import React, {useState, useMemo} from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import View from 'react-native-ui-lib/view';
import Text from 'react-native-ui-lib/text';
import NumberInput from 'react-native-ui-lib/numberInput';
import Picker from 'react-native-ui-lib/picker';
import Card from 'react-native-ui-lib/card';
import Stepper from 'react-native-ui-lib/stepper';
import SegmentedControl from 'react-native-ui-lib/segmentedControl';
import DateTimePicker from 'react-native-ui-lib/dateTimePicker';
import TextField from 'react-native-ui-lib/textField';
import {Spacings, Typography} from 'react-native-ui-lib';
import {setValue,getValue} from '../scripts/storage'
import { Header } from '../components';

//const [screenPreset, setScreenPreset] = useState(SegmentedControl.presets.DEFAULT);

const startingUrl = 'https://missingkidsaver.com/posters/?';
let urlParams = {
    currentUrl: (getValue('url') == undefined ? startingUrl : decodeURIComponent(getValue('url'))),
    sortType: getValue('sortType'),
    sortOrder: getValue('sortOrder'),
    skip: getValue('skip'),
    limit: getValue('limit'),
    geolocationDistanceInMiles: getValue('geolocationDistanceInMiles'),
    missingCity: getValue('missingCity'),
    missingCounty: getValue('missingCounty'),
    missingState: getValue('missingState'),
    missingZip: getValue('missingZip'),
    missingDate: getValue('missingDate'),
    missingDateFrom: getValue('missingDateFrom'),
    missingDateTo: getValue('missingDateTo'),   
    count: getValue('count'),
};
const sortByItems = [
    {id: 0, value: 'MostRecent', label: 'Most Recent'},
    {id: 1, value: 'AZ', label: 'Alphabetical'}
]
const sortOrderItems = [
    {id: 1, value: 'DESC', label: 'Descending'},
    {id: 0, value: 'ASC', label: 'Ascending'}
];
const posterCountItems = [
    {id: 0, value: 1, label: 1},
    {id: 1, value: 4, label: 4},
];


export const renderSettingsForm = () => {
       
   /* let sortType = getValue('sortType');
    let sortOrder = getValue('sortOrder');
    let skip = getValue('skip');
    let limit = getValue('limit');
    let geolocationDistanceInMiles = getValue('geolocationDistanceInMiles'); */
    const textStyle = useMemo(() => {
        return [styles.mainText];
      });
      const textFieldProps = useMemo(() => {
        return {
          labelStyle: styles.label,
          style: textStyle,
          margin: 0,
          padding: Spacings.s2,
          maxLength: 6,
          centered: false,
          preset: 'underline',
          showClearButton: true,
          fieldStyle: styles.fieldStyle,
        };
      }, [textStyle]);
      
    const caseCard = <Card style={StyleSheet.holders} elevation={5} left gap-s4 flexG>
        <View style={styles.titleHolder} >
            <Text style={styles.title}>Search Settings</Text>
        </View>
        <View padding-s5 gap-s5>
        <SegmentedControl 
            flexG
            label={'Sort By'} 
            id={'sortType'} 
            borderRadius={5} 
            preset={'default'}
            onChangeIndex={(data) => {
                let dataItem = sortByItems[data];
                saveValue(dataItem.value,'sortType');
            }} 
            marginB-10
            segments={sortByItems} />
        <SegmentedControl 
            label={'Sort Order'} 
            id={'sortOrder'} 
            preset={'default'} 
            borderRadius={5} 
            onChangeIndex={(data) => {
                let dataItem = sortOrderItems[data];
                saveValue(dataItem.value,'sortOrder');              
            }} 
            segments={sortOrderItems} />
        <SegmentedControl 
            label={'Poster Count'} 
            id={'count'} 
            preset={'default'} 
            borderRadius={5} 
            onChangeIndex={(data) => {
                console.log(data);
                let dataItem = posterCountItems[data];
                saveValue(dataItem.value,'count');
            }} 
            segments={posterCountItems} />
         <View style={styles.holders} row gap-s5>
            <Text style={styles.formLabel} marginR-60 paddingB-20>Skip Cases</Text>
            <Stepper
                style={styles.formItem} 
                label="Skip Cases" 
                onValueChange={saveValue} 
                minValue={0} 
                testID="skip" 
                initialValue={urlParams.skip ?? 0} 
                type="default"
                name="skip">Skip Cases</Stepper>
        </View>
        <View centerV style={styles.holders} row>
            <Text style={styles.formLabel} marginB-20>Cases to Display</Text>
            <NumberInput 
                margin-0
                textFieldProps={textFieldProps}
                showClearButton={true}
                style={styles.formItem} 
                fractionDigits={0} 
                initialNumber={urlParams.limit == undefined ? 20 : urlParams.limit} 
                onChangeNumber={(data) => {
                    saveValue(data.number,'limit');
                }} 
                name="limit" />
        </View>
         <View centerV style={styles.holders} >
            <View row padding-0 margin-0 centerV>
                <Text style={styles.formLabel} width={'100%'} backgroundColor={'olive'} margin-0 marginB-20>Search Radius</Text>
                <NumberInput 
                    textFieldProps={textFieldProps}
                    fractionDigits={0} 
                    initialValue={urlParams.geolocationDistanceInMiles ?? 0} 
                    onChangeNumber={(data) => {
                        saveValue(data.number, 'geolocationDistanceInMiles');
                    }} 
                    trailingText={'in Miles'}
                    trailingTextStyle={styles.containerTextStyle}
                    name="geolocationDistanceInMiles" />
                    </View>
                <Text marginT-0 style={styles.containerTrailingTextStyle}>Setting a distance will ignore other location search options</Text>
            </View>   
        </View>
        <TextField
            maxLength={300}
            flexG
            width={"100%"}
            label='Text Field'
            showClearButton={true}
            backgroundColor='#232f3e'
            color='white'
            preset='form'></TextField>
    </Card>;

    return <View gap-50 centerH row>
        <View padding-s5>{caseCard}</View>       
    </View>;
}

function saveValue(value, name) {
    
    if (value != undefined) {
        urlParams[name] = value;
    } else {
        return;
    }
   // storeValue(value, name);
   // console.log('name', name);
   // console.log('value', value);
    createUrl(value, name);
}

function storeValue(value, name) {
    console.log(name, value);
    //setValue(name,value)
}
function createUrl(value, name) {
    console.log('********** START CREATE URL **********');
    console.log('currentUrl', urlParams['currentUrl']);
    let queryParam = name + '=' + value
    /*
    let currentUrl = urlParams['currentUrl'] == undefined ? startingUrl : urlParams['currentUrl'];
    currentUrl = currentUrl.indexOf('missingkidssaver') < 0 ? startingUrl : urlParams['currentUrl'];
    console.log('currentUrl', currentUrl);
    let queryStr = (currentUrl.endsWith('?') ? '' : ((currentUrl.indexOf('&') >= -1) ? '&' : '?')) + queryParam;
    let findQuery = new RegExp('.*' + name + '=\\w+','i');
    console.log(queryParam + ' exists',findQuery.test(currentUrl))
    
    if (findQuery.test(currentUrl)) {
        const newUrl = currentUrl.replace(findQuery, queryParam);
        console.log('newUrl',newUrl); // Output: "https://example.com/?sortType=MostRecent&limit=10"
        currentUrl = newUrl;
    } else {
        currentUrl += queryStr;
    }

    */
    let pArray = [];
     for (const pname in urlParams) {
        if(pname == 'currentUrl') {
            continue;
        }
        const val = urlParams[pname];
        console.log(pname, val);
        if(val != undefined) {
            console.log(queryParam);
            pArray.push(pname + '=' + val);
        }
    }
    console.log('pArray', pArray);
    const queryString = pArray.join('&');
    console.log('queryString', queryString);
    let currentUrl = startingUrl + queryString; 
    urlParams['currentUrl'] = currentUrl;
    console.log(currentUrl);
    console.log('********** END CREATE URL **********');
    return currentUrl;
}
const styles = StyleSheet.create({
    titleHolder: {
        padding: 10,
        margin: 1,
        borderColor: '#232f3e',
        borderWidth: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        margin: 0,
        width: '100%',
        backgroundColor: '#232f3e'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    formLabel: {
        width:'50%',
        fontSize: 20,
        backgroundColor: 'orange'
      },
    formItem: {
        width: '50%',
        fontSize: 20,
        fontWeight: 'bold'
    },
    label: {
        fontSize: 10
    },
    holders: {
        fontSize: 20,
    },
    containerStyle: {
        fontSize: 80,
        color:'blue',
      },
    containerTextStyle: {
        fontSize: 15,
    },
    containerTrailingTextStyle: {
        fontSize: 10,
    },
    mainText: {
        fontSize:20,
    },
    fieldStyle: {
        borderColor: '#232f3e',
        borderWidth: 1,
        borderRadius: 5,
        padding: Spacings.s2,
        verticalAlign: 'center',
        alignContent: 'center',

        justifyContent: 'center',
    }
});

/*
<Picker
        settings
        width={'100%'}
         name={"sortBy"}
         value={sortType ?? ""}
         preset={"outline"}
         placeholder={"Sort By"}
         label={"Sort By"}
         onChange={saveValue}
         testID={"sortBy"}
         items={sortByItems}></Picker>
       <Picker
            name={"sortOrder"}
            value={sortOrder ?? ""}
            preset={"outline"}
            placeholder={"Sort Order"}
            label={"Sort Order"}
            onChange={saveValue}
            items={sortOrderItems}
            style={styles.holders}>
        </Picker>
        */