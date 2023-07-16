import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FAQItem = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleExpand} style={styles.questionContainer}>
        <Text style={styles.questionText}>{question}</Text>
        <Ionicons
          name={expanded ? 'chevron-up' : 'chevron-down'}
          size={24}
          color="#888"
        />
      </TouchableOpacity>
      {expanded && <Text style={styles.answerText}>{answer}</Text>}
    </View>
  );
};

const FAQList = () => {
  const faqs = [
    {
      question: 'Where is Annapurna Cable Car Located?',
      answer:
        'It lies in Lakeside Pokhara, which is 30 minutes away from Pokhara International Airport.',
    },
    { question: 'Can we visit only one way?', answer: 'Yes, you can visit one way.' },
    { question: 'How far is it from Lakeside', answer: 'It is a 7 minutes ride from Hallanchok' },
    { question: 'Is cycle allowed on Cable car', answer: 'Yes, you can carry your cycle on cable car' },
  ];

  return (
    <View style={styles.container}>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  questionText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  answerText: {
    fontSize: 14,
    color: '#888',
  },
});

export default FAQList;
