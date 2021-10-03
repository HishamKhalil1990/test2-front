import React from "react";
import {  StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function ScreenSeven({navigation}){
    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={styles.screen}>
                    <TouchableOpacity
                        onPress={() => {navigation.navigate('Login')}}
                    >
                        <Image
                            style={styles.image}
                            source={require('../img/logo.png')}
                        />
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
    image:{
        opacity:1
    }
});