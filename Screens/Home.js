import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import Card from '../shared/Card';
import { GlobalStyles } from '../styles/Global';
import { MaterialIcons } from '@expo/vector-icons';

export default function Home ({ navigation }) {
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ review, setReviews ] = useState([
        { title: 'Zelda, Breathe Fresh Air', rating: 3, body: 'Air is oxygen', key: 1 },
        { title: 'Gotta Catch them all', rating: 2, body: 'Air is Carbon', key: 2 },
        { title: 'Not so final fantasy', rating: 4, body: 'Air is hydrogen', key: 3 },
    ])
    return(
        <View style={GlobalStyles.container}>
            <Modal visible={modalOpen} animationType="fade">
                <View style={styles.modalContent}>
                    <MaterialIcons 
                        name="close"
                        size={24}
                        onPress={() => setModalOpen(false)}
                        style={{ ...styles.modalToggle, ...styles.modalClose }}
                    />
                    <Text>Hello Forms :)</Text>
                </View>
            </Modal>
            <MaterialIcons 
                name="add"
                size={24}
                onPress={() => setModalOpen(true)}
                style={styles.modalToggle}
            />
                <FlatList 
                    data={review}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                            <Card>
                                <Text style={GlobalStyles.titleText}>
                                    {item.title}
                                </Text>
                            </Card>
                        </TouchableOpacity>
                        )
                    }
                />
        </View>
    )
};

const styles = StyleSheet.create({
    modalContent: {
        flex: 1
    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'orange',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
        borderRadius: 6,
        backgroundColor: '#fff',
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    modalClose: {
        marginTop: 10,
        marginBottom: 0,
        alignSelf: 'flex-end',
        marginHorizontal: 5        
    }
})