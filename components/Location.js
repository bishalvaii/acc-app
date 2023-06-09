import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LocationPage = () => {
  const handleViewMore = () => {
    // Handle the "View More" button click
    // You can implement the logic to navigate to a detailed location page or perform any other action
  };
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Destination Sarangkot</Text>
      <Text style={styles.description}>
      With a panoramic view of Himalayan peaks from Dhaulagiri (8167m) in the west to Machhapucharre (6997m), Annapurna II (7937m) to Lamjung(6983m) in the east, Sarangkot lets one experience a spiritual bliss with nature in its purest form. Experience the beauty with Annapurna Cable Car. You can witness sunset and sunrise. Annapurna Cable Car takes you to Sarangkot in just 10 minutes.
      </Text>
      <Image
        source={require('../assets/acc.jpg')}
        style={styles.image}
        resizeMode="cover"
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Map')}>
        <Text style={styles.buttonText}>View More</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LocationPage;
