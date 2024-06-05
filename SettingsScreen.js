// SettingsScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { settingsStyles as styles } from './styles';

const SettingsScreen = ({ navigation }) => {
  const [apiUrl, setApiUrl] = useState('');

  useEffect(() => {
    const fetchApiUrl = async () => {
      const storedApiUrl = await AsyncStorage.getItem('apiUrl');
      if (storedApiUrl) {
        setApiUrl(storedApiUrl);
      }
    };
    fetchApiUrl();
  }, []);

  const handleSave = async () => {
    if (apiUrl.trim() === '') {
      alert('API URL no puede estar vacia');
      return;
    }
    await AsyncStorage.setItem('apiUrl', apiUrl);
    alert('API URL guardada');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Config</Text>
      <TextInput
        placeholder="API URL"
        value={apiUrl}
        onChangeText={setApiUrl}
        style={styles.input}
      />
      <TouchableOpacity onPress={handleSave} style={styles.button}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
