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

import { AppDevData,WebDevData,DeskDevData,TechSDevData} from '../../Data/Data';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Feed({ navigation }) {
  const onAppServiceLinkPress = () => {
    navigation.navigate('AppDev')
  };
  const onWebServiceLinkPress = () => {
    navigation.navigate('WebDev')
  };
  const onDeskServiceLinkPress = () => {
    navigation.navigate('DeskDev')
  };
  const onTechServiceLinkPress = () => {
    navigation.navigate('TechSDev')
  };
  return (
    <SafeAreaView>
      <View style={styles.space}>
      <FlatList
        data={AppDevData}
        contentInset={{ padding: 5 }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.options}
              onPress={onAppServiceLinkPress}>
              <View>
                <Text
                  style={styles.header}>
                  {item.category}
                </Text>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.typeOfService}</Text>
              </View>
              <Image style={styles.images} source={item.image} />
            </TouchableOpacity>
          );
        }}></FlatList>
        </View>
      
      <View style={styles.space}>
      <FlatList
        data={WebDevData}
        contentInset={{ padding: 0.5 }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.options}
              onPress={onWebServiceLinkPress}>
              <View style={{ padding: 5 }}>
                <Text style={styles.header}>
                  {item.category}
                </Text>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.typeOfService}</Text>
              </View>
              <Image style={styles.images} source={item.image} />
            </TouchableOpacity>
          );
        }}></FlatList>
        </View>
      <View style={styles.space}>
      <FlatList
        data={DeskDevData}
        contentInset={{ padding: 0.5 }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.options}
              onPress={onDeskServiceLinkPress}>
              <View style={{ padding: 5 }}>
                <Text
                  style={
                    styles.header
                    
                  }>
                  {item.category}
                </Text>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.typeOfService}</Text>
              </View>
              <Image style={styles.images} source={item.image} />
            </TouchableOpacity>
          );
        }}></FlatList>
        </View>
      
      <View style={styles.space}>
      <FlatList
        data={TechSDevData}
        contentInset={{ padding: 0.5 }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.options}
              onPress={onTechServiceLinkPress}>
              <View style={{ padding: 5 }}>
                <Text
                  style={
                    styles.header
                    
                  }>
                  {item.category}
                </Text>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.typeOfService}</Text>
              </View>
              <Image style={styles.images} source={item.image} />
            </TouchableOpacity>
          );
        }}></FlatList>
        </View>
        
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  space:{padding:4.8},
  header:{ fontSize: 20, fontWeight: 'bold', margin: 3.3 },
  images: {
    height: 89,
    width: 89,
    position: 'absolute',
    right: 0,
    margin: 10,
    bottom: 0,
  },
  options: {
    marginHorizontal: 3,
    marginTop: 0.5,
    backgroundColor: 'white',
    borderRadius: 1,
    height: windowHeight * 0.17,
  },
  text: {
    fontSize: 14,
    margin: 3,
  },
});

export default Feed;
