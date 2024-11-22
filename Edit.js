import React, { useState } from 'react';
import {TextInput, View, Text, Button, StyleSheet, Alert} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {datasource} from "./Data";

const Edit = ({navigation,route}) => {
    const [letter, setLetter] = useState(route.params.key);


    return (
        <View style={{ padding: 10 }}>
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Letter:</Text>
                <TextInput value={letter} style={{ borderWidth: 1 }} onChangeText={(text) => setLetter(text)} />
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{flex:1,margin:10}}>
                    <Button title="Save"
                        onPress={() => {
                            let indexNum =1
                            if(route.params.key === "Vowels"){
                                indexNum=   0;
                            }
                            datasource[indexNum].data[route.params.index].key = letter;
                            navigation.navigate('Home');
                            }
                        }
                    />
                </View>
                <View style={{flex:1,margin:10}}>
                    <Button title="Delete"
                        onPress={() => {
                            let indexNum =1
                            if(route.params.key === "Vowels"){
                                indexNum=   0;
                            }
                            Alert.alert("Are you sure",'',
                                [{text:'Yes' , onPress:() =>{
                                    datasource[indexNum].data.splice(route.params.index, 1);
                                    navigation.navigate('Home');
                                    }},
                                    {text:'No'} ])
                        }}/>
                </View>
            </View>
        </View>
    );
};

export default Edit;
