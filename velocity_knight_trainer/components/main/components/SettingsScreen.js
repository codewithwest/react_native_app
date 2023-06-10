import React from 'react';
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    Image,
    Dimensions,
    SettingsStyleheet,
    ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MusicData, PlayListData, SoundData, ThemeData } from '../../../data/Data';
import SettingsStyle from '../../../styles/SettingsStyle';
// import SettingsStyle from '../../styles/SettingsStyle';

// import { AppDevData, WebDevData, DeskDevData, TechSDevData } from '';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const dataCollection = [ThemeData, MusicData, PlayListData, SoundData]

function Settings({ navigation }) {
    const themeState = (theme) => {
        return theme ? <Ionicons name="sunny" size={40} color="black" /> :
            <Ionicons name="moon" size={40} color="black" />
    }
    const music = (music) => {
        return music ? <Feather name="play-circle" size={40} color="black" /> :
            <Feather name="pause-circle" size={40} color="black" />
    }
    const soundOn = (sounds) => {
        return sounds ? <Entypo name="sound" size={40} color="black" /> :
            <Entypo name="sound-mute" size={40} color="black" />
    }
    // state definition
    const [dark, setMode] = React.useState(false);
    const [musicPlaying, setSong] = React.useState(false);
    const [sound, setSounds] = React.useState(false);
    // const sontnts = [dark, musicPlaying, sound]

    // state change Handle
    const changeTheme = () => {
        setMode(!dark);
    };
    const songPlaying = () => {
        setSong(!musicPlaying);
    };
    const appSounds = () => {
        setSounds(!sound);
    };
    const cards = (dataName, stateFunc, mainFunc) => {
        // dataCollection.forEach(element => {

        return <FlatList
            style={SettingsStyle.card}
            data={dataName}
            contentInset={{ padding: 1 }}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity
                        style={[SettingsStyle.card_cont, SettingsStyle.shadowProp]}
                        onPress={() => stateFunc()}>
                        <View style={SettingsStyle.text_cont}>
                            <Text
                                style={SettingsStyle.header}>
                                {item.name}
                            </Text>
                            <Text style={SettingsStyle.desc}>{item.desc}</Text>
                        </View>
                        <View style={SettingsStyle.icon_cont}>
                            {mainFunc}
                        </View>
                    </TouchableOpacity>
                )
            }
            }>

        </FlatList >

    }

    return (
        <ScrollView>
            <View style={SettingsStyle.main_cont}>
                {cards(dataCollection[0], changeTheme, themeState(dark))}
                {cards(dataCollection[1], songPlaying, music(musicPlaying))}
                {cards(dataCollection[3], appSounds, soundOn(sound))}
            </View>
        </ScrollView>
    );
}

export default Settings;
