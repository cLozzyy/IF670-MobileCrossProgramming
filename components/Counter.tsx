import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

type CounterProps = {
  value: number;          
  onIncrement: () => void; 
  onDecrement: () => void; 
  onPassValue: () => void; 
};

export default function Counter({ value, onIncrement, onDecrement, onPassValue }: CounterProps) {
  return (
    <View style={styles.container}>
      
      <Text style={styles.counterText}>{value}</Text>
      
      <View style={styles.buttonGroup}>
        <View style={styles.btnWrapper}>
            <Button title="INCREMENT" onPress={onIncrement} />
        </View>
        <View style={styles.btnWrapper}>
            <Button title="DECREMENT" onPress={onDecrement} color="red" />
        </View>
      </View>

      
      <View style={styles.passButton}>
        <Button title="PASS VALUE" onPress={onPassValue} color="orange" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  counterText: {
    fontSize: 40,     
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: 'row', 
    gap: 10,
  },
  btnWrapper: {
      width: 120, 
  },
  passButton: {
      width: 250,
      marginTop: 10,
  }
});