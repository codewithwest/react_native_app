import React from "react";
import { TextInput } from "react-native";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";
import LoginStyle from "../../styles/LoginStyle";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MaterialCommunityIcons } from '@expo/vector-icons';




const LoginScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={LoginStyle.login_cont}>
            <View style={LoginStyle.icon_cont}>
                <Image
                    style={LoginStyle.logo}
                    source={require('../../assets/favicon.png')}
                />
            </View>
            <View style={LoginStyle.login}>
                {/* Login text cont */}
                <View style={LoginStyle.login_txt_cont}>
                    <Text style={LoginStyle.login_txt}>Login</Text>
                </View>
                {/* Login inputs cont */}
                <View style={LoginStyle.login_input_cont}>
                    <View style={LoginStyle.input_cont}>
                        <Ionicons style={LoginStyle.inline_icon}
                            name="md-person" size={32}
                            color="rgba(4,220,4,.8)" />
                        <TextInput
                            inlineImageLeft='search_icon'
                            style={LoginStyle.text_input}
                            placeholder="Username"
                            placeholderTextColor="rgba(4,220,4,.8)"
                            // onChangeText={(text) => setFullName(text)}
                            // value={fullName}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                            autoComplete="username"
                        />
                    </View>
                    <View style={LoginStyle.input_cont}>
                        <MaterialCommunityIcons style={LoginStyle.inline_icon}
                            name="onepassword" size={32}
                            color="rgba(4,220,4,.8)" />
                        <TextInput
                            style={LoginStyle.text_input}
                            placeholder="Password"
                            caretHidden={true}
                            placeholderTextColor="rgba(4,220,4,.8)"
                            // onChangeText={(text) => setFullName(text)}
                            // value={fullName}
                            underlineColorAndroid="transparent"
                            autoComplete="password"
                        />
                    </View>

                </View>
                {/* Login button cont */}
                <View style={LoginStyle.login_btn_cont}>
                    <TouchableOpacity style={LoginStyle.login_btn} onPress={() => navigation.navigate('Dashboard')}>
                        <Text style={LoginStyle.login_btn_txt}>Login</Text>
                    </TouchableOpacity>
                    <Text style={LoginStyle.acc}>Dont't have an account?</Text>
                    <Text style={LoginStyle.reg_txt} onPress={() => navigation.navigate('Register')} >Register</Text>

                </View>
                {/* Alt login cont */}
                <View style={LoginStyle.alt_lgn_cont}>
                    <FontAwesome.Button name="google" borderRadius={8}
                        size={35} backgroundColor="rgba(210,60,20,.9)">
                        Login with Google
                    </FontAwesome.Button>
                </View>
            </View>

        </SafeAreaView>

    )
}

export default LoginScreen