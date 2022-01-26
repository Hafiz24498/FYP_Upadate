import React, {useState} from 'react';
import { Text, TouchableOpacity, View, StyleSheet, ScrollView} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/Ionicons';

const PatientMedicineList = ({ navigation }) => {
    const list=[
        {
            Name:'paracetamal',
            avatar:'../Images/Doctorlogo.png'
        },
        {
            Name:'Affan Mark',
            avatar:'../Images/Doctorlogo.png'
        },
        {
            Name:'Masree madu',
            avatar:'../Images/Doctorlogo.png'
        }
    ]
    return(
        <View>
        <View>
            <ScrollView>
                {
                    list.map((l,i) => (
                        <ListItem key={i} bottomDivider
                        onPress={() => navigation.navigate('MedicineDetail')}
                        >
                            <ListItem.Content>
                                <ListItem.Title>{l.Name}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    ))
                }
            </ScrollView>
        </View>
        </View>
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
export default PatientMedicineList;