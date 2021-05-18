import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import { GlobalStyles } from '../styles/Global';

export default function ReviewForm( props ) {       // here we props instead of destructuring like { addReview }
    return(
        <View style={GlobalStyles.container}>
            <Formik 
                initialValues={{ title: '', body: '', rating: '' }}
                onSubmit={( values, actions ) => {
                    actions.resetForm();
                    props.addReview(values);        // in destructuring case, addReview(values)
                }}
            >
                {( props ) => (
                    <View>
                        <TextInput 
                            style={GlobalStyles.input}
                            placeholder='Title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                        />
                        <TextInput 
                            multiline
                            style={GlobalStyles.input}
                            placeholder='Body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                        />
                        <TextInput
                            style={GlobalStyles.input}
                            keyboardType='numeric'
                            placeholder='Rating'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                        />
                        <View style={GlobalStyles.btn}>
                        <Button 
                            title='Submit'
                            color='maroon'
                            onPress={props.handleSubmit}
                        />
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    )
}