import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    landing_cont: {
        height: windowHeight,
        width: windowWidth,
        backgroundColor: 'rgba(3, 3, 3, .5)',
        flexDirection: 'column',

    },
    welc_cont: {
        flex: 1,
        height: windowHeight / 2,
        marginTop: windowHeight / 6,
        width: windowWidth / 1.06,
        marginLeft: 'auto',
    },
    welcome_mes: {
        fontSize: 45,
        flex: .6,
        color: 'rgba(0,250,20,.6)',
    },
    btns: {
        flex: .2,
        width: windowWidth / 1.5,
        marginLeft: 'auto',
        marginRight: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    start_btn: {
        height: windowHeight / 12,
        width: windowWidth / 3.4,
        backgroundColor: 'rgba(22,222,22,.6)',
        shadowColor: 'red',
        shadowOpacity: .4,
        shadowOffset: 2,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    login_btn: {
        height: windowHeight / 12,
        width: windowWidth / 3.4,
        backgroundColor: 'rgba(22,222,22,.6)',
        shadowColor: 'red',
        shadowOpacity: .4,
        shadowOffset: 2,
        borderRadius: 15,
        marginLeft: 'auto',
        justifyContent: 'center',
        alignItems: 'center'
    },
    start_txt: {
        color: '#fff',
        fontSize: 25
    }
})