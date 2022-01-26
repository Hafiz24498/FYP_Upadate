import React from "react";
import { Text, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView, TextInput } from 'react-native';

const EditProfile = ({navigation}) =>{
    return(        
        <ScrollView style={styles.ScrollView}>  
        <SafeAreaView style={styles.container}>
            <Text style={styles.Text}>Edit Profile</Text>
            <TextInput style={styles.TextInput}
                placeholder="Halabeedfd@gmail.com"
                placeholderTextColor="black" 
            />
            <TextInput style={styles.TextInput}
                placeholder="Nada"
                placeholderTextColor="black"
            />
            <TextInput style={styles.TextInput}
                placeholder="Halabee"
                placeholderTextColor="black"
            />
            <TextInput style={styles.TextInput}
                placeholder="092454543"
                keyboardType = "phone-pad"
                placeholderTextColor="black"
            />
            <TextInput style={styles.TextInput}
                placeholder="10-03-1998"
                //autoComplete = "birthdate-full"
                placeholderTextColor="black"
            />
            <TextInput style={styles.TextInput}
                placeholder="Bangkok Hospital"
                placeholderTextColor="black"
            />
            <TextInput style={styles.TextInput}
                placeholder="Phycoligist"
                placeholderTextColor="black"
            />
            <TouchableOpacity 
                style={styles.Button}
                onPress={() => navigation.navigate('DoctorProfile')} 
            >
                <Text style={styles.TextButton}>Save</Text>   
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
export default EditProfile;