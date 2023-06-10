import React from 'react';
import {
  ScrollViewComponent,
  Dimensions,
  TextInput,
  SafeAreaView,
  Image,
  TouchableOpacity,
  View,
  Text,
  Alert
} from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';
import { useState } from 'react';
import styles from './styles'
import { Register } from '../../Backend/Authentication';
import firebasedb  from 'firebase';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function RegistrationScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  //const [password, setConfirmPassword] = useState('');


  const onFooterLinkPress = () => {
    navigation.navigate('Login');
  };

  const handleSignUp = () => {
    firebasedb
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            Alert.alert(err.message);
            break;
          case "auth/weak-password":
            Alert.alert(err.message);
            break;
          default: return alert("Proceed to Login")
        }
      });
  };

  return (
 
    
     <View style={styles.container}
     keyboardShouldPersistTaps="always">
      <SafeAreaView >
      <Image
        style={styles.logo}
        source={require('../../assets/favicon.png')}
      />
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#aaaaaa"
        onChangeText={(name) => {setName(name)}}
        value={name}
        name='name'
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaaaaa"
        onChangeText={(email) => {setEmail(email)}}
        value={email}
        name='email'
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholderTextColor="#aaaaaa"
        secureTextEntry
        placeholder="Password"
        onChangeText={(password) => {setPassword(password)}}
        value={password}
        name='password'
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholderTextColor="#aaaaaa"
        secureTextEntry
        placeholder="Confirm Password"
        onChangeText={(password) => {setPassword(password)}}
        value={password}
        name='password'
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={
        handleSignUp 
          }>
        <Text style={styles.buttonTitle}>Create account</Text>
      </TouchableOpacity>
      <View style={styles.footerView}>
        <Text style={styles.footerText}>
          Already got an account?{' '}
          <Text onPress={onFooterLinkPress} style={styles.footerLink}>
            Log in
          </Text>
        </Text>
      </View>
      </SafeAreaView>
    </View>
    
  )
}

export default RegistrationScreen;
