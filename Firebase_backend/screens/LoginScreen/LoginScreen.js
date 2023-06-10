import React from 'react';
import { Dimensions, StyleSheet , TextInput, SafeAreaView, TouchableOpacity, View,Text, Alert} from 'react-native';
import { DefaultTheme } from 'react-native-paper';
import { useState } from 'react';
import firebasedb from 'firebase';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function HomeScreen ({navigation}) {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [user, setUser] = useState("");

const onFooterLinkPress = () => {
        navigation.navigate('Registration')
    }
  
    const handleLogin = () => {
      firebasedb
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch((err) => {
          switch (err.code) {
            case "auth/Invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
              Alert.alert(err.message);
              break;
            case "auth/wrong-password":
              Alert.alert(err.message);
              break;
              
              default: 
              return navigation.navigate('DashBoard');
          }
          
        });
        
    };
    
 
    
  

return ( 
 <View style={styles.scrollView}>
<SafeAreaView >
<Text style={styles.header}>
  KaiKai
</Text>
<View style={styles.form}>

<TextInput style={styles.input}
placeholder="E-mail"
placeholderTextColor="#aaaaaa"
onChangeText={(email) => {setEmail(email)}}
value={email}
underlineColorAndroid="transparent"
keyboardType='email-address'
autoCapitalize="none"
/>
<TextInput style={styles.input}
placeholderTextColor="#aaaaaa"
secureTextEntry
placeholder="Password"
onChangeText={(password) => {setPassword(password)}}
value={password}
underlineColorAndroid="transparent"
autoCapitalize="none"
/>
<TouchableOpacity
style={styles.button}
onPress={
  handleLogin
}
    >
<Text>Login</Text>
</TouchableOpacity>
</View>
<View style={styles.footerView}>
                    <Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
                </View>
</SafeAreaView>
</View>
)
}


const styles = StyleSheet.create({
scrollView: {
backgroundColor: DefaultTheme.colors.background,

alignItems: 'center',
justifyContent:'center',
paddingTop:windowHeight/4
},
header:{
  paddingBottom:60,
  textAlign:'center',
  position:'relative',
  fontSize:30,
  textShadowColor:'red',
  
  
},
input:{
  borderBottomColor: 'black',
  borderStyle:'dotted',
  height:50,
  width: 250,
  margin:10,
  //borderWidth:1,
  borderBottomWidth:1,
  padding:10

},
button:{
  
  color:'white',
  alignItems:'center',
  backgroundColor:"#62abea",
 
  padding: 10,
  margin:10,
  borderRadius:10,
  borderWidth:0.3

},
form:{
  alignContent:'center',
},
footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    }
});

export default HomeScreen;