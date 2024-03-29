import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
import { collection, addDoc } from 'firebase/firestore/lite';
import { db } from '../firebase';


const AddHotelForm = () => {
  const [hotelName, setHotelName] = useState('');
  const [address, setAddress] = useState('');
  const [guests, setGuests] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');

  const handleAddHotel = async () => {
    try {
      // Create a reference to the Firestore collection
      const hotelsCollection = collection(db, 'hotels');
      
      // Create a new document with the form data
      await addDoc(hotelsCollection, {
        hotelName,
        address,
        guests,
        arrivalDate,
        arrivalTime,
      });
      
      console.log('Hotel data saved successfully!');
      // Reset the form fields after successful submission
      setHotelName('');
      setAddress('');
      setGuests('');
      setArrivalDate('');
      setArrivalTime('');
    } catch (error) {
      console.error('Error saving hotel data:', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Hotel Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter hotel name"
          value={hotelName}
          onChangeText={text => setHotelName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter address"
          value={address}
          onChangeText={text => setAddress(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Number of Guests:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter number of guests"
          value={guests}
          onChangeText={text => setGuests(text)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Arrival Date:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter arrival date"
          value={arrivalDate}
          onChangeText={text => setArrivalDate(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Arrival Time:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter arrival time"
          value={arrivalTime}
          onChangeText={text => setArrivalTime(text)}
        />
      </View>
      <Button title="Add" onPress={handleAddHotel} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    fontSize: 16,
  },
});

export default AddHotelForm;
