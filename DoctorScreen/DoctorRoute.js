// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { TouchableOpacity} from 'react-native';
// import  Icon  from 'react-native-vector-icons/Ionicons';

// import DoctorProfile from './DoctorProfile';
// import DoctorAppointment from './DoctorAppointment';
// import PatientList from './PatientList';
// import PatientInfo from './PatientInfo';
// import AppointmentInfo from './AppointmentInfo';
// import AddPatient from './AddPatient';
// import AddApointment from './AddApointment';
// import EditProfile from './EditProfile';
// import TreatmentScreen from './TreatmentScreen';
// import MedicineScreen from './MedicineScreen';
// import AddMedicine from './AddMedicine';
// import AddTreatment from './AddTreatment';

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// const DoctorProfileScreen =({ navigation }) => {
//     return(
//         <Stack.Navigator initialRouteName="PatientList">
//         <Stack.Screen
//             name="DoctorProfile"
//             component={DoctorProfile} 
//             options={{
//                 headerRight: () => ( 
//                     <TouchableOpacity 
//         onPress={() => navigation.navigate('EditProfile')}>
//         <MaterialCommunityIcon name="account-edit" size={28} color='white'/>
//     </TouchableOpacity>    
//                 ),
//                 headerStyle: { backgroundColor: '#d2691e'},
//                 headerTintColor: '#fff',
//                 headerTitleStyle: { fontWeight: 'bold', fontSize: 20},
//             }}/>
//         <Stack.Screen
//             name="EditProfile"
//             component={EditProfile}
//             />
//     </Stack.Navigator>
//     );
// }

// const PatientListScreen = ({ navigation }) => {
//     return (
//             <Stack.Navigator initialRouteName="PatientList">
//                 <Stack.Screen
//                     name="PatientList"
//                     component={PatientList} 
//                     options={{
//                         headerRight: () => ( 
//                             <TouchableOpacity 
//                 onPress={() => navigation.navigate('AddPatient')}>
//                 <Icon name="md-person-add-sharp" size={23} color='white'/>
//             </TouchableOpacity>    
//                         ),
//                         headerStyle: { backgroundColor: '#d2691e'},
//                         headerTintColor: '#fff',
//                         headerTitleStyle: { fontWeight: 'bold', fontSize: 20},
//                     }}/>
//                 <Stack.Screen
//                     name="PatientInfo"
//                     component={PatientInfo} />
//                 <Stack.Screen
//                     name="AddPatient"
//                     component={AddPatient} 
//                     options={{
//                         headerStyle: { backgroundColor: '#d2691e'},
//                         headerTintColor: '#fff',
//                         headerTitleStyle: { fontWeight: 'bold', fontSize: 20},
//                     }}/>
//                     <Stack.Screen
//                         name="TreatmentScreen"
//                         component={TreatmentScreen} 
//                         options={{
//                             headerRight: () => ( 
//                                 <TouchableOpacity 
//                     onPress={() => navigation.navigate('AddTreatment')}>
//                     <Icon name="md-person-add-sharp" size={23} color='white'/>
//                 </TouchableOpacity>    
//                             ),
//                             headerStyle: { backgroundColor: '#d2691e'},
//                             headerTintColor: '#fff',
//                             headerTitleStyle: { fontWeight: 'bold', fontSize: 20},
//                         }}/>
//                         <Stack.Screen
//                         name="MedicineScreen"
//                         component={MedicineScreen} 
//                         options={{
//                             headerRight: () => ( 
//                                 <TouchableOpacity 
//                     onPress={() => navigation.navigate('AddMedicine')}>
//                     <Icon name="md-person-add-sharp" size={23} color='white'/>
//                 </TouchableOpacity>    
//                             ),
//                             headerStyle: { backgroundColor: '#d2691e'},
//                             headerTintColor: '#fff',
//                             headerTitleStyle: { fontWeight: 'bold', fontSize: 20},
//                         }}/>
//                         <Stack.Screen
//                     name="AddMedicine"
//                     component={AddMedicine} 
//                     options={{
//                         headerStyle: { backgroundColor: '#d2691e'},
//                         headerTintColor: '#fff',
//                         headerTitleStyle: { fontWeight: 'bold', fontSize: 20},
//                     }}/>
//                     <Stack.Screen
//                     name="AddTreatment"
//                     component={AddTreatment} 
//                     options={{
//                         headerStyle: { backgroundColor: '#d2691e'},
//                         headerTintColor: '#fff',
//                         headerTitleStyle: { fontWeight: 'bold', fontSize: 20},
//                     }}/>
//             </Stack.Navigator>
        
//     );
// };

// const AppointmentScreen = ({ navigation }) => {
//     return (
        
//             <Stack.Navigator initialRouteName="DoctorAppointment">
//                 <Stack.Screen
//                     name="DoctorAppointment"
//                     component={DoctorAppointment}
//                     options={{
//                         title: 'Appointment',
//                         headerStyle: { backgroundColor: '#d2691e'},
//                         headerTintColor: '#fff',
//                         headerTitleStyle: { fontWeight: 'bold', fontSize: 20},
//                         }} />
//                 <Stack.Screen
//                     name="AppointmentInfo"
//                     component={AppointmentInfo} />
//                 <Stack.Screen
//                     name="AddApointment"
//                     component={AddApointment} />
//             </Stack.Navigator>
        
//     );
// };

// const DoctorRoute = () => {
//     return(
//         <Tab.Navigator
//             initialRouteName="DoctorProfileScreen"
//             screenOptions={{ tabBarActiveTintColor: '#d2691e', }}>
//                 <Tab.Screen
//                     name="DoctorProfileScreen"
//                     component={DoctorProfileScreen}
//                     options={{
//                         tabBarLabel: 'Profile',
//                         tabBarIcon: ({ color, size}) =>(
//                             <MaterialCommunityIcon name="face-profile" color={color} size={size}
//                              />
//                         ), headerShown: false
//                     }}
//                 />
//                 <Tab.Screen
//                     name="PatientListScreen"
//                     component={PatientListScreen}
//                     options={{
//                         tabBarLabel: 'Patient',
//                         tabBarIcon: ({ color, size}) =>(
//                             <MaterialCommunityIcon name="human-wheelchair" color={color} size={size} />
//                         ), headerShown: false
//                     }}
//                 />
//                 <Tab.Screen
//                     name="AppointmentScreen"
//                     component={AppointmentScreen}
//                     options={{
//                         tabBarLabel: 'Appointment',
//                         tabBarIcon: ({ color, size}) =>(
//                             <MaterialCommunityIcon name="calendar" color={color} size={size} />
//                         ), headerShown: false,
//                     }}
//                 />
//         </Tab.Navigator>

//     );
// };

// export default DoctorRoute;