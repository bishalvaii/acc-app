import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const FAQItem = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleExpand}>
        <Text>{question}</Text>
      </TouchableOpacity>
      {expanded && <Text>{answer}</Text>}
    </View>
  );
};

const FAQList = () => {
  const faqs = [
    { question: 'Where is Annapurna Cable Car Located?', answer: 'It lies in Lakeside pokhara which is 30 minutes away from Pokhara International Airport' },
    { question: 'Question 2', answer: 'Answer 2' },
    { question: 'Question 3', answer: 'Answer 3' },
  ];

  return (
    <View>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </View>
  );
};

export default FAQList;
