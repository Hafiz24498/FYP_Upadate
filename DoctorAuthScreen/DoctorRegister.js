import React, {useState} from 'react';
import { Text, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView, Alert} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment';
import { db, auth } from '../Firebase/Firebase-Config';
import { Input } from 'react-native-elements';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore/lite';
import { color } from 'react-native-elements/dist/helpers';


const DoctorRegister = ({  navigation }) => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    console.log(date)
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(Moment(currentDate).format("LL"));
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
    const [hospital, setHospital] = useState('');
    const [speciality, setSpeciality] = useState('');
    const password = firstname+age;

      
   const RegisterDoctorUser = async () => {
    
     createUserWithEmailAndPassword( auth, email, password)
        .then((cred) => {
                setDoc(doc(db, 'user', cred.user.uid), {
                useremail: cred.user.email,
                firstname: firstname,
                lastname: lastname,
                ic: ic,
                date: date,
                age: age,
                mobileno: mobileno,
                city: city,
                hospital: hospital,
                speciality: speciality,
                doctorid: cred.user.uid
            });
            // Alert.alert(
            //     'Register Successful',
            //     'Please contact admin at your hospital to ge password',
            //   )
            navigation.navigate('Login');
    })
    .catch((error) => {
        Alert.alert(error.message);
    })
     
    }
    
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
                keyboardType = "phone-pad"
                placeholderTextColor="black"
                onChangeText={text => setMobileno(text)}
            />
            <Picker
        selectedValue={city}
        style={{ height: 100, width: 350, borderColor: 'black', borderBottomWidth:1 }}
        onValueChange={(itemValue, itemIndex) => setCity(itemValue)}
      >
        <Picker.Item label="Johor" value="Johor" />
        <Picker.Item label="Kedah" value="Kedah" />
        <Picker.Item label="Kelantan" value="Kelantan" />
        <Picker.Item label="Melaka" value="Melaka" />
        <Picker.Item label="Negeri Sembilan" value="Negeri Sembilan" />
        <Picker.Item label="Pahang" value="Pahang" />
        <Picker.Item label="Pulau Penang" value="Pulau Penang" />
        <Picker.Item label="PErak" value="Perak" />
        <Picker.Item label="Perlis" value="Perlis" />
        <Picker.Item label="Sabah" value="Sabah" />
        <Picker.Item label="Sarawak" value="Sarawak" />
        <Picker.Item label="Selangor" value="Selangor" />
        <Picker.Item label="Wilayah Persekatuan" value="Wilayah Persekatuan" />
      </Picker>
            <Input 
                placeholder="Hospital"
                placeholderTextColor="black"
                onChangeText={text => setHospital(text)} 
            />
            <Input 
                placeholder="Speciality"
                placeholderTextColor="black"
                onChangeText={text => setSpeciality(text)} 
            />
            <Text style={{color:'red'}}>Please! contact admin at your hospital to get password</Text>
            <TouchableOpacity 
                style={styles.Button}
                onPress={RegisterDoctorUser} 
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
export default DoctorRegister;