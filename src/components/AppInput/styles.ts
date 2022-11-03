import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    contentFlag: {
        width: '100%',
        flexDirection: 'row',
    },

    description: {
        width: 300,
        height: 54,
        position: 'absolute',
        top: -22,
        left: 24,
        backgroundColor: '#262626',
        color: '#FFF',
        padding: 16,
        fontSize:16,
        
        borderRadius: 6,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#0D0D0D'
    },

    button: {
        width: 54,
        height: 54,
        top: -22,
        right: 24,
        position: 'absolute',
        backgroundColor: '#1E6F9F',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    addIcon: {
        color: 'white',
        fontSize: 30,
        height: 30,
        width: 30,
        
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 20
    }


})