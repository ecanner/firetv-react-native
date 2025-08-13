import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Picker, TextField, DateTimePicker, NumberInput, View, Text, Card, Button, Stepper, Spacings, SegmentedControl, SegmentedControlPreset,onChangeNumber} from 'react-native-ui-lib';
import {setValue,getValue} from '../scripts/storage'
import { Header } from '../components';

const startingUrl = 'https://missingkidsaver.com/posters/';


export const renderSettingsForm = () => {
    const sortByItems = [
        {value: 'MostRecent', label: 'Most Recent'},
        {value: 'AZ', label: 'Alphabetical'}
    ]
    const sortOrderItems = [
        {value: 'ASC', label: 'Ascending'},
        {value: 'DESC', label: 'Descending'}
    ];
    
    let sortType = getValue('sortType');
    let sortOrder = getValue('sortOrder');
    let skip = getValue('skip');
    let limit = getValue('limit');
    let geolocationDistanceInMiles = getValue('geolocationDistanceInMiles');
    const caseCard = <Card style={StyleSheet.holders} elevation={5} left gap-s2>
        <View style={styles.titleHolder} >
            <Text style={styles.title}>Search Settings</Text>
        </View>
        <View padding-s5 gap-s2>
        <SegmentedControl label={'Sort By'} id={'sortType'} borderRadius={5} onChangeIndex={saveValue} segments={[{ label: 'Most Recent' }, { label: 'Alphabetical' }]} />
        <SegmentedControl label={'Sort Order'} id={'sortOrder'} preset={'form'} borderRadius={5} onChangeIndex={saveValue} segments={[{ label: 'Descending' }, { label: 'Ascending' }]} />
         <View style={styles.holders} row centerV>
            <Text style={styles.formLabel}>Skip Cases</Text>
            <Stepper 
                style={styles.formItem} 
                label="Skip Cases" 
                onValueChange={saveValue} 
                minValue={0} 
                testID="skip" 
                initialValue={skip ?? 0} 
                
                name="skip">Skip Cases</Stepper>
        </View>
            <NumberInput 
                centerV
                margin={0}
                preset={"outline"} 
                style={styles.formItem} 
                fractionDigits={0} 
                initialValue={limit ?? 20} 
                onChangeNumber={saveValue} 
                leadingText={'Cases Displayed'} 
                leadingTextStyle={styles.containerTextStyle}
                name="limit" />
            <NumberInput 
                containerStyle={styles.containerStyle}
                preset={"outline"} 
                fractionDigits={0} 
                style={styles.formItem} 
                initialValue={geolocationDistanceInMiles ?? 0} 
                testID='geolocationDistanceInMiles' 
                onChangeNumber={saveValue} 
                leadingText={'Search Radius (in Miles)'} 
                leadingTextStyle={styles.containerTextStyle}
                trailingText={'Setting a distance will ignore other location search options'}
                trailingTextStyle={styles.containerTrailingTextStyle}
                name="geolocationDistanceInMiles" />
        <Text style={styles.label}></Text></View>
    </Card>;

    return <View gap-50 centerH
    row>
        <View padding-s5>{caseCard}</View>
        <View padding-s5>{caseCard}</View>
        
    </View>;
}

function saveValue(value, testId) {
    console.log(testId);
    console.log(value);
}

const styles = StyleSheet.create({
    titleHolder: {
        padding:10,
        margin: 1,
        borderColor: '#232f3e',
        borderWidth: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        margin:0,
        width:'100%',
        backgroundColor: '#232f3e',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    formLabel: {
        width:'30%',
        fontSize: 20,
      },
    formItem: {
        width: '80%',
        fontSize: 20,
    },
    label: {
        fontSize: 10,
      },
    holders: {
        width: "100%",
        fontSize: 20,
    },
    containerStyle: {
        backgroundColor:'lime',
        borderRadius: 5,
        borderColor:'gray',
        borderWidth: 2,
        marginBottom: 30,
        marginLeft: Spacings.s5,
        marginRight: Spacings.s5
      },
    containerTextStyle: {
        fontSize: 15,
    },
    containerTrailingTextStyle: {
        fontSize: 10,
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