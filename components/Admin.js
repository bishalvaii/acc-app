import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import React from "react";
import { View,Text, TouchableOpacity, Image } from "react-native";
import { Button } from "react-native";
import { auth } from "../firebase";

export const AdminPage = () => {
    const navigation = useNavigation();
    const handleViewDetails = () => {
    navigation.navigate('HotelDetails');
  };

  const handleVehicleDetails = () => {
    navigation.navigate('VehicleDetails');
  }
  const handleMarketingDetails = () => {
    navigation.navigate('MarketingDetails')
  }
 const handleSupportMessages = () => {
  navigation.navigate('SupportMessages')
 } 
 const handlePassDetails = () => {
  navigation.navigate('PassDetails')
 }
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        // Sign out successful
        // Handle successful sign out, navigate to the login page, etc.
        // For example, you can navigate to the login page:
        navigation.navigate('Login');
      })
      .catch((error) => {
        // Handle sign out errors
        const errorCode = error.code;
        const errorMessage = error.message;
        // Display or handle the error message accordingly
      });
  };
    return (
        
        
      <View style={styles.container}>
              <Button title="Log Out" onPress={handleLogOut} />
      <View style={styles.topicContainer}>
        <Image source={require('../assets/hotel.png')} style={styles.image} />
        <Text style={styles.topicText}>Hotels and Lodges</Text>
        {/* Add icon component here */}  {/* Replace the path with the actual image path */}
        <Text style={styles.detailsText}>Associated Hotels: 5</Text>
        <TouchableOpacity style={styles.button} onPress={handleViewDetails}> 
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.topicContainer}>
        <Image source={require('../assets/car.png')} style={styles.image} />
        <Text style={styles.topicText}>Vehicles Incoming Details</Text>
        {/* Add icon component here */}  {/* Replace the path with the actual image path */}
        <Text style={styles.detailsText}>Associated Vehicles: 5</Text>
        <TouchableOpacity style={styles.button} onPress={handleVehicleDetails}>
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.topicContainer}>
        <Image source={require('../assets/profit.png')} style={styles.image} />
        <Text style={styles.topicText}>Marketing Logs</Text>
        {/* Add icon component here */}  {/* Replace the path with the actual image path */}
        <Text style={styles.detailsText}>Activity Today: 5</Text>
        <TouchableOpacity style={styles.button} onPress={handleMarketingDetails}>
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.topicContainer}>
        <Image source={require('../assets/support.png')} style={styles.image} />
        <Text style={styles.topicText}>Customer Support Details</Text>
        {/* Add icon component here */}  {/* Replace the path with the actual image path */}
        <Text style={styles.detailsText}>Support needed: 5</Text>
        <TouchableOpacity style={styles.button} onPress={handleSupportMessages}>
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.topicContainer}>
        <Image source={require('../assets/vip.png')} style={styles.image} />
        <Text style={styles.topicText}>Pass issue details</Text>
        {/* Add icon component here */}  {/* Replace the path with the actual image path */}
        <Text style={styles.detailsText}>Incoming VIPS: 5</Text>
        <TouchableOpacity style={styles.button} onPress={handlePassDetails}>
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
    </View>
    </View>
    
  );

    
}
const styles = {
  container: {
    flex: 1,
    padding: 20,
  },
  topicContainer: {
    flexDirection: 'row',
    backgroundColor: '#e0e0e0',
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  topicText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detailsText: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
};