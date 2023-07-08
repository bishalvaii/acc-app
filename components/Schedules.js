import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Schedules = () => {
  const navigation = useNavigation();
  // Define the ticket information with fake values
  const ticketInfo = [
    { type: 'Adult', oneWay: '$10', twoWay: '$18' },
    { type: 'Child', oneWay: '$5', twoWay: '$9' },
    { type: 'Senior', oneWay: '$7', twoWay: '$13' },
    { type: 'Student', oneWay: '$8', twoWay: '$14' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.ticketHeader}>Ticket Information</Text>
      <Text style={styles.ticketParagraph}>
        Annapurna Cable Car welcomes you to an exciting journey to the top. See the panoramic beauty of Pokhara along with the view of mountain ranges, Fewa Taal, and more. You can also view the sunrise and sunset. We are open from 5 AM to 6 PM for your service. Following are our ticket prices:
      </Text>
      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={styles.headerText}>Ticket Type</Text>
          <Text style={styles.headerText}>One Way</Text>
          <Text style={styles.headerText}>Two Way</Text>
        </View>
        {ticketInfo.map((ticket, index) => (
          <View style={styles.tableRow} key={index}>
            <Text style={styles.rowText}>{ticket.type}</Text>
            <Text style={styles.rowText}>{ticket.oneWay}</Text>
            <Text style={styles.rowText}>{ticket.twoWay}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.title}>Terms and Conditions</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet
      </Text>
      <Text style={styles.text}>
        Fusce vitae ex at mi varius tincidunt. Donec posuere placerat metus, nec lacinia arcu interdum eu. Nulla eget urna massa. Sed in posuere velit. Nunc eu mollis dui. Fusce a libero id sem venenatis fermentum. Integer sed laoreet ligula, at eleifend sapien. Nam consectetur, nisl eget blandit tempor, tellus est vulputate sem, quis rhoncus lectus felis id leo. Phasellus nec neque auctor, dignissim nunc non, gravida nisl. Curabitur consequat vehicula venenatis. Nullam dictum lobortis velit, nec finibus neque volutpat at. Integer quis dolor nec mi facilisis congue. Sed sodales gravida dolor, vitae vulputate tellus finibus eu. Nam malesuada, lectus et aliquet bibendum, tortor odio fringilla velit, id facilisis turpis mi vel urna.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Location')}>
        <Text style={styles.buttonText}>View More</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  ticketHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ticketParagraph: {
    fontSize: 16,
    marginBottom: 20,
  },
  tableContainer: {
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  rowText: {
    fontSize: 14,
    flex: 1,
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007aff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Schedules;
