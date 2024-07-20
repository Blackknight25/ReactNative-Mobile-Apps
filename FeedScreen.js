import React, { createContext, useContext, useState } from 'react';
import { ScrollView, Image, TextInput, TouchableOpacity, StyleSheet, Text, View, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AuthContext } from './AuthContext';

const FeedScreen = () => {
    const [petName, setPetName] = useState('');
    const [petDOB, setPetDOB] = useState('');
    const [breed, setBreed] = useState('');
    const [favoriteToy, setFavoriteToy] = useState('');

    const { setUser } = useContext(AuthContext);
    const localImage = require('./assets/favicon.png');

    const handleLogout = () => {
        setUser(false);
    }

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={styles.container}
            enableOnAndroid={true}
            extraScrollHeight={20}
        >
            <View style={styles.row}>
                <Text style={[styles.text, styles.marginRight]}>Hello, this is my first mobile app</Text>
                <TouchableOpacity style={styles.buttonContainer} onPress={handleLogout}>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
            </View>
            <Image
                style={{ justifyContent: 'center', marginBottom: 16 }}
                source={localImage}
                resizeMode="contain"
            />
            <LabeledInput
                label="Pet's Name"
                placeholder="Enter your pet's name"
                value={petName}
                onChangeText={setPetName}
            />
            <LabeledInput
                label="Pet's Date of Birth"
                placeholder="Enter your pet's DOB"
                value={petDOB}
                onChangeText={setPetDOB}
            />
            <LabeledInput
                label="Breed"
                placeholder="Enter your pet's breed"
                value={breed}
                onChangeText={setBreed}
            />
            <LabeledInput
                label="Favorite Toy"
                placeholder="Enter your pet's favorite toy"
                value={favoriteToy}
                onChangeText={setFavoriteToy}
            />
        </KeyboardAwareScrollView>
    );
};

const LabeledInput = ({ label, placeholder, value, onChangeText, secureTextEntry }) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
            <Text>{value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "pink",
        padding: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 16,
        marginBottom: 4,
    },
    marginRight: {
        marginRight: 16,
    },
    text: {
        fontWeight: 'bold',
    },
    inputContainer: {
        marginBottom: 16,
    },
    label: {
        fontSize: 18,
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 5,
        padding: 10,
        fontSize: 18,
    },
    errorText: {
        color: 'red',
        marginBottom: 16,
    },
    buttonContainer: {
        backgroundColor: '#6200ea',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginVertical: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});

export default FeedScreen;