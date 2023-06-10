import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import Landingstyle from '../styles/LandingStyle'
import Svg, { Defs, Rect, LinearGradient, Stop } from 'react-native-svg';
import LandingStyle from '../styles/LandingStyle';


const [color_1, color_2, color_3] = ['rgba(22, 255, 25,.8)',
    'rgba(255, 0, 0,.8)',
    'rgba(0, 0, 255,.8)'];




const Landing = ({ navigation }) => {
    let [res_text, setResText] = useState('')
    // 3. Create out useEffect function
    useEffect(() => {
        fetch("http://192.168.27.34:3070/velocity_knight_trainer/")
            .then(response => setResText(response.json()))
            .then(data => console.log(data))
    }, [])
    return (
        // <SafeAreaView>
        <View style={{ flex: 1 }}>
            <Svg height="100%" width="100%" style={StyleSheet.absoluteFillObject}>
                <Defs>
                    {/* <radialGradient></radialGradient> */}
                    <LinearGradient id="grad" x1="10%" y1="0%" x2="0%" y2="100%">
                        <Stop offset="0" stopColor={color_1} />
                        <Stop offset="1" stopColor={color_2} />
                        <Stop offset="2" stopColor={color_3} />
                    </LinearGradient>
                </Defs>
                <Rect width="100%" height="100%" fill="url(#grad)" />
            </Svg>
            <SafeAreaView>
                <View style={Landingstyle.landing_cont}>
                    {/* Welcome message cont */}
                    <View style={Landingstyle.welc_cont}>
                        <Text style={Landingstyle.welcome_mes}>
                            Ready to Level Up?
                            {/* {typeof res_text} */}
                        </Text>
                    </View>
                    {/* Buttons Cont */}
                    <View style={LandingStyle.btns}>
                        {
                            res_text.hasOwnProperty('userid') ?
                                <TouchableOpacity style={Landingstyle.start_btn} onPress={() => navigation.navigate('Dashboard')}>
                                    <Text style={Landingstyle.start_txt}>Start</Text>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity style={Landingstyle.login_btn} onPress={() => navigation.navigate('Login')}>
                                    <Text style={Landingstyle.start_txt}>Login</Text>
                                </TouchableOpacity>
                        }
                    </View>
                </View>
            </SafeAreaView >
        </View >
        // </SafeAreaView>
    );
};

export default Landing