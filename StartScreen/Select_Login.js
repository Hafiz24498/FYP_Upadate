import React from 'react'
import {View, Image, StyleSheet, TouchableOpacity, Text, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


    const Select_Login = ({ navigation }) => {
   
        return (
            
            <View
            style={{
                flex: 1,
            }}>
            <LinearGradient colors={['#BE93C5', '#7BC6CC']} style={{flex:1}}>
            <Text style = {styles.Text}>Login as</Text>
            
            
            <View style={styles.container}>
             <TouchableOpacity  onPress={()=>navigation.navigate("Auth")}>
              <Image style={styles.doctor} source={require("../Images/Doctor.png")}/>
             </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate("PatientAuth")} >
              <Image style={styles.patient} source={require("../Images/Patient.png")}/>
            </TouchableOpacity>
           </View>
            <View style={styles.containertext}>
            <TouchableOpacity style={styles.loginAsText} 
            onPress={()=>navigation.navigate("Auth")}>
              <Text style = {{color: '#ffffff', marginStart: 100, fontSize: 20}}>Doctor</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginAsText}
            onPress={() => navigation.navigate("PatientAuth")} >
              <Text style = {{color: '#ffffff', marginStart: 110, fontSize: 20}}>Patient</Text>
            </TouchableOpacity>
            </View>
            </LinearGradient>
            </View>
            
        );
    }

export default Select_Login;

const styles = StyleSheet.create({
    Text : {
    color: '#ffffff',
    fontFamily: 'GoogleSans-Bold',
    fontSize: 30,
    fontWeight: '300',
    paddingTop: 100,
    flexDirection: 'column',
    textAlign: 'center',
    },
    container: {
        width: 100,
        height: 100,
        paddingTop: 50,
        flexDirection: 'row',
    },
    doctor : {
        marginTop: 20,
        marginStart: 70,
        width: 120,
        height: 120
    },
    patient : {
        marginTop: 20, 
        marginStart: 50,
        //marginEnd: 10,
        width: 120,
        height: 120
    },
    loginAsText : {
        color: '#ffffff',
        paddingTop: 110,
        fontFamily: 'GoogleSans-Bold',
        flexDirection: 'row',
        fontSize: 30,
    },
    containertext:{
        flexDirection: 'row'
    }
});