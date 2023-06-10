import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native";
import { } from "react-native-paper";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import RegisterStyle from "../../styles/RegisterStyle";
// import firebase from 'react-native-firebase';


const RegistrationScreen = ({ navigation }) => {
    const initial_form_data = {
        reg_user_name: "",
        reg_email: "",
        reg_password: "",
        reg_con_password: "",
    }
    const [formdata, setFormData] = useState(initial_form_data);
    const display = () => console.log(formdata)
    const handleChange = (e) => {
        setFormData({ ...formdata, [e.target.name]: e.target.value })
    }
    return (
        <SafeAreaView style={RegisterStyle.login_cont}>
            <View style={RegisterStyle.icon_cont}>
                <Image
                    style={RegisterStyle.logo}
                    source={require('../../assets/favicon.png')}
                />
            </View>
            <View style={RegisterStyle.login}>
                {/* Login text cont */}
                <View style={RegisterStyle.login_txt_cont}>
                    <Text style={RegisterStyle.login_txt}>Register</Text>
                </View>
                {/* Login inputs cont */}
                <View style={RegisterStyle.login_input_cont}>
                    <View style={RegisterStyle.input_cont}>
                        <Ionicons style={RegisterStyle.inline_icon}
                            name="md-person" size={32}
                            color="rgba(24,134,24,.9)" />
                        <TextInput
                            inlineImageLeft='search_icon'
                            style={RegisterStyle.text_input}
                            placeholder="Username"
                            placeholderTextColor="rgb(161,161,161)"
                            name="reg_user_name"
                            id="reg_user_name"
                            // value={formdata.reg_user_name}
                            onChangeText={handleChange}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                            autoComplete="username"
                        />
                    </View>
                    <View style={RegisterStyle.input_cont}>
                        <MaterialCommunityIcons style={RegisterStyle.inline_icon}
                            name="email" size={32}
                            color="rgba(24,134,24,.9)" />

                        <TextInput
                            style={RegisterStyle.text_input}
                            placeholder="Email"
                            caretHidden={true}
                            placeholderTextColor="rgb(161,161,161)"
                            // value={formdata.reg_email}
                            name="reg_email"
                            id="reg_email"
                            onChangeText={handleChange}
                            // onChangeText={(text) => setFullName(text)}
                            // value={formdata.reg_email}
                            underlineColorAndroid="transparent"
                            autoComplete="password"
                        />
                    </View>
                    <View style={RegisterStyle.input_cont}>
                        <MaterialCommunityIcons style={RegisterStyle.inline_icon}
                            name="onepassword" size={32}
                            color="rgba(24,134,24,.9)" />
                        <TextInput
                            style={RegisterStyle.text_input}
                            placeholder="Password"
                            caretHidden={true}
                            placeholderTextColor="rgb(161,161,161)"
                            // value={formdata.reg_password}
                            name="reg_password"
                            id="reg_password"
                            onChangeText={() => handleChange}

                            underlineColorAndroid="transparent"
                            autoComplete="password"
                        />
                    </View>
                    <View style={RegisterStyle.input_cont}>
                        <MaterialCommunityIcons style={RegisterStyle.inline_icon}
                            name="onepassword" size={32}
                            color="rgba(24,134,24,.9)" />
                        <TextInput
                            style={RegisterStyle.text_input}
                            placeholder="Confirm Password"
                            caretHidden={true}
                            placeholderTextColor="rgb(161,161,161)"
                            name="reg_con_password"
                            id="reg_con_password"
                            // onChange={handleChange(e)}
                            onChange={() => handleChange}
                            // value={formdata.reg_con_password}
                            underlineColorAndroid="transparent"
                            autoComplete="password"
                        />
                    </View>
                </View>
                {/* Login button cont */}
                <View style={RegisterStyle.login_btn_cont}>
                    <TouchableOpacity style={RegisterStyle.login_btn} onPress={() => {
                        console.log(formdata)
                        // navigation.navigate('Register')
                    }}>
                        <Text style={RegisterStyle.login_btn_txt}>Register</Text>
                    </TouchableOpacity>
                    <Text style={RegisterStyle.acc}>Already have an account?</Text>
                    <Text style={RegisterStyle.reg_txt}
                        onPress={() => navigation.navigate('Login')}>Login</Text>
                </View>
                {/* Alt login cont */}
                <View style={RegisterStyle.alt_lgn_cont}>
                    <FontAwesome.Button name="google" borderRadius={8}
                        size={35} backgroundColor="rgba(210,60,20,.9)">
                        Login with Google
                    </FontAwesome.Button>
                </View>
            </View>

        </SafeAreaView>

    )
}

export default RegistrationScreen