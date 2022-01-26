import React, {useState, useEffect} from 'react';
import {  StyleSheet, FlatList, View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { db } from '../Firebase/Firebase-Config';
import { collection, query, where, getDocs} from 'firebase/firestore/lite';


const HospitalList = ({ route, navigation }) => {
    
    const { patientCity } = route.params;
    const [hospital, setHospital] = useState([]);

    const q = query(collection(db, "Hospital"), where("state", "==", patientCity));

    useEffect (() =>{
       const getHospital = async() => {
           const data = await getDocs(q);        
           setHospital(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
        }
        getHospital()
    }, []);

    const Item = ({ HospitalName, type, phoneno, state, address1, address2, postno, bed, Category, service1, service2, service3,
    service4,service5,picture }) => (
        <View style={styles.item}>
            <TouchableOpacity
            onPress={() => navigation.navigate('DoctorList', {hospitalKey: HospitalName})}>
            <View style={{ alignItems: 'center'}}>
                <Image
                source={{uri: picture}}
                style={{width: 380, height: 220, borderRadius:3}}
                />
            </View>
            <View style={styles.username}>
                <Text style={styles.title}>{HospitalName}  </Text>
            </View>
        <View style={styles.userInfoSection}>
            <View style={styles.row}>
                <Icon name="card-account-details" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{type},  {Category}</Text>
            </View>
            <View style={styles.row}>
                <Icon name="phone" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{phoneno}</Text>
            </View>
            <View style={styles.row}> 
                <Icon name="city-variant" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{state}</Text>
            </View>
            <View style={styles.row}>
                <Icon name="city-variant" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{address1}</Text>
            </View>
            <View style={styles.row}>
                <Icon name="city-variant" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{postno}, {address2}</Text>
            </View>
            <View style={styles.row}>
                <Icon name="bed" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{bed} Beds</Text>
            </View>
            <View style={styles.row}>
                <Text style={{color:"#777777", fontSize:20, fontWeight: 'bold'}}>Service:</Text>
            </View>
            <View style={styles.row}>
                <Icon name="circle-medium" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{service1}</Text>
            </View>
            <View style={styles.row}>
                <Icon name="circle-medium" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{service2}</Text>
            </View>
            <View style={styles.row}>
                <Icon name="circle-medium" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{service3}</Text>
            </View>
            <View style={styles.row}>
                <Icon name="circle-medium" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{service4}</Text>
            </View>
            <View style={styles.row}>
                <Icon name="circle-medium" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{service5}</Text>
            </View>
        </View>
        </TouchableOpacity>
        </View>
      );

      const renderItem = ({ item }) => (
        <Item HospitalName={item.Hospitalname}
        type={item.type}
        phoneno={item.phoneno}
        state={item.state}
        address1={item.address1}
        address2={item.address2}
        postno={item.postno}
        bed={item.bed}
        Category={item.Category}
        service1={item.service1}
        service2={item.service2}
        service3={item.service3}
        service4={item.service4}
        service5={item.service5}
        picture={item.picture}/>
      );
    return(
        <SafeAreaView style={styles.container}>
            {/* {hospital.map((hospital) =>{
                return (
                <ListItem
                    bottomDivider
                    onPress={() => navigation.navigate('DoctorList', {hospitalKey: hospital.HospitalName})}
                    horizontal
                >
                    <Icon name='hospital-building' size={20} />
                    <ListItem.Content>
                    <ListItem.Title>{hospital.HospitalName}</ListItem.Title>
                    <ListItem.Subtitle>{hospital.type}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
             ); })} */}
             <FlatList
                data={hospital}
                renderItem={renderItem}
                horizontal
                />
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
      },
    item: {
        backgroundColor: '#e8e8e8',
        padding: 20,
        marginTop: 20,
        marginHorizontal: 16,
        borderRadius: 8,
        height: 670,
        width: 380
      },
      title: {
        fontSize: 32,
        color: 'white'
      },
      hospital:{
        alignItems: 'center'
    },
    userInfoSection: {
      paddingHorizontal: 15,
      marginBottom: 25
  },
  username:{
      justifyContent: 'center',
      flexDirection: 'row',
      margin: 15
      },
  title:{
      fontSize: 25,
      fontWeight: "700",
      color: '#d2691e'
  },
  row: {
      flexDirection: 'row',
      marginBottom: 10
  },
});
export default HospitalList;