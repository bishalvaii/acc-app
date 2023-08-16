import React from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";

const MarketingDetails = () => {
  const vehicles = [
    {
      id: 1,
      name: "Hotel updates",
      logo: require("../assets/car.png"),

      desc: " Hotel visited",
      totalPassengers: "5",
    },
    {
      id: 2,
      name: "Social media updates",
      logo: require("../assets/car.png"),

      desc: "Post Shared",
    },
    {
      id: 2,
      name: "Other updates",
      logo: require("../assets/car.png"),

      desc: "Campaign details",
      totalPassengers: "10",
    },
    // Add more hotel objects as needed
  ];

  const handleAddVehicles = () => {
    // Logic to handle adding new hotels and lodges
  };

  const renderVehicleItem = ({ item }) => (
    <View style={styles.hotelItemContainer}>
      <Image source={item.logo} style={styles.hotelLogo} />
      <View style={styles.hotelInfoContainer}>
        <Text style={styles.hotelName}>{item.name}</Text>
        <Text style={styles.hotelAddress}>Hotels visited: {item.desc}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Marketing log details</Text>
      <TouchableOpacity style={styles.addButton} onPress={handleAddVehicles}>
        <Text style={styles.addButtonLabel}>
          See updates on these marketing activities
        </Text>
      </TouchableOpacity>

      <FlatList
        data={vehicles}
        renderItem={renderVehicleItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};
const styles = {
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    alignSelf: "center",
  },
  addButton: {
    alignSelf: "center",
    backgroundColor: "#2196F3",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    marginBottom: 16,
  },
  addButtonLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  hotelItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  headerText: {
    fontSize: 20,
  },
  hotelLogo: {
    width: 64,
    height: 64,
    marginRight: 12,
  },
  hotelInfoContainer: {
    flex: 1,
  },
  hotelName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  hotelAddress: {
    fontSize: 14,
    color: "#888",
  },
};

export default MarketingDetails;
