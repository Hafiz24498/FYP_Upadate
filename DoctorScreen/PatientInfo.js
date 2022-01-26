import React, {useState, useEffect} from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Image} from 'react-native';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import { Text, TouchableRipple} from 'react-native-paper';
import { db } from '../Firebase/Firebase-Config';
import { doc, getDoc } from 'firebase/firestore/lite';

const PatientInfo = ({ route ,navigation }) => {

    const { patientid } = route.params;

    const [patientinfo, setPatientinfo] =useState({
        id: '',
        email: '',
        firstname: '',
        lastname: '',
        ic: '',
        dob: '',
        age: '',
        mobileno: '',
        city: '',
        height: '',
        wieght:'',
        bloodtype: ''
    })

    const userRef = doc(db, "patientuser", patientid);

    useEffect (() =>{
        getDoc(userRef)
        .then((res) =>{
            if(res.exists){
                const user = res.data();
               setPatientinfo({
                   id: doc.id,
                   email: user.useremail,
                   firstname: user.firstname,
                   lastname: user.lastname,
                   ic: user.ic,
                   dob: user.date,
                   age : user.age,
                   mobileno: user.mobileno,
                   city: user.city,
                   height: user.hieght,
                   wieght: user.wieght,
                   bloodtype: user.bloodtype
               })
            //console.log(user.useremail);
            }else{
                console.log('Not found data');
            }
        })
    },[])

    return(
    <ScrollView>  
    <SafeAreaView style={styles.container}>
        <View style={{marginTop: 25, alignItems: 'center'}}>
                <Image
                source={require('../Images/Patient.png')}
                style={{width: 110, height: 120, resizeMode: 'stretch'}}
                />
            </View>
            <View style={styles.username}>
                <Text style={styles.title}>{patientinfo.firstname}  </Text>
                <Text style={styles.title}>{patientinfo.lastname}</Text>
            </View>
        <View style={styles.userInfoSection}>
            <View style={styles.row}>
                <Icon name="card-account-details" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{patientinfo.ic}</Text>
            </View>
            <View style={styles.row}>
                <Icon name="calendar-month" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{patientinfo.dob}</Text>
            </View>
            <View style={styles.row}> 
                <FontIcon name="birthday-cake" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{patientinfo.age}</Text>
            </View>
            <View style={styles.row}>
                <Icon name="email" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{patientinfo.email}</Text>
            </View>
            <View style={styles.row}>
                <Icon name="phone" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{patientinfo.mobileno}</Text>
            </View>
            <View style={styles.row}>
                <Icon name="city-variant" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{patientinfo.city}</Text>
            </View>
            <View style={styles.row}>
                <Icon name="human-male-height" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{patientinfo.height}</Text>
            </View>
            <View style={styles.row}>
                <Icon name="weight-kilogram" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{patientinfo.wieght}</Text>
            </View>
            <View style={styles.row}>
                <Icon name="blood-bag" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{patientinfo.bloodtype}</Text>
            </View>
        </View>
        {/* <View style={styles.infoBoxWrapper}>
            <View style={styles.infoBox}>
                <Title>110/70</Title>
                <Caption>Blood Pressure</Caption>
            </View>
            <View style={styles.infoBox}>
                <Title>80</Title>
                <Caption>Heart Rate</Caption>
            </View>
        </View> */}
        <View style={styles.menuWrapper}>
        {/* <TouchableRipple onPress={() => navigation.navigate('PatientLogin')}>
                <View style={styles.menuItem}>
                    <Icon name="pharmacy" color="#ff6347" size={25} />
                    <Text style={styles.menuItemText}>Medicine</Text>
                </View>
            </TouchableRipple> */}
            <TouchableRipple onPress={() => navigation.navigate('Treatment', {pfname: patientinfo.firstname, plname: patientinfo.lastname})}>
                <View style={styles.menuItem}>
                    <Icon name="history" color="#ff6347" size={25} />
                    <Text style={styles.menuItemText}>treatment history</Text>
                </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => navigation.navigate('AddTreatment', {pfname: patientinfo.firstname, plname: patientinfo.lastname})}>
                <View style={styles.menuItem}>
                    <Icon name="history" color="#ff6347" size={25} />
                    <Text style={styles.menuItemText}>Add treatment</Text>
                </View>
            </TouchableRipple>
            {/* <TouchableRipple onPress={() => navigation.navigate('HospitalList', {patientCity: patientuser.city})}>
                <View style={styles.menuItem}>
                    <Icon name="hospital-building" color="#ff6347" size={25} />
                    <Text style={styles.menuItemText}>Hospital</Text>
                </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => navigation.navigate('PatientLogin')}>
                <View style={styles.menuItem}>
                    <Icon name="calendar" color="#ff6347" size={25} />
                    <Text style={styles.menuItemText}>Appointment</Text>
                </View>
            </TouchableRipple> */}
        </View>
    </SafeAreaView>
    </ScrollView>
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
export default PatientInfo;