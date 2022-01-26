import React, {useEffect, useState} from 'react';
import { Text, TouchableOpacity, View, StyleSheet, ScrollView} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { db } from '../Firebase/Firebase-Config';
import { query, where, getDocs, collection } from 'firebase/firestore/lite';

const PatientTreatment = ({ route ,navigation }) => {

    const { pfname } = route.params;
    const [ treatment, setTreament] = useState([]);

    const q = query(collection(db,"treatment"), where("pfname", "==", pfname));

    useEffect (() =>{
        const getTreatment = async() => {
            const data = await getDocs(q);        
            setTreament(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
             //console.log(hospital);
         }
         getTreatment()
     }, []);
 
  
    return(
        <ScrollView>
            {treatment.map((treatment) =>{
                return (
                <ListItem
                    bottomDivider
                    //onPress={() => navigation.navigate('PatientInfo', {patientid: patient.patientid})}
                >
                    <ListItem.Content>
                    <ListItem.Title>{treatment.sickness}</ListItem.Title>
                    <ListItem.Subtitle>{treatment.tdate}</ListItem.Subtitle>
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
export default PatientTreatment;