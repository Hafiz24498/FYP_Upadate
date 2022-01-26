import React, {useState} from 'react';
import { Text, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView, Alert, TextInput} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { db, auth } from '../Firebase/Firebase-Config';
import { Input } from 'react-native-elements';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore/lite';
import Moment from 'moment';

const PatientRegister = ({  navigation }) => {

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    console.log(date)
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(Moment(currentDate).format("LL"));
        //console.log(currentDate);
      };
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
      const showDatepicker = () => {
        showMode('date');
      };

    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [ic, setIc] = useState('');
    const [age, setAge] = useState('');
    const [mobileno, setMobileno] = useState('');
    const [city, setCity] = useState('');
    const [hieght, setHieght] = useState('');
    const [wieght, setWieght] = useState('');
    const [bloodtype, setBloodtype] = useState('');
    const [password, setPassword] = useState('');
 
   const RegisterPatientUser = async () => {
    
     createUserWithEmailAndPassword( auth, email, password)
        .then((cred) => {
                setDoc(doc(db, 'patientuser', cred.user.uid), {
                useremail: cred.user.email,
                firstname: firstname,
                lastname: lastname,
                ic: ic,
                date: date,
                age: age,
                mobileno: mobileno,
                city: city,
                hieght: hieght,
                wieght: wieght,
                bloodtype: bloodtype,
                patientid: cred.user.uid
                
            });
            navigation.navigate('PatientLogin');
    })
    .catch((error) => {
        Alert.alert(error.message);
    })}
    
    return(        
        <ScrollView style={styles.ScrollView}>  
        <SafeAreaView style={styles.container}>
            <Text style={styles.Text}>Sign Up</Text>
            <Input 
                placeholder="E-mail"
                placeholderTextColor="black"
                onChangeText={text => setEmail(text)} 
            />
             <Input 
                placeholder="Password"
                placeholderTextColor="black"
                secureTextEntry
                onChangeText={text => setPassword(text)} 
            />
            <Input 
                placeholder="First Name"
                placeholderTextColor="black"
                onChangeText={text => setFirstname(text)} 
            />
            <Input 
                placeholder="Last Name"
                placeholderTextColor="black"
                onChangeText={text => setLastname(text)} 
            />
            <Input 
            placeholder="IC"
            placeholderTextColor="black"
            onChangeText={text => setIc(text)} 
        />
        <TouchableOpacity style={{alignItems: "center",
            backgroundColor: "#f3f6f4",
            padding: 10, height: 50}}
            onPress={showDatepicker}>
        <Text style={{color:'black', alignSelf:'center', fontSize:20}}>Date of Birth</Text >
        </TouchableOpacity>
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
      <Input 
      placeholder="Age"
      placeholderTextColor="black"
      onChangeText={text => setAge(text)} 
  />
            <Input 
                placeholder="Mobile No"
                placeholderTextColor="black"
                keyboardType='phone-pad'
                onChangeText={text => setMobileno(text)}
            />
            <Input 
                placeholder="City"
                placeholderTextColor="black"
                keyboardType='default'
                onChangeText={text => setCity(text)} 
            />
            <Input 
                placeholder="hieght"
                placeholderTextColor="black"
                onChangeText={text => setHieght(text)} 
            />
            <Input 
                placeholder="wieght"
                placeholderTextColor="black"
                onChangeText={text => setWieght(text)} 
            />
            <Input 
                placeholder="blood type"
                placeholderTextColor="black"
                onChangeText={text => setBloodtype(text)} 
            />
            <TouchableOpacity 
                style={styles.Button}
                onPress={RegisterPatientUser} 
                //onPress={()=> Alert.alert(date)}
            >
                <Text style={styles.TextButton}>Sign Up</Text>   
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
    ScrollView:{    
    },
    Text:{
        fontWeight: 'bold',
        color: '#d2691e',
        fontSize: 30,
        paddingTop: 20,
        paddingBottom: 20
    },
    TextInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: 'grey'
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
export default PatientRegister;