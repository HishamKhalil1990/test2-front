import React, {useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, ImageBackground} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Input } from "react-native-elements/dist/input/Input";

export default function ScreenFour({navigation}){

    const [mail,setMail] = useState('')
    const [number,setNumber] = useState('')
    const [region,setRegion] = useState('')

    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={styles.screen}>
                    <ImageBackground
                        source={require('../img/logo.png')}
                        style={styles.image}
                    >
                        <Text style={styles.text}>Sign Up</Text>
                    </ImageBackground>
                    <View style={{width:'90%'}}>
                        <Input
                            placeholder={'Mail'}
                            onChangeText={text => setMail(text)}
                            style={styles.input}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.inputContainer}
                            placeholderTextColor={'#F4D19B'}
                        />
                        <Input
                            placeholder={'Number'}
                            onChangeText={text => setNumber(text)}
                            style={styles.input}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.inputContainer}
                            placeholderTextColor={'#F4D19B'}
                        />
                        <Input
                            placeholder={'Region'}
                            onChangeText={text => setRegion(text)}
                            style={styles.input}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.inputContainer}
                            placeholderTextColor={'#F4D19B'}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.btu}
                        onPress={() => {navigation.navigate('Login')}}
                    >
                        <Text style={{fontSize:15,textAlign:'center'}}>Submit</Text>
                    </TouchableOpacity>
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
        opacity:0.4,
        marginTop:70,
        position: 'relative',
        marginBottom:40
    },
    text:{
        fontSize:20,
        color:"#fff",
        position: 'absolute',
        top:40,
        right:15
    },
    input:{
        height:40,
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
        marginTop:40
    }
});