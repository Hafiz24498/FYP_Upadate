import React, {useState} from 'react';
import { Text, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView, Alert} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { db } from '../Firebase/Firebase-Config';
import { Input } from 'react-native-elements';
import { setDoc, doc } from 'firebase/firestore/lite';


const UpdatedoctorProfile = ({  route, navigation }) => {

    const {docid } = route.params;
    const [user, setUser] = useState({
        id:"",
        email: "",
        firstname: "",
        lastname: "",
        ic: "",
        dob: "",
        age: "",
        mobileno: "",
        city: "",
        hospital: "",
        speciality: ""
    });
    const userRef = doc(db, "user", docid);

    useEffect (() =>{
        getDoc(userRef)
        .then((res) =>{
            if(res.exists){
                const user = res.data();
               setUser({
                   doctorid: user.id,
                   email: user.useremail,
                   firstname: user.firstname,
                   lastname: user.lastname,
                   ic: user.ic,
                   dob: user.date,
                   age : user.age,
                   mobileno: user.mobileno,
                   city: user.city,
                   hospital: user.hospital,
                   speciality: user.speciality
               })
            console.log(user.useremail);
            }else{
                console.log('Not found data');
            }
        })
    },[])
    
    return(        
        <ScrollView style={styles.ScrollView}>  
        <SafeAreaView style={styles.container}>
            
            <Input 
                placeholder={user.email}
                placeholderTextColor="black"
                onChangeText={text => setEmail(text)} 
            />
            <Input 
                placeholder={user.email}
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
export default UpdatedoctorProfile;