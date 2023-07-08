import { useNavigation } from '@react-navigation/native';
import { collection, getDocs } from 'firebase/firestore/lite';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { db } from '../firebase';

const VehicleDetailsScreen = () => { 
  const navigation = useNavigation();
  const [vehicles,setVehicles] = useState([])

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const vehiclesCollection = collection(db, 'hotels');
        const querySnapshot = await getDocs(vehiclesCollection);
        const vehicleData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setVehicles(vehicleData);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };

    fetchVehicles();
  }, []);

  const handleAddVehicles = () => {
   navigation.navigate("AddVehicles")
  };

  const renderVehicleItem = ({ item }) => (
    <View style={styles.hotelItemContainer}>
      {/* <Image source={item.logo} style={styles.hotelLogo} /> */}
      <View style={styles.hotelInfoContainer}>
        <Text style={styles.hotelName}>Vehicle Name:{item.vehicleName}</Text>
        <Text style={styles.hotelName}>Vehicle no.:{item.vehicleNo}</Text>
        <Text style={styles.hotelAddress}>Total no. of passengers: {item.guests}</Text>
        <Text style={styles.hotelAddress}>Arrived date:  {item.arrivalDate}</Text>
        <Text style={styles.hotelAddress}>Arrival time: {item.arrivalTime}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
        <Text>Vehicles details</Text>
      <TouchableOpacity style={styles.addButton} onPress={handleAddVehicles}>
        <Text style={styles.addButtonLabel}>Add New Vehicles</Text>
      </TouchableOpacity>

      <FlatList
        data={vehicles}
        renderItem={renderVehicleItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};
const styles = {
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff',
    },
    addButton: {
      alignSelf: 'center',
      backgroundColor: '#2196F3',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 4,
      marginBottom: 16,
    },
    addButtonLabel: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    hotelItemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
    },
    hotelLogo: {
      width: 64,
      height: 64,
      marginRight: 12,
    },
    hotelInfoContainer: {
      flex: 1,
    },
    hotelName: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    hotelAddress: {
      fontSize: 14,
      color: '#888',
    },
  };
  

export default VehicleDetailsScreen;
