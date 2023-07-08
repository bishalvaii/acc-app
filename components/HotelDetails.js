import { useNavigation } from '@react-navigation/native';
import { collection, getDocs } from 'firebase/firestore/lite';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { db } from '../firebase';

const HotelDetailsScreen = () => {
  const navigation = useNavigation();
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const hotelsCollection = collection(db, 'hotels');
        const querySnapshot = await getDocs(hotelsCollection);
        const hotelData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setHotels(hotelData);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };

    fetchHotels();
  }, []);

  const handleAddHotel = () => {
    navigation.navigate('AddHotels');
  };

  const renderHotelItem = ({ item }) => (
    <View style={styles.hotelItemContainer}>
      {/* <Image source={{ uri: item.logo }} style={styles.hotelLogo} /> */}
      <View style={styles.hotelInfoContainer}>
        <Text style={styles.hotelName}>{item.hotelName}</Text>
        <Text style={styles.hotelAddress}>{item.address}</Text>
        <Text style={styles.hotelAddress}>Guests arrived: {item.guests}</Text>
        <Text style={styles.hotelAddress}>Arrived date: {item.arrivalDate}</Text>
        <Text style={styles.hotelAddress}>Arrival time: {item.arrivalTime}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Hotel and Lodge Details</Text>
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
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    alignSelf: 'center',
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
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
  },
  hotelInfoContainer: {
    flex: 1,
  },
  hotelName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  hotelAddress: {
    fontSize: 14,
    color: '#888',
  },
};

export default HotelDetailsScreen;
