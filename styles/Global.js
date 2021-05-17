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