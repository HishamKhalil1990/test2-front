import React, { useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function ScreenSix({navigation}){

    useEffect(() =>{
        setTimeout(()=>{navigation.navigate('Logo')},1000)
    },[])

    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={styles.screen}>
                    <Text style={styles.text}>We Will Send You {'\n'} A Massage To {'\n'} {'\n'} 0791234567</Text>
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
    text:{
        color:'#fff',
        fontSize:25,
        textAlign:"center"
    }
});