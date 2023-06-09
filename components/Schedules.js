import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
    <View style={styles.container}>
        <Text style={styles.ticketHeader}>Ticket Information</Text>
      <Text style={styles.ticketParagraph}>
      Annapurna Cable Car welcomes you to exciting journey to the top. See the panaromic beauty of Pokhara along with the view of mountain ranges, fewa taal and more. You can also view the sunrise and sunset. We are open from 5 AM to 6 PM for your sevice. Following are our ticket prices
      </Text>
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
       <Text style={styles.title}>Terms and Conditions</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        finibus dui eu convallis viverra. Sed condimentum lectus in massa
        sollicitudin, at tempus sem eleifend. Nulla eleifend accumsan
        accumsan. Curabitur tincidunt fermentum dolor, id pulvinar eros
        tincidunt ac. Quisque auctor consectetur sagittis. Mauris ac
        feugiat nisl. Suspendisse eget mauris lorem. Morbi ut mauris ut
        dolor euismod faucibus et a est. Suspendisse auctor facilisis
        volutpat. Integer feugiat ligula a urna pellentesque, id auctor
        orci tristique. Fusce ut pellentesque lorem. Sed ut odio at lacus
        maximus consectetur. Phasellus fermentum quam id lectus tincidunt,
        at venenatis dolor feugiat.
      </Text>
      <Text style={styles.text}>
        Fusce vitae ex at mi varius tincidunt. Donec posuere placerat
        metus, nec lacinia arcu interdum eu. Nulla eget urna massa. Sed in
        posuere velit. Nunc eu mollis dui. Fusce a libero id sem venenatis
        fermentum. Integer sed laoreet ligula, at eleifend sapien. Nam
        consectetur, nisl eget blandit tempor, tellus est vulputate sem,
        quis rhoncus lectus felis id leo. Phasellus nec neque auctor,
        dignissim nunc non, gravida nisl. Curabitur consequat vehicula
        venenatis. Nullam dictum lobortis velit, nec finibus neque
        volutpat at. Integer quis dolor nec mi facilisis congue. Sed
        sodales gravida dolor, vitae vulputate tellus finibus eu. Nam
        malesuada, lectus et aliquet bibendum, tortor odio fringilla velit,
        id facilisis turpis mi vel urna.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Location')}>
          <Text style={styles.buttonText}>View More</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  }, ticketHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ticketParagraph: {
    fontSize: 16,
    marginBottom: 20,
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
  }, button: {
    backgroundColor: '#007aff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Schedules;
