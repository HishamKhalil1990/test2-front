import React from "react";
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity, _Text} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Entypo } from '@expo/vector-icons';

export default function ScreenThree({navigation}){
    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={styles.screen}>
                    <View style={styles.tobBar}>
                        <View style={styles.viewCon}>
                            <View style={styles.userView}>
                                <FontAwesome name="user-circle" size={40*0.85} color="black" />
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.menu}
                            onPress={() => {}}
                        >
                            <Entypo name="menu" size={40*0.85} color="#FFC947" />
                        </TouchableOpacity>
                        <Text style={styles.name}>
                            USER NAME
                        </Text>
                    </View>
                    <ImageBackground
                        source={require('../img/logo.png')}
                        style={styles.image}
                    >
                        <Text style={styles.text}>Account List</Text>
                    </ImageBackground>
                    <TouchableOpacity 
                        style={styles.acc}
                        onPress={() => {navigation.navigate('Detail')}}
                    >
                        <Text style={styles.accText}>
                            123456789
                        </Text>
                        <View style={styles.accView}>
                            <Text style={styles.accText}>
                                JOD
                            </Text>
                            <Text style={styles.accText}>
                                VIP JORDAN GOLD
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.acc}
                        onPress={() => {navigation.navigate('Detail')}}
                    >
                        <Text style={styles.accText}>
                            123456789
                        </Text>
                        <View style={styles.accView}>
                            <Text style={styles.accText}>
                                EGP
                            </Text>
                            <Text style={styles.accText}>
                                EGP GOLD
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    screen: {
        height:'100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor:'#082032'
    },
    tobBar:{
        width:'100%',
        position:'relative',
        height:70,
    },
    viewCon:{
        position:'absolute',
        bottom:15,
        left:15,
    },
    userView:{
        height:40,
        width:40,
        borderRadius:40*0.5,
        borderColor:'#fff',
        borderWidth:2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff'
    },
    menu:{
        position:'absolute',
        bottom:17,
        right:15,
    },
    name:{
        position:'absolute',
        bottom:22,
        left:70,
        color:'#fff',
        fontSize:20
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
        fontSize:15,
        color:"#fff",
        position: 'absolute',
        top:40,
        right:7
    },
    acc:{
        width:'90%',
        height:70,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#85603F',
        marginBottom:15,
        borderRadius:10
    },
    accText:{
        color:'#fff',
        textAlign:'center',
        marginLeft:10
    },
    accView:{
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        marginRight:10,
        width:'40%'
    }
});