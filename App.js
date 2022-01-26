import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DoctorLogin from './DoctorAuthScreen/DoctorLogin';
import DoctorRegister from './DoctorAuthScreen/DoctorRegister';

import SplashScreen from './StartScreen/SplashScreen';
import Select_Login from './StartScreen/Select_Login';

import PatientLogin from './PatientAuthScreen/PatientLogin';
import PatientRegister from './PatientAuthScreen/PatientRegister';

import DoctorProfile from './DoctorScreen/DoctorProfile';
import DoctorAppointment from './DoctorScreen/DoctorAppointment';
import PatientList from './DoctorScreen/PatientList';
import PatientInfo from './DoctorScreen/PatientInfo';
import AddApointment from './DoctorScreen/AddApointment';
import TreatmentScreen from './DoctorScreen/TreatmentScreen';
import AddTreatment from './DoctorScreen/AddTreatment';
import UpdatedoctorProfile from './DoctorScreen/UpdatedoctorProfile';

import PatientProfile from './PatientScreen/PatientProfile';
import HospitalList from './PatientScreen/HospitalList';
import DoctorList from './PatientScreen/DoctorList';
import DoctorDetail from './PatientScreen/DoctorDetail';
import PatientTreatment from './PatientScreen/PatientTreatment';
import PatientAppointment from './PatientScreen/PatientAppointment';

const Stack = createNativeStackNavigator();

const Auth =() => {
  return (
    <Stack.Navigator initialRouteName="DoctorLogin">
        <Stack.Screen name="Login" component={DoctorLogin} 
          options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={DoctorRegister} 
          options={{ headerShown: false}}/>
          <Stack.Screen
          name="DoctorProfile"
          component={DoctorProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='PatientList'
          component={PatientList} 
          options={{
            headerStyle: { backgroundColor: '#d2691e'},
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold', fontSize: 20}
            }}/>
            <Stack.Screen
          name='PatientInfo'
          component={PatientInfo} 
          options={{
            headerStyle: { backgroundColor: '#d2691e'},
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold', fontSize: 20}
            }}/>
            <Stack.Screen
          name='DoctorAppointment'
          component={DoctorAppointment} 
          options={{
            headerStyle: { backgroundColor: '#d2691e'},
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold', fontSize: 20}
            }}/>
            <Stack.Screen
          name='AddApointment'
          component={AddApointment} 
          options={{
            headerStyle: { backgroundColor: '#d2691e'},
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold', fontSize: 20}
            }}/>
            <Stack.Screen
          name='AddTreatment'
          component={AddTreatment} 
          options={{
            headerStyle: { backgroundColor: '#d2691e'},
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold', fontSize: 20}
            }}/>
            <Stack.Screen
            name='Treatment'
            component={TreatmentScreen} 
            options={{
              headerStyle: { backgroundColor: '#d2691e'},
              headerTintColor: '#fff',
              headerTitleStyle: { fontWeight: 'bold', fontSize: 20}
              }}/>
              <Stack.Screen
            name='UpdatedoctorProfile'
            component={UpdatedoctorProfile} 
            options={{
              headerStyle: { backgroundColor: '#d2691e'},
              headerTintColor: '#fff',
              headerTitleStyle: { fontWeight: 'bold', fontSize: 20}
              }}/>
      </Stack.Navigator> 
  );
}

const Splash =() => {
  return(
  <Stack.Navigator initialRouteName="SplashScreen">
    <Stack.Screen 
      name="SplashScreen"
      component={SplashScreen}
      options={{headerShown: false}} />
    <Stack.Screen
      name="Select_Login"
      component={Select_Login}
      options={{headerShown: false}} />
  </Stack.Navigator>
  );
}

const PatientAuth = () => {
  return(
    <Stack.Navigator initialRouteName="PatientLogin">
      <Stack.Screen
        name="PatientLogin"
        component={PatientLogin}
        options={{headerShown: false}}
        />
      <Stack.Screen
        name="PatientRegister"
        component={PatientRegister}
        options={{headerShown: false}}
      />
      <Stack.Screen
          name="Patientprofile"
          component={PatientProfile}
          options={{headerShown: false}} />
      <Stack.Screen
          name='HospitalList'
          component={HospitalList} 
          options={{
            headerStyle: { backgroundColor: '#d2691e'},
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold', fontSize: 20}
            }}/>
      <Stack.Screen
        name='DoctorList'
        component={DoctorList}
        options={{
          headerStyle: { backgroundColor: '#d2691e'},
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 20}
          }}
        />
        <Stack.Screen
          name='DoctorDetail'
          component={DoctorDetail} 
          options={{
            headerStyle: { backgroundColor: '#d2691e'},
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold', fontSize: 20}
            }}/>
            <Stack.Screen
        name='PatientTreatment'
        component={PatientTreatment}
        options={{
          headerStyle: { backgroundColor: '#d2691e'},
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 20}
          }}
        />
        <Stack.Screen
        name='PatientAppointment'
        component={PatientAppointment}
        options={{
          headerStyle: { backgroundColor: '#d2691e'},
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 20}
          }}
        />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName= "Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PatientAuth"
          component={PatientAuth}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DoctorProfile"
          component={DoctorProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PatientListScreen"
          component={PatientList}
        />
        <Stack.Screen
          name='DoctorAppointment'
          component={DoctorAppointment}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
