import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Keyboard, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { homeStyles as styles } from './styles';
import { format } from 'date-fns';
import Logo from './Logo';
import { log } from './Logger'; // Importa la función de logging

const HomeScreen = ({ navigation, route }) => {
  const { username, workstation } = route.params;
  const [inputText, setInputText] = useState('');
  const [history, setHistory] = useState([]);
  const [apiUrl, setApiUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    const fetchApiUrl = async () => {
      const storedApiUrl = await AsyncStorage.getItem('apiUrl');
      if (storedApiUrl) {
        setApiUrl(storedApiUrl);
        await log(`API URL set to: ${storedApiUrl}`); // Log the API URL
      } else {
        await log('No API URL found in AsyncStorage');
      }
    };
    fetchApiUrl();
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      inputRef.current.focus();
    });

    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleSend = async () => {
    if (inputText.trim() === '') {
      return;
    }

    const now = new Date();
    const date = format(now, 'ddMMyyyy');
    const time = format(now, 'HH:mm:ss');

    const message = {
      usuario: username,
      estacion: workstation,
      fecha: date,
      hora: time,
      lectura: inputText,
    };

    try {
      await log(`Sending message to API: ${JSON.stringify(message)}`);
      await log(`API URL: ${apiUrl}`);
      //Alert.alert('Sending Message', `URL: ${apiUrl}\nLectura: ${inputText}`);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      });

      await log(`API response status: ${response.status}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setHistory((prevHistory) => {
        const updatedHistory = [
          { lectura: `${workstation}: ${inputText}`, date, time },
          ...prevHistory,
        ];
        return updatedHistory.slice(0, 6); // Mantener solo los primeros 6 elementos
      });

      setInputText('');
      setErrorMessage(''); // Limpiar el mensaje de error si el envío es exitoso
      inputRef.current.focus();
    } catch (error) {
      console.error('Error sending message:', error);
      await log(`Error sending message: ${error.message}`);
      Alert.alert('Error', `Error sending message: ${error.message}`);
      setErrorMessage(
        'Error al enviar el mensaje. Por favor, verifique su conexión y la URL de la API.',
      ); // Establecer mensaje de error
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.historyItem}>
      <Text style={styles.historyText}>{item.lectura}</Text>
      <Text style={styles.historyDate}>
        {item.date} {item.time}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>Scanner</Text>
      <TouchableOpacity
        style={styles.settingsButton}
        onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.settingsButtonText}>Config</Text>
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <TextInput
          ref={inputRef}
          placeholder="SKU"
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={handleSend} // Enviar automáticamente al presionar Enter
          style={styles.textInput}
          autoFocus={true} // Enfocar automáticamente el campo de texto
          blurOnSubmit={false} // Evitar que se pierda el enfoque al enviar
        />
        <TouchableOpacity onPress={handleSend} style={styles.addButton}>
          <Text style={styles.whiteText}>Enviar</Text>
        </TouchableOpacity>
      </View>
      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text> // Mostrar mensaje de error
      ) : null}
      <View style={styles.scrollContainer}>
        <FlatList
          data={history}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
