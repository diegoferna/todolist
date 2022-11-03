import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 64,  
        backgroundColor: '#262626',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#808080',
        marginBottom: 8,

    },

    checkbox:{
        flex: 1,
        width: 50
        
    },

    title:{
        flex: 3,
        color: 'white',
        lineHeight: 22,
        marginLeft: 16
    },

    titleComplete: {
        flex: 3,
        color: '#808080',
        lineHeight: 22,
        marginLeft: 16,
        textDecorationLine: 'line-through'
    },

    boxDelete: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
})
