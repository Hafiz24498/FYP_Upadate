import React, {useState} from 'react';
import { Text, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView, TextInput, View, Button, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { db } from '../Firebase/Firebase-Config';
import { collection, addDoc } from 'firebase/firestore/lite';

const AddApointment = ({ route, navigation }) => {

    const { hospital, doctorfname, doctorlname } = route.params;

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const appointmentDate = moment(date).format('LLL');
    const [patientfname, setPatientfname] = useState('');
    const [ patientlname, setPatientlname] = useState('');
    const [building, setBuilding] = useState('');

    console.log(appointmentDate);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        //console.log(currentDate);
      };
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
      const showDatepicker = () => {
        showMode('date');
      };
      const showTimepicker = () => {
        showMode('time');
      };

      const newAppointment = async () => {
          try{
              const docRef = await addDoc(collection(db, "appointment"),{
                  doctorfname: doctorfname,
                  doctorlname: doctorlname,
                  patientfname: patientfname,
                  patientlname: patientlname,
                  hospital: hospital,
                  building: building,
                  appointmentdate: appointmentDate
              });
            Alert.alert('Add appointment successfully');
          } catch(e){
              console.log(e);
          }
       }

    return(        
        <ScrollView style={styles.ScrollView}>  
        <SafeAreaView style={styles.container}>
            <TextInput style={styles.TextInput}
                placeholder={doctorfname}
                placeholderTextColor="black"    
            />
            <TextInput style={styles.TextInput}
                placeholder={doctorlname}
                placeholderTextColor="black"
            />
            <TextInput style={styles.TextInput}
                placeholder="Patient First Name"
                placeholderTextColor="black"
                onChangeText={text => setPatientfname(text)}
            />
            <TextInput style={styles.TextInput}
                placeholder="Patient Last Name"
                placeholderTextColor="black"
                onChangeText={text => setPatientlname(text)}
            />
            <TextInput style={styles.TextInput}
                placeholder= {hospital}
                placeholderTextColor="black"
            />
            <TextInput style={styles.TextInput}
                placeholder="Building"
                placeholderTextColor="black"
                onChangeText={text => setBuilding(text)}
            />
            <View style={{marginBottom: 10}}>
        <Button onPress={showDatepicker} title="Date"  style={{color: '#e8e8e8'}}/>
      </View>
      <View>
        <Button onPress={showTimepicker} title="Time" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
            <TouchableOpacity 
                style={styles.Button}
                onPress={newAppointment} 
            >
                <Text style={styles.TextButton}>Add Apointment</Text>   
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
export default AddApointment;