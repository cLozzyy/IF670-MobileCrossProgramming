import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      
      <Text style={styles.headerTitle}>Daftar Teman</Text>

      <View style={styles.card}>
        <Image 
          source={require('@/assets/images/andre.png')}
          style={styles.profileImage} 
        />
        <Text style={styles.name}>Nicholas Andre Natalino</Text>
        <Text style={styles.nim}>0000092117</Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={require('@/assets/images/patrick.jpeg')}
          style={styles.profileImage} 
        />
        <Text style={styles.name}>Dave William</Text>
        <Text style={styles.nim}>0000093527</Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={require('@/assets/images/leo.png')} 
          style={styles.profileImage} 
        />
        <Text style={styles.name}>Vinson Gautama</Text>
        <Text style={styles.nim}>00000069696</Text>
      </View>

      
      <View style={styles.card}>
        <Image 
          source={require('@/assets/images/leolagi.png')}
          style={styles.profileImage} 
        />
        <Text style={styles.name}>Rifqi</Text>
        <Text style={styles.nim}>00000021234</Text>
      </View>

      <View style={styles.card}>
        <Image 
          source={require('@/assets/images/neon.png')} 
          style={styles.profileImage} 
        />
        <Text style={styles.name}>Yehuda</Text>
        <Text style={styles.nim}>00000022111</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
    color: '#333',
  },
  card: {
    width: '100%',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  nim: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});