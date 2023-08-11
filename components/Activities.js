import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Button } from 'react-native';
import { db } from '../firebase';
import { useEffect } from 'react';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore/lite';

const ActivitiesScreen = () => {
  const [usersData, setUsersData] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

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

  useEffect(() => {
    const fetchLatestUserData = async () => {
      try {
        const answersCollection = collection(db, 'answers');
        const question = query(answersCollection);
        const querySnapshot = await getDocs(question);

        if (!querySnapshot.empty) {
          const latestUserDocument = querySnapshot.docs[0].data();
          setUsersData(latestUserDocument);
        }
      } catch (error) {
        console.error('Error fetching latest user data:', error);
      }
    };

    fetchLatestUserData();
  }, []);

  

  const handleSubmit = async () => {
    if (selectedAnswerIndex !== null) {
      try {
        setIsSubmitting(true);

        // Send the selected answer to the Firebase database
        // You can use the selectedAnswerIndex to get the selected answer from usersData
        // For example: const selectedAnswer = usersData[userIndex].answers[selectedAnswerIndex];
        
        // Perform your submission to Firebase here
        // ...

        setIsSubmitting(false);
        setSelectedAnswerIndex(null); // Clear the selected answer after submission
      } catch (error) {
        console.error('Error submitting answer:', error);
        setIsSubmitting(false);
      }
    }
  };

 

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title1}>Play Quiz</Text>
      <Text style={styles.subTopic}>Answer the correct one and get a chance to get a free ticket to the cable car</Text>
      {usersData && usersData.answers && (
        <View style={styles.userContainer}>
          <Text style={styles.question}>Question: {usersData.questions}</Text>
          <Text style={styles.userAnswers}>Select an answer:</Text>
          <View style={styles.answerOptions}>
            {usersData.answers.map((answer, answerIndex) => (
              <TouchableOpacity
                key={answerIndex}
                style={[
                  styles.option,
                  selectedAnswerIndex === answerIndex ? styles.selectedOption : null,
                ]}
                disabled={isSubmitting}
                onPress={() => setSelectedAnswerIndex(answerIndex)} // Update selected answer index
              >
                <Text style={styles.optionText}>{answer}</Text>
                {selectedAnswerIndex === answerIndex && (
                  <Image
                    source={require('../assets/checkmark.png')} // Replace with your green checkmark image
                    style={styles.checkmark}
                  />
                )}
              </TouchableOpacity>
            ))}
          </View>
          <Button
            title={isSubmitting ? 'Submitting...' : 'Submit Answer'}
            onPress={handleSubmit}
            disabled={isSubmitting || selectedAnswerIndex === null} // Disable if no answer selected
          />
        </View>
      )}
      
      {/* ... Rest of the JSX ... */}
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTopic: {
    fontSize: 16,
    marginBottom: 15,
  },
  userContainer: {
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userAnswers: {
    fontSize: 16,
  },
  answerOptions: {
    flexDirection: 'column',
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
  
  selectedOption: {
    backgroundColor: '#EFEFEF',
  },
  optionText: {
    fontSize: 16,
  },
  option: {
    flexDirection: 'row', // Aligns the option and checkmark horizontally
    justifyContent: 'space-between', // Places the checkmark at the rightmost part
    alignItems: 'center', // Vertically centers the content
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  checkmark: {
    width: 20,
    height: 20,
  },
});

export default ActivitiesScreen;
