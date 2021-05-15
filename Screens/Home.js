import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../styles/Global';

export default function Home ({ navigation }) {
    const [ review, setReviews ] = useState([
        { title: 'Zelda, Breathe Fresh Air', rating: 3, body: 'Air is oxygen', key: 1 },
        { title: 'Gotta Catch them all', rating: 2, body: 'Air is Carbon', key: 2 },
        { title: 'Not so final fantasy', rating: 4, body: 'Air is hydrogen', key: 3 },
    ])
    return(
        <View style={GlobalStyles.container}>
                <FlatList 
                    keyExtractor={(item) => item.key}
                    data={review}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                            <Text style={GlobalStyles.titleText}>
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                        )
                    }
                />
        </View>
    )
};