import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore/lite';

const ViewAnswersScreen = () => {
  const [answers, setAnswers] = useState([]);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000); // Convert seconds to milliseconds
    return date.toLocaleString(); // Convert date to a human-readable string format
  };

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const answersCollection = collection(db, 'quiz');
        const querySnapshot = await getDocs(answersCollection);

        const answerData = querySnapshot.docs.map(doc => doc.data());
        setAnswers(answerData);
      } catch (error) {
        console.error('Error fetching answers:', error);
      }
    };

    fetchAnswers();
  }, []);

  // Rendering each answer item
  const renderAnswerItem = ({ item }) => (
    <View style={styles.answerItem}>
      <Text>User ID: {item.userId}</Text>
      <Text>Submitted Answer: {item.selectedAnswer}</Text>
      <Text>Timestamp: {formatTimestamp(item.timestamp)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Answers</Text>
      <FlatList
        data={answers}
        renderItem={renderAnswerItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  answerItem: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
};

export default ViewAnswersScreen;
