import { addDoc, collection } from "firebase/firestore/lite";
import React, { useState } from "react";
import { Button, View, StyleSheet } from "react-native";
import { db } from "../firebase";
import { TextInput } from "react-native";
import { Text } from "react-native";

const AddQuiz = () => {
    const [question, setQuestion]= useState('');
    const [options, setOptions] = useState(['', '', '']);

    const handleOptionsChange= (index,text) => {
        const updatedOptions = [...options];
        updatedOptions[index] = text;
        setOptions(updatedOptions)
    }

    const addQuiz = async() => {
        try{
          //create a reference to firestore collection
          const quizCollection = collection(db, 'answers');
          // create a new document with the form data
          await addDoc(quizCollection, {
            question,
            options
          });
          console.log('Quiz data saved successfully')
          setQuestion('');
          setOptions(['', '', ''])
        } catch(error) {
            console.log('Error saving quiz data:', error)
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Question:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your quiz question"
                    value={question} 
                    onChangeText={text => setQuestion(text)}
                />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Answers:</Text>
               {options.map((option,index) => (
                <TextInput
                    key={index}
                    style={styles.input}
                    placeholder={`Option ${index+1}`}
                    value={option}
                    onChangeText={text => handleOptionsChange(index,text)}
                />
               ))}
            </View>
            <Button title="Add Quiz" onPress={addQuiz} />
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    formGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
        color: '#333333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
    },
});

export default AddQuiz;
