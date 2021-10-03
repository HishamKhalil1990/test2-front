import React, { useState } from 'react';
import {  StyleSheet, View, Dimensions, TouchableOpacity, Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, MaterialIcons, FontAwesome5, AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const dim = Dimensions.get('window').width

function List(){

  const [adv,setAdv] = useState(true)  

  return (
    <SafeAreaProvider>
        <SafeAreaView>
            <View style={styles.screen}>
                <View style={styles.tobBar}>
                    <TouchableOpacity 
                        style={styles.viewCon}
                        onPress={()=>{}}
                    >
                        <View style={styles.userView}>
                            <SimpleLineIcons name="note" size={40} color="#FFC947" />
                        </View>
                    </TouchableOpacity>
                    {adv?
                    <TouchableOpacity
                        style={styles.btu1}
                        onPress={()=>{setAdv(!adv)}}
                    >
                        <Text style={styles.text1}>
                            Simple
                        </Text>
                    </TouchableOpacity>                    
                    :
                    <TouchableOpacity
                        style={styles.btu1}
                        onPress={()=>{setAdv(!adv)}}
                    >
                        <Text style={styles.text2}>
                            Simple
                        </Text>
                    </TouchableOpacity>                          
                    }
                    {adv?
                    <TouchableOpacity
                        style={styles.btu2}
                        onPress={()=>{setAdv(!adv)}}
                    >
                        <Text style={styles.text2}>
                            Advanced
                        </Text>
                    </TouchableOpacity>                    
                    :
                    <TouchableOpacity
                        style={styles.btu2}
                        onPress={()=>{setAdv(!adv)}}
                    >
                        <Text style={styles.text1}>
                            Advanced
                        </Text>
                    </TouchableOpacity>                          
                    }                    
                </View>
                <View 
                    style={styles.acc}
                >
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        {adv?
                        <Text style={{fontSize:10,color:"#fff"}}>
                            time
                        </Text>
                        :
                        <Text/>
                        }
                        <Text style={styles.accText}>
                            Title
                        </Text>
                        {adv?
                        <Text style={{fontSize:10,color:"#fff"}}>
                            spread
                        </Text>
                        :
                        <Text/>
                        }
                    </View>
                    <View style={styles.accView}>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            {adv?
                            <Text style={{fontSize:10,color:"#fff"}}>
                                low
                            </Text>
                            :
                            <Text/>
                            }
                            <Text style={styles.accText}>
                                Sell
                            </Text>
                            <Text/>
                        </View>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            {adv?
                            <Text style={{fontSize:10,color:"#fff"}}>
                                High
                            </Text>
                            :
                            <Text/>
                            }
                            <Text style={styles.accText}>
                                Buy
                            </Text>
                            <Text/>
                        </View>
                    </View>
                </View>
                <View 
                    style={styles.acc}
                >
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        {adv?
                        <Text style={{fontSize:10,color:"#fff"}}>
                            time
                        </Text>
                        :
                        <Text/>
                        }
                        <Text style={styles.accText}>
                            Title
                        </Text>
                        {adv?
                        <Text style={{fontSize:10,color:"#fff"}}>
                            spread
                        </Text>
                        :
                        <Text/>
                        }
                    </View>
                    <View style={styles.accView}>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            {adv?
                            <Text style={{fontSize:10,color:"#fff"}}>
                                low
                            </Text>
                            :
                            <Text/>
                            }
                            <Text style={styles.accText}>
                                Sell
                            </Text>
                            <Text/>
                        </View>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            {adv?
                            <Text style={{fontSize:10,color:"#fff"}}>
                                High
                            </Text>
                            :
                            <Text/>
                            }
                            <Text style={styles.accText}>
                                Buy
                            </Text>
                            <Text/>
                        </View>
                    </View>
                </View>
                <View 
                    style={styles.acc}
                >
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        {adv?
                        <Text style={{fontSize:10,color:"#fff"}}>
                            time
                        </Text>
                        :
                        <Text/>
                        }
                        <Text style={styles.accText}>
                            Title
                        </Text>
                        {adv?
                        <Text style={{fontSize:10,color:"#fff"}}>
                            spread
                        </Text>
                        :
                        <Text/>
                        }
                    </View>
                    <View style={styles.accView}>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            {adv?
                            <Text style={{fontSize:10,color:"#fff"}}>
                                low
                            </Text>
                            :
                            <Text/>
                            }
                            <Text style={styles.accText}>
                                Sell
                            </Text>
                            <Text/>
                        </View>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            {adv?
                            <Text style={{fontSize:10,color:"#fff"}}>
                                High
                            </Text>
                            :
                            <Text/>
                            }
                            <Text style={styles.accText}>
                                Buy
                            </Text>
                            <Text/>
                        </View>
                    </View>
                </View>                
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
    );
  }

function BarChart(){
  return (
    <SafeAreaProvider>
        <SafeAreaView>
            <View style={styles.screen}>
            
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
    );
  }

function Calender(){
  return (
    <SafeAreaProvider>
        <SafeAreaView>
            <View style={styles.screen}>
            
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
  );
}

function Swap(){
  return (
    <SafeAreaProvider>
        <SafeAreaView>
            <View style={styles.screen}>
            
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
        initialRouteName="List"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#FFC947',
          tabBarInactiveTintColor:'#FFF7AE',
          tabBarActiveBackgroundColor:'#6D8299',
          tabBarInactiveBackgroundColor:'#6D8299'
        }}
      >
        <Tab.Screen
          name="List"
          component={List}
          options={{
            tabBarLabel : '',
            tabBarIcon: ({ color, size }) => (
              <Entypo name="menu" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="BarChart"
          component={BarChart}
          options={{
            tabBarLabel : '',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="bar-chart" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="Calender"
          component={Calender}
          options={{
            tabBarLabel : '',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="calendar-alt" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Swap"
          component={Swap}
          options={{
            tabBarLabel : '',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="swap" color={color} size={size}/>
            ),
          }}
        />
      </Tab.Navigator>
    );
}

export default function ScreenSeven(){
    return(
        <MyTabs/>
    )
}

const styles = StyleSheet.create({
    screen: {
        height:'100%',
        justifyContent:'flex-start',
        alignItems: 'center',
        backgroundColor:'#082032'
    },
    tobBar:{
        width:'100%',
        position:'relative',
        height:70,
        marginBottom:30
    },
    viewCon:{
        position:'absolute',
        bottom:15,
        left:15,
    },
    userView:{
        height:40,
        width:40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btu1:{
        position:'absolute',
        bottom:15,
        left:dim*0.3,
    },
    btu2:{
        position:'absolute',
        bottom:15,
        left:dim*0.6,
    },
    text1:{
        color:'#fff',
        fontSize:20,
    },   
    text2:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
    },
    acc:{
        width:'100%',
        height:80,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#85603F',
        marginBottom:15,
    },
    accText:{
        color:'#fff',
        textAlign:'center',
        marginLeft:10,
        fontSize:25
    },
    accView:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginRight:10,
        width:'40%'
    }    
});