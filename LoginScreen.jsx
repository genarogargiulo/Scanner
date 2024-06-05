// LoginScreen.js
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {loginStyles as styles} from './styles';
import Logo from './Logo';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [workstation, setWorkstation] = useState('0001');

  const handleLogin = () => {
    if (username && password && workstation) {
      navigation.navigate('Home', {username, workstation});
    } else {
      alert('Completar campos requeridos');
    }
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Text style={styles.label}>Workstation</Text>
      <Picker
        selectedValue={workstation}
        onValueChange={itemValue => setWorkstation(itemValue)}
        style={styles.picker}>
        <Picker.Item label="0001" value="0001" />
        <Picker.Item label="0002" value="0002" />
      </Picker>
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
