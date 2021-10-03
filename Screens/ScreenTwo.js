import React, { useState } from "react";
import { Text, StyleSheet, View, Image, Dimensions, TextInput, CheckBox, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from '@expo/vector-icons';

const dim = Dimensions.get('window').width*0.2;


export default function ScreenTwo({navigation}){
    
    const [user,setUser] = useState('Username or email');
    const [pass,setPass] = useState('password');
    const [showPass, setShowPass] = useState(false)
    
    function showPassword(value){
        setShowPass(value)
    }

    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={styles.screen}>
                    <Image
                        style={styles.image}
                        source={require('../img/logo.png')}
                    />
                    <View style={styles.userView}>
                        <FontAwesome name="user-circle" size={dim*0.85} color="black" />
                    </View>
                    <Text style={styles.labelTextUser}>USER NAME</Text>
                    <TextInput
                        style={styles.inputUser}
                        value={user} 
                        onChangeText={text=>setUser(text)}
                        textAlign={'center'}
                        editable={true}
                    />
                    <Text style={styles.labelTextPass}>PASSWORD</Text>
                    <TextInput
                        style={styles.inputPass}
                        value={pass} 
                        onChangeText={text=>setPass(text)}
                        textAlign={'center'}
                        secureTextEntry={!showPass}
                    />
                    <View style={styles.boxView}>
                        <CheckBox
                            value={showPass}
                            onValueChange={showPassword}
                            style={styles.checkbox}
                            tintColors={{ true: '#FFC947' }}
                        />
                        <Text style={styles.boxText}>
                            SHOW PASSWORD
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={styles.loginBtu}
                        onPress={() => {navigation.navigate('Account')}}
                    >
                        <Text style={{fontSize:15}}>Log In</Text>
                    </TouchableOpacity>
                    <View style={styles.lastView}>
                        <TouchableOpacity
                            style={styles.btu}
                            onPress={() => {navigation.navigate('Sign')}}
                        >
                            <Text style={{fontSize:15,textAlign:'center'}}>Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btu}
                            onPress={() => {navigation.navigate('Forgot')}}
                        >
                            <Text style={{fontSize:15,textAlign:'center'}}>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    screen: {
        height:'100%',
        justifyContent:'flex-start',
        alignItems: 'center',
        backgroundColor:'#082032'
    },
    image:{
        height:100,
        width:100,
        opacity:1,
        marginTop:70,
    },
    userView:{
        marginTop:35,
        height:dim,
        width:dim,
        borderRadius:dim*0.5,
        borderColor:'#FFC947',
        borderWidth:5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff'
    },
    labelTextUser: {
        marginTop:30,
        fontSize:23,
        color:'#fff',
        marginBottom:5
    },
    inputUser: {
        height: 40,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#FFC947',
        color: 'black',
        width:'80%'
    },
    labelTextPass: {
        marginTop:10,
        fontSize:23,
        color:'#fff',
        marginBottom:5
    },
    inputPass: {
        height: 40,
        padding: 10,
        fontSize: 20,
        fontWeight:'bold',
        borderRadius: 20,
        backgroundColor: '#FFC947',
        color: 'black',
        width:'80%',
        marginBottom:10
    },
    boxView:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10
    },
    checkbox: {
        marginRight:10
    },
    boxText:{
        fontSize: 15,
        color:'#fff',
        marginRight:10
    },
    loginBtu:{
        height: 40,
        padding: 10,
        paddingLeft:30,
        paddingRight:30,
        borderRadius: 20,
        justifyContent:'center',
        backgroundColor: '#FFC947',
        marginBottom:20
    },
    lastView:{
        flexDirection: 'row',
        width:'90%',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10,
    },
    btu:{
        height: 40,
        padding: 10,
        width:'45%',
        borderRadius: 20,
        justifyContent:'center',
        backgroundColor: '#FFC947',
    }
});