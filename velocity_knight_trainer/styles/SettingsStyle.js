import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    main_cont: {
        height: windowHeight / 2.65,
        width: windowWidth,
        // backgroundColor: 'rgba(3, 300, 3, .2)',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        rowGap: 0,
    },

    text_cont: {
        width: '78%',
        padding: 5,
    },
    icon_cont: {
        borderRadius: 100,
        height: '80%',
        width: '20%',
        marginTop: 'auto',
        marginBottom: 'auto',
        backgroundColor: ' rgba(130,130,130,.4)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card_cont: {
        flexDirection: 'row',
        height: '100%',
        flex: .5,
        width: '98%',
        marginRight: 'auto',
        marginLeft: 'auto',
        borderRadius: 10,
        borderWidth: 1,
    },
    shadowProp: {
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.7,
        shadowRadius: 2,
        elevation: -10,
        shadowColor: 'rgba(122,122,122,.7)',
    },
    header: { fontSize: 35, fontWeight: 'bold', margin: 3, },
    desc: {
        fontSize: 16, margin: 6,
    },
    card: {
        // backgroundColor: 'red',
        height: windowHeight,
    }
})