import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button, FlatList, Image } from 'react-native';
import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore/lite';
import { db } from '../firebase';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [username, setUsername] = useState('');
  const [rating, setRating] = useState('');

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const reviewsCollection = collection(db, 'reviews');
      const reviewsSnapshot = await getDocs(query(reviewsCollection, orderBy('timestamp', 'desc')));
      const reviewData = reviewsSnapshot.docs.map((doc) => doc.data());
      setReviews(reviewData);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const addReview = async () => {
    if (newReview.trim() && username.trim() && rating > 0 && rating <= 5) {
      try {
        const reviewData = {
          username: username.trim(),
          rating,
          description: newReview.trim(),
          timestamp: new Date(),
        };

        const reviewsCollection = collection(db, 'reviews');
        await addDoc(reviewsCollection, reviewData);
        setReviews([reviewData, ...reviews]);
        setNewReview('');
        setUsername('');
        setRating(0);
      } catch (error) {
        console.error('Error adding review:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reviews</Text>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <View style={styles.reviewContainer}>
            <Image source={require('../assets/user.png')} style={styles.userImage} />
            <View style={styles.reviewInfoContainer}>
              <View style={styles.userInfoContainer}>
                <Text style={styles.username}>{item.username}</Text>
                <Text style={styles.rating}>{`${item.rating} out of 5 stars`}</Text>
              </View>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={(text) => setUsername(text)}
          placeholder="Your Name"
        />
        <TextInput
          style={styles.input}
          value={newReview}
          onChangeText={(text) => setNewReview(text)}
          placeholder="Add a review"
        />
        <TextInput
          style={styles.input}
          value={rating.toString()}
          onChangeText={(text) => setRating(parseInt(text))}
          placeholder="Rating (1-5)"
          keyboardType="numeric"
        />
      </View>
      <Button
        title="Submit"
        onPress={addReview}
        disabled={!newReview.trim() || !username.trim() || rating === 0 || rating > 5}
      />
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
  reviewContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  reviewInfoContainer: {
    flex: 1,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  rating: {
    fontSize: 14,
    color: '#888',
  },
  description: {
    fontSize: 14,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
});
