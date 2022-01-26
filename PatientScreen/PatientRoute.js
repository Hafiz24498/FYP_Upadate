// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { TouchableOpacity} from 'react-native';
// import  Icon  from 'react-native-vector-icons/Ionicons';

// import PatientProfile from './PatientProfile';
// import EditPatientProfile from './EditPatientProfile';
// import PatientMedicineList from './PatientMedicineList';
// import MedicineDetail from './MedicineDetail';
// import HospitalList from './HospitalList';
// import DoctorList from './DoctorList';
// import DoctorDetail from './DoctorDetail';

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// const PatientProfileScreen =({ navigation }) => {
//     return(
//         <Stack.Navigator initialRouteName="PatientProfile">
//         <Stack.Screen
//             name="PatientProfile"
//             component={PatientProfile} 
//             options={{
//                 headerRight: () => ( 
//                     <TouchableOpacity 
//         onPress={() => navigation.navigate('EditPatientProfile')}>
//         <MaterialCommunityIcon name="account-edit" size={28} color='white'/>
//     </TouchableOpacity>    
//                 ),
//                 headerStyle: { backgroundColor: '#d2691e'},
//                 headerTintColor: '#fff',
//                 headerTitleStyle: { fontWeight: 'bold', fontSize: 20},
//             }}/>
//         <Stack.Screen
//             name="EditPatientProfile"
//             component={EditPatientProfile}
//             options={{headerStyle: { backgroundColor: '#d2691e'},
//             headerTintColor: '#fff',
//             headerTitleStyle: { fontWeight: 'bold', fontSize: 20},}}
//             />
//     </Stack.Navigator>
//     );
// }

// const PatientMedicineScreen =({ navigation }) => {
//     return(
//         <Stack.Navigator initialRouteName="PatientMedicineList">
//         <Stack.Screen
//             name="PatientMedicineList"
//             component={PatientMedicineList}
//             options={{headerStyle: { backgroundColor: '#d2691e'},
//             headerTintColor: '#fff',
//             headerTitleStyle: { fontWeight: 'bold', fontSize: 20},}}
//         />
//         <Stack.Screen
//             name="MedicineDetail"
//             component={MedicineDetail}
//             options={{headerStyle: { backgroundColor: '#d2691e'},
//             headerTintColor: '#fff',
//             headerTitleStyle: { fontWeight: 'bold', fontSize: 20},}}
//             />
//     </Stack.Navigator>
//     );
// }

// const HospitalScreen =({ navigation }) => {
//     return(
//         <Stack.Navigator initialRouteName="HospitalList">
//         <Stack.Screen
//             name="HospitalList"
//             component={HospitalList}
//             options={{headerStyle: { backgroundColor: '#d2691e'},
//             headerTintColor: '#fff',
//             headerTitleStyle: { fontWeight: 'bold', fontSize: 20},}}
//         />
//         <Stack.Screen
//             name="DoctorList"
//             component={DoctorList}
//             options={{headerStyle: { backgroundColor: '#d2691e'},
//             headerTintColor: '#fff',
//             headerTitleStyle: { fontWeight: 'bold', fontSize: 20},}}
//             />
//             <Stack.Screen
//             name="DoctorDetail"
//             component={DoctorDetail}
//             options={{headerStyle: { backgroundColor: '#d2691e'},
//             headerTintColor: '#fff',
//             headerTitleStyle: { fontWeight: 'bold', fontSize: 20},}}
//             />
//     </Stack.Navigator>
//     );
// }

// const PatientRoute = () => {
//     return(
//         <Tab.Navigator
//             initialRouteName="PatientProfileScreen"
//             screenOptions={{ tabBarActiveTintColor: '#d2691e', }}>
//                 <Tab.Screen
//                     name="PatientProfileScreen"
//                     component={PatientProfileScreen}
//                     options={{
//                         tabBarLabel: 'Profile',
//                         tabBarIcon: ({ color, size}) =>(
//                             <MaterialCommunityIcon name="face-profile" color={color} size={size}
//                              />
//                         ), headerShown: false
//                     }}
//                 />
//                 <Tab.Screen
//                 name="PatientMedicineScreen"
//                 component={PatientMedicineScreen}
//                 options={{
//                     tabBarLabel: 'Medicine',
//                     tabBarIcon: ({ color, size}) =>(
//                         <MaterialCommunityIcon name="face-profile" color={color} size={size}
//                          />
//                     ), headerShown: false
//                 }}
//             />
//             <Tab.Screen
//                 name="HospitalScreen"
//                 component={HospitalScreen}
//                 options={{
//                     tabBarLabel: 'Hospital',
//                     tabBarIcon: ({ color, size}) =>(
//                         <MaterialCommunityIcon name="face-profile" color={color} size={size}
//                          />
//                     ), headerShown: false
//                 }}
//             />
//         </Tab.Navigator>

//     );
// };

// export default PatientRoute;