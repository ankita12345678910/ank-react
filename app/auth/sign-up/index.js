import { View, Text, TextInput, StyleSheet, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { auth } from './../../../configs/FirebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import firebase from 'firebase/compat/app';

export default function signUp() {
    const router = useRouter();
    const navigation = useNavigation();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [fullname, setFullname] = useState();
    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
    const onCreateAccount = () => {
        if (!email && !password && !fullname) {
            ToastAndroid.show("please fill all details", ToastAndroid.BOTTOM);
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                router.replace("/mytrip")
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorMessage)
            });
    }
    return (

        <View style={{ padding: 25, marginTop: 60, backgroundColor: Colors.White, height: '100%' }}>
            <TouchableOpacity onPress={() => router.back()}>
                <AntDesign name="back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{ fontFamily: 'rajdhani-bold', fontSize: 40, textAlign: 'center' }}>Create your Account</Text>
            <View style={{ marginTop: 30 }}>
                <Text>Full Name</Text>
                <TextInput style={styles.input} placeholder='Enter your full name' onChangeText={(value) => setFullname(value)} />
            </View>
            <View style={{ marginTop: 30 }}>
                <Text>Email</Text>
                <TextInput style={styles.input} placeholder='Enter your email' onChangeText={(value) => setEmail(value)} />
            </View>
            <View style={{ marginTop: 30 }}>
                <Text>Password</Text>
                <TextInput secureTextEntry={true} style={styles.input} placeholder='Enter your password' onChangeText={(value) => setPassword(value)} />
            </View>
            <TouchableOpacity onPress={onCreateAccount} style={{ backgroundColor: Colors.Black, padding: 20, borderRadius: 5, marginTop: 50 }}>
                <Text style={{ color: Colors.White, fontFamily: 'rajdhani-regular', textAlign: 'center', fontSize: 25 }}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.replace("auth/sign-in")} style={{ backgroundColor: Colors.White, padding: 20, borderRadius: 5, marginTop: 50, borderColor: Colors.Black, borderWidth: 2, }}>
                <Text style={{ color: Colors.Black, fontFamily: 'rajdhani-regular', textAlign: 'center', fontSize: 25, }}>Sign in</Text>
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