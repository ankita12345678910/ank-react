import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { TextInput } from 'react-native';
import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function SignIn() {
    const router=useRouter();
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
    return (
        <View style={{ padding: 25, marginTop: 60 ,backgroundColor:Colors.White,height:'100%'}}>
            <TouchableOpacity onPress={()=>router.back()}>
            <AntDesign name="back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{ fontFamily: 'rajdhani-bold', fontSize: 40, textAlign: 'center' }}>Let's sign you in</Text>
            <View style={{marginTop:30}}>
                <Text>Email</Text>
                <TextInput style={styles.input} placeholder='Enter your email'/>
            </View>
            <View style={{marginTop:30}}>
                <Text>Password</Text>
                <TextInput secureTextEntry={true} style={styles.input} placeholder='Enter your password'/>
            </View>
            <View style={{backgroundColor:Colors.Black,padding:20,borderRadius:5,marginTop:50}}>
            <Text style={{color:Colors.White,fontFamily:'rajdhani-regular',textAlign:'center',fontSize:25}}>Sign in</Text>
            </View>
            <TouchableOpacity onPress={()=>router.replace("auth/sign-up")} style={{backgroundColor:Colors.White,padding:20,borderRadius:5,marginTop:50,borderColor:Colors.Black,borderWidth:2,}}>
            <Text style={{color:Colors.Black,fontFamily:'rajdhani-regular',textAlign:'center',fontSize:25,}}>Create Account</Text>
            </TouchableOpacity>
            
        </View>
    )
}
const styles = StyleSheet.create({
    input:{
        padding:15,
        borderWidth:2,
        borderRadius:15,
        borderColor:Colors.Gray,
        marginTop:20,
        fontSize:20
    }
})