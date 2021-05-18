import { StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
    container: {
        paddingHorizontal: 40,
        paddingVertical: 50,
        flex: 1,
    },
    titleText: {
        fontSize: 18,
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        marginTop: 10,
    },
    btn: {
        marginTop: 10,
    }
})

export const images = {
    ratings: {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    }
}