import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';

const VehicleDetailsScreen = () => {
  const vehicles = [
    {
      id: 1,
      name: 'Taxi',
      logo: require('../assets/car.png'),
      vehicleNo: 'Ga 1 Ka 3456',
      totalPassengers: '5'
      

    },
    {
        id: 2,
        name: 'Bus',
        logo: require('../assets/car.png'),
        vehicleNo: 'Ga 1 Ka 3456',
        totalPassengers: '10'
    },
    // Add more hotel objects as needed
  ];

  const handleAddVehicles = () => {
    // Logic to handle adding new hotels and lodges
  };

  const renderVehicleItem = ({ item }) => (
    <View style={styles.hotelItemContainer}>
      <Image source={item.logo} style={styles.hotelLogo} />
      <View style={styles.hotelInfoContainer}>
        <Text style={styles.hotelName}>Vehicle no.:{item.vehicleNo}</Text>
        <Text style={styles.hotelAddress}>Total no. of passengers: {item.totalPassengers}</Text>
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
