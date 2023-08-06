import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import HomePage from './components/HomePage';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Fares from "./components/Fares"
import { createStackNavigator } from '@react-navigation/stack';
import Location from './components/Location';
import Team from './components/Team';
import Contact from './components/Contact';
import Schedules from './components/Schedules';
import ChatScreen from './components/ChatScreen';
import Notices from './components/Notices';
import MapScreen from './components/MapScreen';
import Reviews from './components/Reviews';
import FAQList from './components/FAQItem';
import MyComponent from './components/LoginScreen';
import { AdminPage } from './components/Admin';
import HotelDetailsScreen from './components/HotelDetails';
import VehicleDetailsScreen from './components/VehiclesDetails';

import MarketingDetails from './components/MarketingLog';
import AdminPanel, { SupportChats } from './components/SupportChatsMain';
import PassDetails from './components/PassDetails';
import AddHotelForm from './components/AddHotels';
import AddVehicleForm from './components/AddVehicles';
import Activities from './components/Activities';





const Stack = createStackNavigator();

export default function App() {
  const [showHomePage, setShowHomePage] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowHomePage(true)
    }, 5000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {showHomePage ? (
          <>
         
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Fares" component={Fares} />
            <Stack.Screen name="Notices" component={Notices }  />
            <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{ title: 'Support Chat' }}
        />
            <Stack.Screen name="Location" component={Location} />
            <Stack.Screen name="Review" component={Reviews} />
            <Stack.Screen name="Team" component={Team} />
            <Stack.Screen name="Map" component={MapScreen} />
            <Stack.Screen name="Contact" component={Contact} />
            <Stack.Screen name="Login" component={MyComponent} />
            <Stack.Screen name="Schedules" component={Schedules} />
            <Stack.Screen name="FAQS" component={FAQList} />
            <Stack.Screen name='Activities' component={Activities} />
            <Stack.Screen name="Admin" component={AdminPage} />
            <Stack.Screen name="HotelDetails" component={HotelDetailsScreen} />
            <Stack.Screen name="VehicleDetails" component={VehicleDetailsScreen} />
            <Stack.Screen name="MarketingDetails" component={MarketingDetails} />
            <Stack.Screen name='SupportMessages' component={SupportChats} />
            <Stack.Screen name='PassDetails' component={PassDetails} />          
              <Stack.Screen name='AddHotels' component={AddHotelForm} />
              <Stack.Screen name='AddVehicles' component={AddVehicleForm} />

            
          </>
        ) : (
          <Stack.Screen name="Header" component={Header} />
        )}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
