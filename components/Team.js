import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TeamPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Team</Text>

      {/* Management */}
      <Text style={styles.subtitle}>Management</Text>
      <Text>John Doe - CEO</Text>
      <Text>Jane Smith - COO</Text>

      {/* Board of Directors */}
      <Text style={styles.subtitle}>Board of Directors</Text>
      <Text>John Smith - Chairman</Text>
      <Text>Emily Johnson - Director</Text>
      <Text>Michael Brown - Director</Text>

      {/* Chairman */}
      <Text style={styles.subtitle}>Chairman</Text>
      <Text>John Smith</Text>

      {/* About the Company */}
      <Text style={styles.subtitle}>About the Company</Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
        lobortis est. Curabitur maximus est eget velit finibus, eget
        consequat elit accumsan. Sed pellentesque, mauris ut rutrum
        fringilla, sem dui consectetur nunc, ac cursus turpis dui vel
        massa. Fusce ut lacinia nunc. Curabitur euismod dapibus mauris.
      </Text>

      {/* Promoters */}
      <Text style={styles.subtitle}>Promoters</Text>
      <Text>John Doe</Text>
      <Text>Jane Smith</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default TeamPage;
