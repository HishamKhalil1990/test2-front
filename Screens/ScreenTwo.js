import React, { useState } from "react";
import { Text, StyleSheet, View, Image, Dimensions, TextInput, CheckBox  } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from '@expo/vector-icons';

const dim = Dimensions.get('window').width*0.3;


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
                        <FontAwesome name="user-circle" size={dim*0.9} color="black" />
                    </View>
                    <Text style={styles.labelText}>USER NAME</Text>
                    <TextInput
                        style={styles.inputUser}
                        value={user} 
                        onChangeText={text=>setUser(text)}
                        textAlign={'center'}
                        editable={true}
                    />
                    <Text style={styles.labelText}>PASSWORD</Text>
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
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    screen: {
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#082032'
    },
    image:{
        height:100,
        width:100,
        opacity:1
    },
    userView:{
        height:dim,
        width:dim,
        borderRadius:dim*0.5,
        borderColor:'#FFC947',
        borderWidth:5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff'
    },
    labelText: {
        fontSize:32,
        color:'#fff'
    },
    inputUser: {
        height: 40,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#FFC947',
        color: 'black',
        width:'80%'
    },
    inputPass: {
        height: 40,
        padding: 10,
        fontSize: 20,
        fontWeight:'bold',
        borderRadius: 20,
        backgroundColor: '#FFC947',
        color: 'black',
        width:'80%'
    },
    boxView:{
        flexDirection: 'row',
        justifyContent:'center'
    },
    checkbox: {
        marginRight:10
    },
    boxText:{
        fontSize: 20,
        color:'#fff',
        marginRight:10
    }
});