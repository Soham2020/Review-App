import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import { GlobalStyles } from '../styles/Global';
import ReviewSchema from '../Schema/ReviewSchema';
import FlatButton from '../shared/FlatButton';

export default function ReviewForm( props ) {       // here we props instead of destructuring like { addReview }
    return(
        <View style={GlobalStyles.container}>
            <Formik 
                initialValues={{ title: '', body: '', rating: '' }}
                validationSchema={ ReviewSchema }
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
                            onBlur={props.handleBlur('title')}
                            value={props.values.title}
                        />
                        <Text style={GlobalStyles.errorTxt}> { props.touched.title && props.errors.title } </Text>
                        <TextInput 
                            multiline
                            style={GlobalStyles.input}
                            placeholder='Body'
                            onChangeText={props.handleChange('body')}
                            onBlur={props.handleBlur('body')}
                            value={props.values.body}
                        />
                        <Text style={GlobalStyles.errorTxt}> { props.touched.body && props.errors.body } </Text>
                        <TextInput
                            style={GlobalStyles.input}
                            keyboardType='numeric'
                            placeholder='Rating'
                            onChangeText={props.handleChange('rating')}
                            onBlur={props.handleBlur('rating')}
                            value={props.values.rating}
                        />
                        <Text style={GlobalStyles.errorTxt}> { props.touched.rating && props.errors.rating } </Text>
                        <View style={GlobalStyles.btn}>
                        <FlatButton title='Submit' onPress={props.handleSubmit} />
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    )
}