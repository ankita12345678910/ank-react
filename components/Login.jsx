import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

export default function login() {
    const router=useRouter();
    return (
        <View>
            <Image source={require('./../assets/images/login.jpg')} style={{
                width: '100%',
                height: 300,
                marginTop:60
            }} />
            <View style={styles.container}>
                <Text style={{ fontFamily: 'rajdhani-medium', fontSize: 30, textAlign: 'center' }}>Welcome to Happy farmer</Text>
                <Text style={{ fontFamily: 'rajdhani-regular', fontSize: 20, textAlign: 'center', color: Colors.Primary, marginTop:20,}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam totam voluptatum mollitia ipsam enim laudantium ut placeat expedita nulla iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste mollitia repellat odio eos magni animi quam suscipit eaque, quasi at.</Text>
                <TouchableOpacity style={styles.button} onPress={()=>router.push('auth/sign-in')}>
                    <Text style={{ color: Colors.White, fontFamily: 'rajdhani-regular', fontSize: 25, textAlign: 'center' }}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.White,
        marginTop: 10,
        height: '100%',
    },
    button: {
        padding: 15,
        backgroundColor: Colors.Black,
        borderRadius:99,
        marginTop: '25%',
    }
})