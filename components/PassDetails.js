import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';

const PassDetails = () => {
  const vehicles = [
    {
      id: 1,
      name: 'VIP pass',
      logo: require('../assets/car.png'),
   
     issuedToday: '5'
      

    },
    {
        id: 2,
        name: 'Discount Permission slip',
        logo: require('../assets/car.png'),
  
       issuedToday: '10'
    },{
        id: 3,
        name: 'Staff up/down details',
        logo: require('../assets/car.png'),
        activitiesToday: '3',
       issuedToday: '10'
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
      <Text style={styles.hotelName}> {item.name}</Text>
      {item.id !== 3 && (
        <Text style={styles.hotelName}>Issued today: {item.issuedToday}</Text>
      )}
        {item.id == 3 && (
        <>
          
          <Text style={styles.hotelAddress}>Activities today: {item.activitiesToday}</Text>
        </>
      )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
        <Text style={styles.headerText}>Pass issue details</Text>
      <TouchableOpacity style={styles.addButton} onPress={handleAddVehicles}>
        <Text style={styles.addButtonLabel}>See updates on these marketing activities</Text>
      </TouchableOpacity>

      <FlatList
        data={vehicles}
        renderItem={renderVehicleItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};
const styles =  StyleSheet.create({
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
    headerText: {

        fontSize: 20,
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
});
  

export default PassDetails;
