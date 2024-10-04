import { View, Text, ToastAndroid } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { TextInput } from 'react-native';
import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../../../configs/FirebaseConfig';


export default function SignIn() {
    const router = useRouter();
    const navigation = useNavigation();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    const onSignIn = () => {
        if (!email && !password) {
            ToastAndroid.show("Please enter email or password", ToastAndroid.LONG);
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                router.replace("/mytrip")
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                if (errorCode == 'auth/invalid-email') {
                    ToastAndroid.show("Invalid email or password", ToastAndroid.LONG);
                }
            });
    }
    return (
        <View style={{ padding: 25, marginTop: 60, backgroundColor: Colors.White, height: '100%' }}>
            <TouchableOpacity onPress={() => router.back()}>
                <AntDesign name="back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{ fontFamily: 'rajdhani-bold', fontSize: 40, textAlign: 'center' }}>Let's sign you in</Text>
            <View style={{ marginTop: 30 }}>
                <Text>Email</Text>
                <TextInput style={styles.input} placeholder='Enter your email' onChangeText={(value) => setEmail(value)} />
            </View>
            <View style={{ marginTop: 30 }}>
                <Text>Password</Text>
                <TextInput secureTextEntry={true} style={styles.input} placeholder='Enter your password' onChangeText={(value) => setPassword(value)} />
            </View>
            <TouchableOpacity onPress={onSignIn} style={{ backgroundColor: Colors.Black, padding: 20, borderRadius: 5, marginTop: 50 }}>
                <Text style={{ color: Colors.White, fontFamily: 'rajdhani-regular', textAlign: 'center', fontSize: 25 }}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.replace("auth/sign-up")} style={{ backgroundColor: Colors.White, padding: 20, borderRadius: 5, marginTop: 50, borderColor: Colors.Black, borderWidth: 2, }}>
                <Text style={{ color: Colors.Black, fontFamily: 'rajdhani-regular', textAlign: 'center', fontSize: 25, }}>Create Account</Text>
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        padding: 15,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: Colors.Gray,
        marginTop: 20,
        fontSize: 20
    }
})