import React from "react";
import { TextInput } from "react-native";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import StartStyle from '../../../styles/StartStyle'


const StartScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={StartStyle.login_cont}>
            <View style={StartStyle.icon_cont}>
                <Image
                    style={StartStyle.logo}
                    source={require('../../../assets/favicon.png')}
                />
            </View>
            <View style={StartStyle.login}>
                {/* Login text cont */}
                <View style={StartStyle.login_txt_cont}>
                    <Text style={StartStyle.login_txt}>Login</Text>
                </View>
                {/* Login inputs cont */}
                <View style={StartStyle.login_input_cont}>
                    <View style={StartStyle.input_cont}>
                        <Ionicons style={StartStyle.inline_icon}
                            name="md-person" size={32}
                            color="rgba(124,4,4,.9)" />
                        <TextInput
                            inlineImageLeft='search_icon'
                            style={StartStyle.text_input}
                            placeholder="Username"
                            placeholderTextColor="rgba(11,11,11,.6)"
                            // onChangeText={(text) => setFullName(text)}
                            // value={fullName}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                            autoComplete="username"
                        />
                    </View>
                    <View style={StartStyle.input_cont}>
                        <MaterialCommunityIcons style={StartStyle.inline_icon}
                            name="onepassword" size={32}
                            color="rgba(124,4,4,.9)" />
                        <TextInput
                            style={StartStyle.text_input}
                            placeholder="Password"
                            caretHidden={true}
                            placeholderTextColor="rgba(11,11,11,.6)"
                            // onChangeText={(text) => setFullName(text)}
                            // value={fullName}
                            underlineColorAndroid="transparent"
                            autoComplete="password"
                        />
                    </View>

                </View>
                {/* Login button cont */}
                <View style={StartStyle.login_btn_cont}>
                    <TouchableOpacity style={StartStyle.login_btn} onPress={() => navigation.navigate('Dashboard')}>
                        <Text style={StartStyle.login_btn_txt}>Login</Text>
                    </TouchableOpacity>
                    <Text style={StartStyle.acc}>Dont't have an account?</Text>
                    <Text style={StartStyle.reg_txt} onPress={() => navigation.navigate('Register')} >Register</Text>

                </View>
                {/* Alt login cont */}
                <View style={StartStyle.alt_lgn_cont}>
                    <FontAwesome.Button name="google" borderRadius={8}
                        size={35} backgroundColor="rgba(210,60,20,.9)">
                        Login with Google
                    </FontAwesome.Button>
                </View>
            </View>

        </SafeAreaView>

    )
}

export default StartScreen