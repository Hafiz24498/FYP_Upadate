import React, {useState, useEffect} from 'react';
import { StyleSheet, ScrollView, Alert} from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import { db } from '../Firebase/Firebase-Config';
import { collection, query, where, getDocs, doc, deleteDocs} from 'firebase/firestore/lite';

const DoctorAppointment = ({ route, navigation }) => {

    const { userfname, userlname } = route.params;
    const [appointment, setAppointment] = useState([]);

    console.log(appointment);

    const appointmentRef = query(collection(db, "appointment"), where("doctorfname", "==", userfname));

    useEffect (() =>{
        const getAppointment = async() => {
            const data = await getDocs(appointmentRef);        
            setAppointment(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
            console.log(appointment);
         }
         getAppointment()
     }, []);

     const deletebutton =  (item) =>{
         try{
             deleteDocs(doc(db,'appointment', item));
            Alert.alert('Delete Appointment Succesful');
         }
         catch(error){
             Alert.alert(error.message);
         }
     }

    return(
        <ScrollView>
            {appointment.map((appointment) =>{
                return (
                <ListItem.Swipeable
                    bottomDivider
                    //onPress={() => navigation.navigate('DoctorList')}
                    // rightContent={
                    //     <Button
                    //         title="Delete"
                    //         buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }} 
                    //         //onPress={() => deletebutton(appointment.id)}
                    //         />
                    // }
                >
                    <ListItem.Content>   
                    <ListItem.Title>{appointment.patientfname} {appointment.patientlname}</ListItem.Title>
                    <ListItem.Subtitle>{appointment.appointmentdate}</ListItem.Subtitle>
                    </ListItem.Content> 
                </ListItem.Swipeable>
             ); })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    HeaderBox:{
        backgroundColor:'#d2691e',
        height: 230,
        //margin: 5,
        //borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    HeaderText:{
        fontWeight: 'bold',
        fontSize: 38,
        paddingTop: 60,
        color: 'white'
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
        
      },
      ScrollView:{
          margin: 1,
      }
});
export default DoctorAppointment;