import React, {useState, useEffect} from 'react';
import { View, StyleSheet, SafeAreaView, Image, ScrollView, Text, Alert, TouchableOpacity} from 'react-native';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import { TouchableRipple } from 'react-native-paper';
import { Divider } from 'react-native-elements';
import { getDoc, doc} from 'firebase/firestore/lite';
import { db, auth } from '../Firebase/Firebase-Config';
import { signOut } from 'firebase/auth';

const  DoctorProfile = ({ route, navigation }) => {

    const { userKey} = route.params;
    
    const isLoading = true;
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

    const userRef = doc(db, "user", userKey);

    useEffect (() =>{
        getDoc(userRef)
        .then((res) =>{
            if(res.exists){
                const user = res.data();
               setUser({
                   id: doc.id,
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

    const handlelogout = () => {
        try{
            signOut(auth);
            navigation.navigate('Login');
        }
        catch(error){
            Alert.alert(error.message);
        }
    }

    return(
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={{marginTop: 1, alignItems: 'center'}}>
                <Image
                source={require('../Images/Doctorlogo.png')}
                style={{width: 110, height: 120, resizeMode: 'stretch'}}
                />
            </View>
            <View style={styles.username}>
                <Text style={styles.title}>{user.firstname}  </Text>
                <Text style={styles.title}>{user.lastname}</Text>
            </View>
        <View style={styles.userInfoSection}>
            <View style={styles.row}>
                <Icon name="card-account-details" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{user.ic}</Text>
            </View>
            <View style={styles.row}>
                <Icon name="phone" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{user.mobileno}</Text>
            </View>
            <View style={styles.row}> 
                <Icon name="email" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{user.email}</Text>
            </View>
            <View style={styles.row}>
                <Icon name="calendar-month" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{user.dob}</Text>
            </View>
            <View style={styles.row}> 
                <FontIcon name="birthday-cake" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{user.age}</Text>
            </View>
            <View style={styles.row}>
                <Icon name="city-variant" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{user.city}</Text>
            </View>
            <View style={styles.row}>
                <Icon name="hospital-building" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{user.hospital}</Text>
            </View>
            <View style={styles.row}>
                <Icon name="doctor" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{user.speciality}</Text>
            </View>
        </View>
        <Divider/>
        <View style={styles.menuWrapper}>
            <TouchableRipple onPress={() => navigation.navigate('PatientListScreen', {usercity: user.city})}>
                <View style={styles.menuItem}>
                    <Icon name="heart-outline" color="#ff6347" size={25} />
                    <Text style={styles.menuItemText}>Patient</Text>
                </View>
            </TouchableRipple>
            <Divider />
            <TouchableRipple onPress={() => navigation.navigate('DoctorAppointment', {userfname: user.firstname, userlname: user.lastname})}>
                <View style={styles.menuItem}>
                    <Icon name="heart-outline" color="#ff6347" size={25} />
                    <Text style={styles.menuItemText}>Appointment</Text>
                </View>
            </TouchableRipple>
            <Divider />
            <TouchableRipple onPress={() => navigation.navigate('AddApointment', {hospital: user.hospital, doctorfname: user.firstname, doctorlname: user.lastname})}>
                <View style={styles.menuItem}>
                    <Icon name="heart-outline" color="#ff6347" size={25} />
                    <Text style={styles.menuItemText}>New Appointment</Text>
                </View>
            </TouchableRipple>
            <Divider />
            <TouchableRipple onPress={handlelogout}>
                <View style={styles.menuItem}>
                    <Icon name="heart-outline" color="#ff6347" size={25} />
                    <Text style={styles.menuItemText}>Log Out</Text>
                </View>
            </TouchableRipple>
            <Divider />
            {/* <TouchableRipple onPress={() => navigation.navigate('UpdatedoctorProfile', {docid: user.id})}>
                <View style={styles.menuItem}>
                    <Icon name="heart-outline" color="#ff6347" size={25} />
                    <Text style={styles.menuItemText}>Edit Profile</Text>
                </View>
            </TouchableRipple>
            <Divider /> */}
        </View>
        </ScrollView>
    </SafeAreaView>
    );

}
const styles = StyleSheet.create({
    container: {
        flex:1
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25
    },
    username:{
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 15
        },
    title:{
        fontSize: 25,
        fontWeight: "700"
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10
    },
    infoBoxWrapper:{
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      menuWrapper: {
        marginTop: 10,
      },
      menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
      },
      menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
      },
});
export default DoctorProfile;