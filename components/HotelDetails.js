import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';

const HotelDetailsScreen = () => {
  const navigation = useNavigation()
  const hotels = [
    {
      id: 1,
      name: 'Hotel A',
      logo: require('../assets/hotel.png'),
      address: '123 Main Street',
    },
    {
      id: 2,
      name: 'Hotel B',
      logo: require('../assets/hotel.png'),
      address: '456 Elm Street',
    },
    // Add more hotel objects as needed
  ];

  const handleAddHotel = () => {
    navigation.navigate('AddHotels')
  };

  const renderHotelItem = ({ item }) => (
    <View style={styles.hotelItemContainer}>
      <Image source={item.logo} style={styles.hotelLogo} />
      <View style={styles.hotelInfoContainer}>
        <Text style={styles.hotelName}>{item.name}</Text>
        <Text style={styles.hotelAddress}>{item.address}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
        <Text>Hotel and lodge details</Text>
      <TouchableOpacity style={styles.addButton} onPress={handleAddHotel}>
        <Text style={styles.addButtonLabel}>Add New Hotel</Text>
      </TouchableOpacity>

      <FlatList
        data={hotels}
        renderItem={renderHotelItem}
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
  

export default HotelDetailsScreen;
