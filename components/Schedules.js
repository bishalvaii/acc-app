import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Tickets = () => {
  const navigation = useNavigation();
  // Define the ticket information with fake values
  const ticketInfo = [
    { type: "Nepali", oneWay: "NRS 400    ", twoWay: "NRS 700" },
    { type: "SAARC Countries  ", oneWay: "NRS 500", twoWay: "NRS 800" },
    { type: "Other nations", oneWay: "USD 5", twoWay: "USD 9" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.ticketHeader}>Ticket Information</Text>
      <Text style={styles.ticketParagraph}>
        Annapurna Cable Car welcomes you to an exciting journey to the top. See
        the panoramic beauty of Pokhara along with the view of mountain ranges,
        Fewa Taal, and more. You can also view the sunrise and sunset. We are
        open from 5 AM to 6 PM for your service. Following are our ticket
        prices:
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
        The above rate are inclusive of all local taxes and applicable VAT.
        Child is categorized by their height. Children above 3 feet and up to 4
        feet height qualifies for child rate. No tickets applicable for child up
        to 3 feet height. Elderly citizen and student rates are applicable for
        Nepali only and requires proof or ID. 60 years and above qualifies for
        elderly citizen rate.{" "}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Map")}
      >
        <Text style={styles.buttonText}>View Location </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    height: "100%",
  },
  ticketHeader: {
    fontSize: 24,
    fontWeight: "bold",
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
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
    flex: 1,
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  rowText: {
    fontSize: 14,
    flex: 1,
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007aff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Tickets;
