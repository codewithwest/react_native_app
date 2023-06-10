import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    login_cont: {
        height: windowHeight,
        width: windowWidth,
        backgroundColor: 'rgba(10, 10, 10, .9)',
        flexDirection: 'column',
    },
    icon_cont: {
        flex: .13,
        marginTop: windowHeight / 16,
        width: windowWidth / 4,
        marginLeft: 'auto',
        borderRadius: 100,
        marginRight: 'auto',
        justifyContent: 'center',
        // backgroundColor: 'rgba(3, 3, 3, .3)',
    },
    logo: {
        flex: .58,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    login: {
        flex: .82,
        width: windowWidth / 1.06,
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'center',
    },
    login_txt_cont: {
        flex: .12,
        width: windowWidth / 1.5,
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    login_txt: {
        color: 'rgba(220,220,220,.9)',
        fontSize: 45,
    },
    login_input_cont: {
        flex: .35,
        width: windowWidth / 1.2,
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
    },
    login_btn_cont: {
        flex: .25,
        width: windowWidth / 1.2,
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    alt_lgn_cont: {
        flex: .1,
        width: windowWidth / 1.2,
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    input_cont: {
        flexDirection: 'row',
        flex: .32,
        width: windowWidth / 1.5,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: 'rgba(4,220,4,.8)',
        borderWidth: 4,
        fontSize: 20,
        borderBottomLeftRadius: 10,
        alignItems: 'center'
    },
    inline_icon: {
        flex: .15,
    },
    text_input: {
        flex: .82,
        fontSize: 20,
        borderBottomLeftRadius: 10,
        marginLeft: 'auto',
    },
    login_btn: {
        flex: .6,
        backgroundColor: 'rgba(23,230,20,.5)',
        borderRadius: 10,
        borderColor: 'rgb(22,33,,77)',
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth / 2.1,
        borderWidth: 1,
    },
    login_btn_txt: {
        fontSize: 26,
    },
    reg_txt: {
        color: '#1affff',
        textDecorationLine: 'underline',
        textDecorationColor: 'yellow',
        fontSize: 18,
    }
    , acc: {
        fontSize: 16,
        color: '#ffa',
    }
})