// imageUrls: [
//     '../assets/swing.jpg',
//     '../assets/swing1.jpg'
// ]

// },
// {

// category: "Cycling",
// imageUrls: [
//    '../assets/cycling.jpg',
//    '../assets/cycling1.jpg'
// ]
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const ActivitiesScreen = () => {
  const images = [
    {
      category: 'Swing',
      imageUrls: [
        require('../assets/swing.jpg'),
         require( '../assets/swing1.jpg')   
      ],
    },
    {
      category: 'Cycling',
      imageUrls: [
        require('../assets/cycling.jpg'),
         require( '../assets/cycling1.jpg')   
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activities to Do</Text>
      {images.map((category, index) => (
        <View key={index}>
          <Text style={styles.categoryTitle}>{category.category}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {category.imageUrls.map((imageUrl, idx) => (
              <Image key={idx} style={styles.image} source={imageUrl } />
            ))}
          </ScrollView>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginRight: 10,
  },
});

export default ActivitiesScreen;
