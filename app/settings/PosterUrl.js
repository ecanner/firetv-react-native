import { EyeIcon, EyeOffIcon } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { setValue, getValue } from '../scripts/storage';
import { View, Text, Card, Button, Input,InputField,InputIcon, ToggleGroup, Icon, Label, VStack } from 'tamagui';

const startingUrl = 'https://missingkidsaver.com/posters/';
export const renderSettingsForm = () => {
    const [value, setValue] = React.useState('');
    const sortByItems = [{
        key: 0,
        value: 'MostRecent',
        label: 'Most Recent'
    }, {
        key: 1,
        value: 'AZ',
        label: 'Alphabetical'
    }];
    const sortOrderItems = [{
        key: 0,
        value: 'ASC',
        label: 'Ascending'
    }, {
        key: 1,
        value: 'DESC',
        label: 'Descending'
    }];
    let sortType = getValue('sortType');
    let sortOrder = getValue('sortOrder');
    let skip = getValue('skip');
    let limit = getValue('limit');
    let geolocationDistanceInMiles = getValue('geolocationDistanceInMiles');
    const caseCard = <Card style={StyleSheet.holders} elevation={5} left mx='$5'>
        <View style={styles.titleHolder}>
            <Text style={styles.title}>Search Settings</Text>
        </View>
        <View padding-s5 gap-s2>
            <ToggleGroup type="single" name="sortType" onValueChange={saveValue}>
                <ToggleGroup.Item value="MostRecent">Most Recent</ToggleGroup.Item>
                <ToggleGroup.Item value="AZ">Alphabetical</ToggleGroup.Item>
            </ToggleGroup>
            <ToggleGroup type="single" name="sortOrder" onValueChange={saveValue}>
                <ToggleGroup.Item value="ASC">Ascending</ToggleGroup.Item>
                <ToggleGroup.Item value="DESC">Descending</ToggleGroup.Item>
            </ToggleGroup>

            <View style={styles.holders} row centerV>
                <Text style={styles.formLabel}>Skip Cases</Text>

            </View>
            <><VStack space="md" w="$full">
                <Input size={"lg"} variant={"underlined"} isInvalid={false} isDisabled={false}>
                    <InputField onChange={(e) => {
                        setValue(e.nativeEvent.text);
                    }} value={value} placeholder="Enter Text here" />
                    <InputIcon pr="$4">
                        <Icon as={SearchIcon} />
                    </InputIcon>
                </Input>

                <Input {...props} size="md">
                    <InputField onChange={(e) => {
                        setValue(e.nativeEvent.text);
                    }} value={value} placeholder="Enter Text here" />
                    <InputIcon pr="$4">
                        <Icon as={SearchIcon} />
                    </InputIcon>
                </Input>

                <Input {...props} size="lg" isDisabled>
                    <InputField onChange={(e) => {
                        setValue(e.nativeEvent.text);
                    }} value={value} placeholder="Enter Text here" />
                    <InputIcon pr="$4">
                        <Icon as={SearchIcon} />
                    </InputIcon>
                </Input>

                <Input {...props} size="xl" isInvalid>
                    <InputField onChange={(e) => {
                        setValue(e.nativeEvent.text);
                    }} value={value} placeholder="Enter Text here" />
                    <InputIcon pr="$4">
                        <Icon as={SearchIcon} />
                    </InputIcon>
                </Input>
            </VStack></>
            
            <Text style={styles.label}></Text></View>
    </Card>;
    return <View>
        <View>{caseCard}</View>
    </View>;
};
/*
<NumberInput centerV margin={0} preset={"outline"} style={styles.formItem} fractionDigits={0} initialValue={limit ?? 20} onChangeNumber={saveValue} leadingText={'Cases Displayed'} leadingTextStyle={styles.containerTextStyle} name="limit" />
            <NumberInput containerStyle={styles.containerStyle} preset={"outline"} fractionDigits={0} style={styles.formItem} initialValue={geolocationDistanceInMiles ?? 0} testID='geolocationDistanceInMiles' onChangeNumber={saveValue} leadingText={'Search Radius (in Miles)'} leadingTextStyle={styles.containerTextStyle} trailingText={'Setting a distance will ignore other location search options'} trailingTextStyle={styles.containerTrailingTextStyle} name="geolocationDistanceInMiles" />
            */
function saveValue(value, testId) {
    console.log(testId);
    console.log(value);
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
        width: '30%',
        fontSize: 20
    },
    formItem: {
        width: '80%',
        fontSize: 20
    },
    label: {
        fontSize: 10
    },
    holders: {
        width: "100%",
        fontSize: 20
    },
    containerStyle: {
        backgroundColor: 'lime',
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 2,
        marginBottom: 30
    },
    containerTextStyle: {
        fontSize: 15
    },
    containerTrailingTextStyle: {
        fontSize: 10
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