import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const TeamPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meet Our Team</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque, mauris ut rutrum
        fringilla, sem dui consectetur nunc, ac cursus turpis dui vel massa. Fusce ut lacinia nunc.
        Curabitur euismod dapibus mauris.
      </Text>

      <View style={styles.photoContainer}>
        <View style={styles.photoItem}>
          <Image
            source={require('../assets/car.png')}
            style={styles.photo}
            resizeMode="cover"
          />
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.titleText}>Programmer</Text>
        </View>
        <View style={styles.photoItem}>
          <Image
            source={require('../assets/car.png')}
            style={styles.photo}
            resizeMode="cover"
          />
          <Text style={styles.name}>Jane Smith</Text>
          <Text style={styles.titleText}>Designer</Text>
        </View>
        <View style={styles.photoItem}>
          <Image
            source={require('../assets/car.png')}
            style={styles.photo}
            resizeMode="cover"
          />
          <Text style={styles.name}>Michael Brown</Text>
          <Text style={styles.titleText}>Manager</Text>
        </View>
        <View style={styles.photoItem}>
          <Image
            source={require('../assets/car.png')}
            style={styles.photo}
            resizeMode="cover"
          />
          <Text style={styles.name}>Emily Johnson</Text>
          <Text style={styles.titleText}>Marketing Specialist</Text>
        </View>
      </View>
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
  photoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  photoItem: {
    width: '48%',
    marginBottom: 20,
    alignItems: 'center',
  },
  photo: {
    width: '100%',
    aspectRatio: 1,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleText: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default TeamPage;
