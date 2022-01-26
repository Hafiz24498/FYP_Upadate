import React, {useState} from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image, Alert } from 'react-native';
import { Input } from 'react-native-elements';
import { auth } from '../Firebase/Firebase-Config';
import { signInWithEmailAndPassword } from 'firebase/auth';

const PatientLogin = ({ navigation }) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const Patientsignin = async () => {
        try{
        const patient = await signInWithEmailAndPassword( auth, email, password)
       .then((res) =>{
           navigation.navigate('Patientprofile', {patientKey: res.user.uid})
           setEmail('')
        setPassword('')
       })}
       catch(errer){
           Alert.alert(errer.message);
       }
    }

    return(
        <View style={styles.container}>
            <Image style={styles.Image} source={require('../Images/Patient.png')} />
            <Text style={styles.Text}>Doctor Care</Text>
            <Input
                placeholder='  E-mail'
                onChangeText={text=>setEmail(text)}
                leftIcon={{type:'font-awesome', name:'user'}}
                
                />
            <Input
                placeholder='  Password'
                onChangeText={text=>setPassword(text)}
                leftIcon={{type:'font-awesome', name:'lock'}}
                secureTextEntry
                />
            <TouchableOpacity 
                style={styles.Button}
               onPress={Patientsignin} 
            >
                <Text style={styles.TextButton}>Login</Text>   
            </TouchableOpacity>
             <TouchableOpacity style={styles.ButtonText}
                onPress={() => navigation.navigate('PatientRegister')}
            >
                <Text style={styles.SignupText}>Have you an account?  Sign up</Text>
            </TouchableOpacity> 
        </View>

    );

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: 110,
        padding: 20,
        alignItems: 'center',
    },
    Image: {
        width: 130,
        height: 150,
    },
    Text:{
        fontWeight: 'bold',
        color: '#d2691e',
        fontSize: 30,
        paddingTop: 20,
        paddingBottom: 40
    },
    TextInput: {
        backgroundColor: '#e8e8e8',
        width: '100%',
        padding: 20,
        borderRadius: 8,
        marginVertical: 10,
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
    ButtonText:{
        width: '100%',
        //padding: 1,
        borderRadius: 8,
        //marginVertical: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextButton:{
        color: 'white',
        fontWeight: '600',
        fontSize: 20,
    },
    SignupText:{
        color: 'blue',
        fontWeight: '600',
        fontSize: 14,
    }
});
export default PatientLogin;