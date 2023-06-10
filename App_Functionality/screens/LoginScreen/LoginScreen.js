import React from 'react';
import { ScrollView,Dimensions, StyleSheet , TextInput, SafeAreaView, TouchableOpacity, View,Text, ScrollViewComponent} from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';
import { useState } from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function HomeScreen ({navigation}) {
const [name, setName] = useState('');
const [title, setTitle] = useState('');

const onFooterLinkPress = () => {
        navigation.navigate('Registration')
    }

return ( 
 <View style={styles.scrollView}>
<SafeAreaView >
<Text style={styles.header}>
  KaiKai
</Text>
<View style={styles.form}>
<TextInput style={styles.input}
placeholder=" FullName"
/>
<TextInput style={styles.input}
placeholder=" Username"
/>
<TextInput style={styles.input}
placeholder=" Password"
/>
<TouchableOpacity
style={styles.button}
onPress={
  function validate(){
    if (TextInput.length === 0){
      return
    }
    else {
      navigation.navigate('DashBoard');
    }
    }
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