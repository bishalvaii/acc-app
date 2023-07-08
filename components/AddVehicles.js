import { addDoc, collection } from 'firebase/firestore/lite';
import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
import { db } from '../firebase';

const AddVehicleForm = () => {
  const [vehicleName, setVehicleName] = useState('');
  const [vehicleNo, setVehicleNo] = useState('')
  const [guests, setGuests] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');

  const handleAddVehicle = async () => {
    try {
      // Create a reference to the Firestore collection
      const vehiclesCollection = collection(db, 'vehicles');
      
      // Create a new document with the form data
      await addDoc(vehiclesCollection, {
        vehicleName,
        vehicleNo,
        guests,
        arrivalDate,
        arrivalTime,
      });
      
      console.log('Vehicle data saved successfully!');
      // Reset the form fields after successful submission
      setVehicleName('');
      setVehicleNo('');
      setGuests('');
      setArrivalDate('');
      setArrivalTime('');
    } catch (error) {
      console.error('Error saving vehicle data:', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Vehicle Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter vehicle name"
          value={vehicleName}
          onChangeText={text => setVehicleName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter address"
          value={vehicleNo}
          onChangeText={text => setVehicleNo(text)}
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
      <Button title="Add" onPress={handleAddVehicle} />
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

export default AddVehicleForm;
