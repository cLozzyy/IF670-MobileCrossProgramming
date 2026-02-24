import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';


import Counter from '@/components/Counter';
import Profile from '@/components/Profile';

export default function App() {
  
  const [count, setCount] = useState(0);


  const [inputText, setInputText] = useState('');

  const [profileData, setProfileData] = useState({
    name: 'Anonymous',
    age: 0,
  });

  const handleIncrement = () => {
    setCount(count + 1);
  };

  
  const handleDecrement = () => {
    if (count > 0) setCount(count - 1); 
  };

  
  const handlePassValue = () => {
    setProfileData({
      name: inputText === '' ? 'Anonymous' : inputText, 
      age: count,
    });
  };

  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Profile name={profileData.name} age={profileData.age} />
      <Counter 
        value={count}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onPassValue={handlePassValue}
      />

      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Input your name here:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ketik namamu..."
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
      </View>

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#0a7ea4',
  },
  inputContainer: {
    width: '100%',
    marginTop: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    width: '100%',
  },
});