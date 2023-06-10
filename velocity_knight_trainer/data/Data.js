import Phone from '../assets/phone.png'
import Desktop from '../assets/desktop.png'
import Web from '../assets/web.png'
import Tech from '../assets/tech.png'
import { Image } from 'react-native'

const ThemeData = [
    {
        name: "Theme Data",
        desc: "Toogle for Light/dark Theme",
        stateFunc: 'changeTheme',
        func: 'themeState',
    }
]

const MusicData = [
    {
        name: "Play Music",
        desc: "Toogle for Light/dark Theme",
        stateFunc: 'setSong',
        func: 'music',

    }
]

const PlayListData = [
    {
        name: "Create playlist",
        desc: "Toogle for Light/dark Theme",
        stateFunc: 'setSong',
        func: 'soundOn',

    }
]

const SoundData = [
    {
        name: "Toogle Sound",
        desc: "Allow in app sounds or mute",
        stateFunc: 'appSounds',
        func: 'soundOn',
    }
]

export {
    ThemeData,
    MusicData, SoundData, PlayListData
}

