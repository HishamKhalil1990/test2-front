import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function ScreenFive({navigation}){
    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={styles.screen}>
                    
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
    }
});