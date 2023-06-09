import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, FlatList } from 'react-native';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');

  const addReview = () => {
    if (newReview.trim()) {
      setReviews([...reviews, newReview]);
      setNewReview('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reviews</Text>
      <FlatList
        data={reviews}
        renderItem={({ item }) => <Text style={styles.review}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <TextInput
        style={styles.input}
        value={newReview}
        onChangeText={text => setNewReview(text)}
        placeholder="Add a review"
      />
      <Button title="Submit" onPress={addReview} disabled={!newReview.trim()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  review: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
});
