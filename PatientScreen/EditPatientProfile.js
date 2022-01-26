import React, {useState} from 'react';
import { Text, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView, TextInput } from 'react-native';

const EditPatientProfile = ({ navigation }) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return(        
        <ScrollView style={styles.ScrollView}>  
        <SafeAreaView style={styles.container}>
            {/* <Text style={styles.Text}>Add Patient</Text> */}
            <TextInput style={styles.TextInput}
                placeholder="E-mail"
                placeholderTextColor="black" 
            />
            <TextInput style={styles.TextInput}
                placeholder="First Name"
                placeholderTextColor="black"
            />
            <TextInput style={styles.TextInput}
                placeholder="Last Name"
                placeholderTextColor="black"
            />
            <TextInput style={styles.TextInput}
                placeholder="Mobile No"
                keyboardType = "phone-pad"
                placeholderTextColor="black"
            />
            <TextInput style={styles.TextInput}
                placeholder="Date of Birth"
                //autoComplete = "birthdate-full"
                placeholderTextColor="black"
            />
            <TextInput style={styles.TextInput}
                placeholder="Height"
                placeholderTextColor="black"
            />
            <TextInput style={styles.TextInput}
                placeholder="Weight"
                placeholderTextColor="black"
            />
            <TextInput style={styles.TextInput}
                placeholder="Blood Pressure"
                placeholderTextColor="black"
            />
            <TextInput style={styles.TextInput}
            placeholder="Heart Rate"
            placeholderTextColor="black"
        />
            <TouchableOpacity 
                style={styles.Button}
                onPress={() => navigation.navigate('PatientList')} 
            >
                <Text style={styles.TextButton}>Edit</Text>   
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
export default EditPatientProfile;