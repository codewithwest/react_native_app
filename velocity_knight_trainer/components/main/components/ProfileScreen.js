import React from "react";
import { TextInput } from "react-native";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";
import ProfileStyle from "../../../styles/ProfileStyle";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MaterialCommunityIcons } from '@expo/vector-icons';




const ProfileScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={ProfileStyle.login_cont}>
            <View style={ProfileStyle.icon_cont}>
                <Image
                    style={ProfileStyle.logo}
                    source={require('../../../assets/favicon.png')}
                />
            </View>
            <View style={ProfileStyle.login}>
                {/* Login text cont */}
                <View style={ProfileStyle.login_txt_cont}>
                    <Text style={ProfileStyle.login_txt}>Login</Text>
                </View>
                {/* Login inputs cont */}
                <View style={ProfileStyle.login_input_cont}>
                    <View style={ProfileStyle.input_cont}>
                        <Ionicons style={ProfileStyle.inline_icon}
                            name="md-person" size={32}
                            color="rgba(124,4,4,.9)" />
                        <TextInput
                            inlineImageLeft='search_icon'
                            style={ProfileStyle.text_input}
                            placeholder="Username"
                            placeholderTextColor="rgba(11,11,11,.6)"
                            // onChangeText={(text) => setFullName(text)}
                            // value={fullName}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                            autoComplete="username"
                        />
                    </View>
                    <View style={ProfileStyle.input_cont}>
                        <MaterialCommunityIcons style={ProfileStyle.inline_icon}
                            name="onepassword" size={32}
                            color="rgba(124,4,4,.9)" />
                        <TextInput
                            style={ProfileStyle.text_input}
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
                <View style={ProfileStyle.login_btn_cont}>
                    <TouchableOpacity style={ProfileStyle.login_btn} onPress={() => navigation.navigate('Dashboard')}>
                        <Text style={ProfileStyle.login_btn_txt}>Login</Text>
                    </TouchableOpacity>
                    <Text style={ProfileStyle.acc}>Dont't have an account?</Text>
                    <Text style={ProfileStyle.reg_txt} onPress={() => navigation.navigate('Register')} >Register</Text>

                </View>
                {/* Alt login cont */}
                <View style={ProfileStyle.alt_lgn_cont}>
                    <FontAwesome.Button name="google" borderRadius={8}
                        size={35} backgroundColor="rgba(210,60,20,.9)">
                        Login with Google
                    </FontAwesome.Button>
                </View>
            </View>

        </SafeAreaView>

    )
}

export default ProfileScreen