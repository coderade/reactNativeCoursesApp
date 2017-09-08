import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        backgroundColor: '#F5FCFF',
        paddingTop: 10
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: 10
    },
    card: {
        marginTop: 10
    },
    icon: {
        width: 26,
        height: 26
    },
    list: {
        paddingLeft: 5,
        paddingRight: 5
    },
    title: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 412,
        left: 0,
        fontSize: 15,
        backgroundColor: 'rgba(245,252,255,0.60)'
    },
    action: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#f5fcff'
    }
});

export default styles;