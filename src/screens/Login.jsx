import React, { useState, useEffect, useCallback } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Container, Header, Content, Item, Input, Button } from 'native-base';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import { Icon } from 'native-base';


import Splash from './Splash';



export default function Login({ navigation }) {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
      async function prepare() {
        try {
          // Pre-load fonts, make any API calls you need to do here
          await Font.loadAsync(Entypo.font);
          // Artificially delay for two seconds to simulate a slow loading
          // experience. Please remove this if you copy and paste the code!
          await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (e) {
          console.warn(e);
        } finally {
          // Tell the application to render
          setAppIsReady(true);
        }
      }
  
      prepare();
    }, []);
  
    const onLayoutRootView = useCallback(async () => {
      if (appIsReady) {
        // This tells the splash screen to hide immediately! If we call this after
        // `setAppIsReady`, then we may see a blank screen while the app is
        // loading its initial state and rendering its first pixels. So instead,
        // we hide the splash screen once we know the root view has already
        // performed layout.
        await SplashScreen.hideAsync();
      }
    }, [appIsReady]);
  
    if (!appIsReady) {
      return null;
    }

    return (
        <ImageBackground source={require("../screen_images/images/login.png")}
            style={styles.container}
            onLayout = {onLayoutRootView}
        >
            <View style={styles.headerlogin}>
                <View style={styles.logoimage}>
                    <Image source={require("../screen_images/images/login_header_image.png")}
                    ></Image>
                </View>
                <View style={styles.seprator}>
                    <Image source={require("../screen_images/images/seperator_login_header.png")}
                        style={styles.speraterimage}  ></Image>
                </View>
                <View style={styles.textview}>
                    <Text style={styles.text1}> Hello Learner!</Text>
                    <Text style={styles.text2}> Welcome to Iparhai</Text>
                </View>
            </View>
            <View style={styles.loginplaceholder}>
                <View style={{ width: '100%', marginBottom: 20, paddingLeft: 5 }}>
                    <Item rounded>
                        <Icon active name='mail' />
                        <Input placeholder='Email Address' />
                    </Item>
                </View>
                <View style={{ width: '100%', paddingLeft: 5 }}>
                    <Item rounded>
                        <Icon active name='key' />
                        <Input placeholder='Password' />
                    </Item>
                </View>
                <View style={styles.buttonview} >
                    <Button style={{ width: '30%', backgroundColor: '#072A52', borderRadius: 10, paddingLeft: '10%' }}><Text style={{ color: 'white', fontWeight: 'bold' }}>LOGIN</Text></Button>
                    <TouchableOpacity>
                        <Image style={{ marginLeft: 10 }} source={require("../screen_images/images/google.png")}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{ marginLeft: 10 }} source={require("../screen_images/images/facebook.png")}></Image>
                    </TouchableOpacity>

                </View>
                <View style={styles.buttonview} >
                    <Text style={{ opacity: 0.4, fontWeight: 'bold' }}>Don't have an Account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
                        <Text style={{ color: '#072A52', fontWeight: 'bold', textDecorationLine: "underline", textDecorationStyle: "solid", textDecorationColor: '#072A52' }}>
                            Create an Account
                        </Text>
                    </TouchableOpacity>

                </View>


            </View>


        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly'
    },
    headerlogin: {
        flexDirection: 'row',
        justifyContent: 'center',

    },
    logoimage: {

        justifyContent: 'space-between',
        paddingRight: '3%'
    },
    seprator: {
        flexDirection: 'row',
        paddingTop: '1%'

    },
    textview: {
        paddingTop: '1%',

    },
    text1: {
        fontSize: 15,
        fontWeight: '900',
        paddingBottom: 5
    },

    text2: {
        fontWeight: '200'

    },
    speraterimage: {
        width: '3%',
        height: '90%'
    },
    loginplaceholder: {

        // justifyContent: 'center',
        // borderColor : 'red',
        // borderWidth : 9,
        width: '50%',

        marginLeft: 'auto',
        marginRight: 'auto'
    },
    buttonview: {

        marginTop: 15,

        borderRadius: 100,
        flexDirection: 'row',
        justifyContent: 'center',


    },
    googleimgview: {

        borderColor: 'red',
        borderWidth: 1,
        flexDirection: 'row-reverse'


    }
});