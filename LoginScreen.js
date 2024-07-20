import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { AuthContext } from './AuthContext';

const LoginScreen = () => {
    const { setUser } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleConfirmPasswordChange = (text) => {
        setConfirmPassword(text);
    };

    const passwordsMatch = password === confirmPassword;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <LabeledInput
                label="Email"
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
            />
            <LabeledInput
                label="Password"
                placeholder="Enter your password"
                value={password}
                onChangeText={handlePasswordChange}
                secureTextEntry
            />
            <LabeledInput
                label="Confirm Password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChangeText={handleConfirmPasswordChange}
                secureTextEntry
            />
            {!passwordsMatch && <Text style={styles.errorText}>Passwords do not match</Text>}
            <TouchableOpacity style={styles.buttonContainer} onPress={() => setUser(true)}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        marginBottom: 8,
        color: 'blue',
    },
    inputContainer: {
        marginBottom: 16,
        width: '80%',
    },
    label: {
        fontSize: 14,
        marginBottom: 4,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingHorizontal: 10,
        paddingVertical: 8,
        fontSize: 16,
        width: '100%',
    },
    errorText: {
        color: 'red',
        marginBottom: 8,
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

export default LoginScreen;
