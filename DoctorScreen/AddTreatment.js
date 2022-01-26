import React, {useState} from 'react';
import { Text, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView, TextInput, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { db } from '../Firebase/Firebase-Config';
import { collection, addDoc } from 'firebase/firestore/lite';

const AddTreatment = ({ route ,navigation }) => {

    const { pfname, plname } = route.params;
    const date = new Date();
    const tdate = moment(date).format('LLL');

    const [ dfname, setDfname] = useState('');
    const [ dlname, setDlname] = useState('');
    const [sickness, setSickness] = useState('');


    const newTreatment = async () =>{
        try{
            const Addt = await addDoc(collection(db, "treatment"),{
                pfname: pfname,
                plname: plname,
                dfname: dfname,
                dlname: dlname,
                tdate: tdate,
                sickness: sickness
            })
            Alert.alert('Add new treatment succesful');
        }
        catch(error){
            Alert.alert(error.message);
        }
    }

    return(        
        <ScrollView style={styles.ScrollView}>  
        <SafeAreaView style={styles.container}>
            <TextInput style={styles.TextInput}
                placeholder={pfname}
                placeholderTextColor="black" 
            />
            <TextInput style={styles.TextInput}
                placeholder={plname}
                placeholderTextColor="black" 
            />
            <TextInput style={styles.TextInput}
                placeholder="Doctor first name"
                placeholderTextColor="black"
                onChangeText={text => setDfname(text)}
            />
            <TextInput style={styles.TextInput}
                placeholder= "Doctor last name"
                placeholderTextColor="black" 
                onChangeText={text => setDlname(text)}
            />
            <TextInput style={styles.TextInput}
                placeholder="Sickness"
                placeholderTextColor="black"
                onChangeText={text => setSickness(text)}
            />
            <TouchableOpacity 
                style={styles.Button}
                onPress={newTreatment} 
            >
                <Text style={styles.TextButton}>Add Treatment</Text>   
            </TouchableOpacity>
        
        </SafeAreaView>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: 10,
        padding: 30,
    },
    Text:{
        fontWeight: 'bold',
        color: '#d2691e',
        fontSize: 30,
        paddingTop: 20,
        paddingBottom: 20
    },
    TextInput: {
        backgroundColor: '#e8e8e8',
        width: '100%',
        padding: 20,
        borderRadius: 8,
        marginVertical: 8,
    },
    Button:{
        backgroundColor: '#d2691e',
        width: '100%',
        padding: 20,
        borderRadius: 8,
        marginVertical: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextButton:{
        color: 'white',
        fontWeight: '600',
        fontSize: 20,
    },
});
export default AddTreatment;