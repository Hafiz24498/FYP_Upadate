import React, {useState, useEffect} from 'react';
import {  StyleSheet, ScrollView} from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { db } from '../Firebase/Firebase-Config';
import { collection, query, where, getDocs} from 'firebase/firestore/lite';


const PatientList = ({ route, navigation }) => {
    
    const { usercity } = route.params;
    const [patient, setPatient] = useState([]);

    const q = query(collection(db, "patientuser"), where("city", "==", usercity));

    useEffect (() =>{
       const getHospital = async() => {
           const data = await getDocs(q);        
           setPatient(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
            //console.log(hospital);
        }
        getHospital()
    }, []);

    return(
        <ScrollView>
            {patient.map((patient) =>{
                return (
                <ListItem
                    bottomDivider
                    onPress={() => navigation.navigate('PatientInfo', {patientid: patient.patientid})}
                >
                    <Icon name='hospital-building' size={20} />
                    <ListItem.Content>
                    <ListItem.Title>{patient.firstname}  {patient.lastname}</ListItem.Title>
                    <ListItem.Subtitle>{patient.date}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
             ); })}
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    HeaderBox:{
        backgroundColor:'#d2691e',
        height: 230,
        alignItems: 'center',
        justifyContent: 'center'
    },
    HeaderText:{
        fontWeight: 'bold',
        fontSize: 38,
        paddingTop: 60,
        color: 'white'
    }
});
export default PatientList;