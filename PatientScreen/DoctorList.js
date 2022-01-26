import React, {useState, useEffect} from 'react';
import {  StyleSheet,SafeAreaView, View, Text, FlatList, Image} from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import { db } from '../Firebase/Firebase-Config';
import { collection, query, where, getDocs} from 'firebase/firestore/lite';


const DoctorList = ({ route, navigation }) => {
    
    const { hospitalKey } = route.params;
    const [doctor, setDoctor] = useState([]);

    const q = query(collection(db, "user"), where("hospital", "==", hospitalKey));

    useEffect (() =>{
       const getHospital = async() => {
           const data = await getDocs(q);        
           setDoctor(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
            //console.log(hospital);
        }
        getHospital()
    }, []);

    const Item = ({ firstname, lastname, ic, dob, age, email, city, hospital, speciality, mobileno }) => (
            <View style={styles.item}>
                <View style={{marginTop: 1, alignItems: 'center'}}>
                <Image
                source={require('../Images/Doctorlogo.png')}
                style={{width: 110, height: 120, resizeMode: 'stretch'}}
                />
            </View>
            <View style={styles.username}>
                <Text style={styles.title}>{firstname}  </Text>
                <Text style={styles.title}>{lastname}</Text>
            </View>
        <View style={styles.userInfoSection}>
            <View style={styles.row}>
                <Icon name="card-account-details" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{ic}</Text>
            </View>
            <View style={styles.row}>
                <Icon name="phone" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{mobileno}</Text>
            </View>
            <View style={styles.row}> 
                <Icon name="email" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{email}</Text>
            </View>
            <View style={styles.row}>
                <Icon name="calendar-month" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{dob}</Text>
            </View>
            <View style={styles.row}> 
                <FontIcon name="birthday-cake" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{age}</Text>
            </View>
            <View style={styles.row}>
                <Icon name="city-variant" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{city}</Text>
            </View>
            <View style={styles.row}>
                <Icon name="hospital-building" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{hospital}</Text>
            </View>
            <View style={styles.row}>
                <Icon name="doctor" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>{speciality}</Text>
            </View>
        </View>
            </View>
          );
    
          const renderItem = ({ item }) => (
            <Item 
            firstname={item.firstname}
            lastname={item.lastname}
            email={item.useremail}
            ic={item.ic}
            dob={item.date}
            age={item.age}
            mobileno={item.mobileno}
            city={item.city}
            hospital={item.hospital}
            speciality={item.speciality}
            />
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
                    data={doctor}
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
            marginTop: 50,
            marginHorizontal: 16,
            borderRadius: 8,
            height: 500,
            width: 300
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
    export default DoctorList;