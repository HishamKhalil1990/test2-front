import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Input } from "react-native-elements/dist/input/Input";

export default function ScreenFive({navigation}){

    const [number,setNumber] = useState('')

    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={styles.screen}>
                    <Input
                        placeholder={'Number'}
                        onChangeText={text => setNumber(text)}
                        style={styles.input}
                        inputContainerStyle={styles.inputContainer}
                        inputStyle={styles.inputContainer}
                        placeholderTextColor={'#F4D19B'}
                    />
                    <TouchableOpacity
                        style={styles.btu}
                        onPress={() => {navigation.navigate('Reset')}}
                    >
                        <Text style={{fontSize:15,textAlign:'center'}}>Reset Password</Text>
                    </TouchableOpacity>
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
    input:{
        height:40,
        marginBottom:10,
    },
    inputContainer:{
        borderBottomColor: '#FFC947',
        color: '#FFC947'
    },
    btu:{
        height: 40,
        padding: 10,
        width:'45%',
        borderRadius: 20,
        justifyContent:'center',
        backgroundColor: '#FFC947',
        marginTop:10
    }
});