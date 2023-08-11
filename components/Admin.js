import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
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
  const handleQuizDetails = () => {
    navigation.navigate('AddQuiz');
  }
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate('Login');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  useEffect(() => {
    const logoutTimer = setTimeout(() => {
      handleLogOut();
    },   60 *60 * 1000); // 1 hour (in milliseconds)

    return () => {
      clearTimeout(logoutTimer);
    };
  }, []);

  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={handleQuizDetails}>
          <Text style={styles.buttonText}>Add Quiz</Text>
        </TouchableOpacity>
      
      <View style={styles.topicContainer}>
        <Image source={require('../assets/hotel.png')} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.topicText}>Hotels and Lodges</Text>
          <Text style={styles.detailsText}>Associated Hotels: 5</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleViewDetails}> 
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.topicContainer}>
        <Image source={require('../assets/car.png')} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.topicText}>Vehicles Incoming Details</Text>
          <Text style={styles.detailsText}>Associated Vehicles: 5</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleVehicleDetails}>
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.topicContainer}>
        <Image source={require('../assets/profit.png')} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.topicText}>Marketing Logs</Text>
          <Text style={styles.detailsText}>Activity Today: 5</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleMarketingDetails}>
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.topicContainer}>
        <Image source={require('../assets/support.png')} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.topicText}>Customer Support Details</Text>
          <Text style={styles.detailsText}>Support needed: 5</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSupportMessages}>
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.topicContainer}>
        <Image source={require('../assets/vip.png')} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.topicText}>Pass issue details</Text>
          <Text style={styles.detailsText}>Incoming VIPS: 5</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handlePassDetails}>
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
      </View><Button title="Log Out" onPress={handleLogOut} />

    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f1f1f1',
  },
  topicContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  topicText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  detailsText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#777',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
};
