import React, { useState } from 'react';
import { View, TextInput, Text, Button } from 'react-native';

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
    <View>
      <View>
        <Text>Hotel Name:</Text>
        <TextInput
          placeholder="Enter hotel name"
          value={hotelName}
          onChangeText={text => setHotelName(text)}
        />
      </View>
      <View>
        <Text>Address:</Text>
        <TextInput
          placeholder="Enter address"
          value={address}
          onChangeText={text => setAddress(text)}
        />
      </View>
      <View>
        <Text>Number of Guests:</Text>
        <TextInput
          placeholder="Enter number of guests"
          value={guests}
          onChangeText={text => setGuests(text)}
          keyboardType="numeric"
        />
      </View>
      <View>
        <Text>Arrival Date:</Text>
        <TextInput
          placeholder="Enter arrival date"
          value={arrivalDate}
          onChangeText={text => setArrivalDate(text)}
        />
      </View>
      <View>
        <Text>Arrival Time:</Text>
        <TextInput
          placeholder="Enter arrival time"
          value={arrivalTime}
          onChangeText={text => setArrivalTime(text)}
        />
      </View>
      <Button title="Add" onPress={handleAddHotel} />
    </View>
  );
};

export default AddHotelForm;
