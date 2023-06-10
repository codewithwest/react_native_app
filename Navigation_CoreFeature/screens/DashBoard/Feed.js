import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import projectData from '../../Data/Data';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Feed() {
  const onServiceLinkPress = () => {
       alert("no srveces rendered yet")    }
  return (
   
      <SafeAreaView>
        <FlatList
          data={projectData}
          contentInset={{ padding: 10 }}
          renderItem={({ item }) => {
            return (
              
              <TouchableOpacity style={styles.options} onPress={onServiceLinkPress}>
                <View>
                <Text style ={styles.text, {fontSize:16, fontWeight: 'bold', margin:3.3}}>{item.category}</Text>
                <Text style ={styles.text}>{item.name}</Text>
                <Text style ={styles.text}>{item.typeOfService}</Text>
                </View>
                <Image style={styles.images} source={item.image} />
              </TouchableOpacity>
            );
          }}></FlatList>
      </SafeAreaView>
   
  );
}
const styles = StyleSheet.create({

  images: {
    height: 69,
    width:69,
    position:'absolute',
    right: 0,
    margin:10,
    bottom: 0,
    
  },
  options: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 1,
    height: windowHeight* 0.17,
  },
  text:{
    fontSize:14,
    margin:3,
  }
});

export default Feed;
