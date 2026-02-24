import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function Profile({ name, age }: { name: string; age: number }) {
  return (
    <View style={styles.container}>
     
      <Text style={styles.text}>Halo nama ku {name}</Text>
      <Text style={styles.text}>Umur ku {age} tahun</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'center',
  },
 
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
});