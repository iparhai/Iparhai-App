import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import { Form, Item, Input, Icon, Radio, Content, ListItem, Button } from 'native-base';


export default function Forgetpw() {

    return (
        <>
            <ImageBackground source={require("../screen_images/images/login.png")}
                style={styles.container}
            >
                <View style={styles.mainheader}>
                    <View style={styles.backbtn}>
                        <TouchableOpacity>
                            <Image source={require("../screen_images/images/back_button.png")}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.MainBaap}></View>
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
                            <Text style={styles.text2}> Enter Your email Address!</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.vfview1}>
                    <Text style={styles.text3}>Forgot password?  </Text>
                </View>
               
               
                <View style={styles.mainplaceholdercontainer}>
            
                
               
                <View style={styles.mainplaceholder}>
                    <TextInput>
                    
                    <Text style={styles.text4}>Enter your email here!  </Text>
             
                    </TextInput>

                </View>
                </View>

                <View style={styles.navbarText1}>
                        <Item rounded style={{ backgroundColor: '#072A52' }}>
                            <Button transparent style={{marginRight:"5%", marginLeft:"5%" }}>
                                <TouchableOpacity >
                                    <Text style={{ color: 'white',marginLeft:"auto", fontWeight: 'bold' }}>Send OTP</Text>
                                </TouchableOpacity>
                            </Button>
                        </Item>

                    </View>
                    <View style={styles.buttonview} >
                    <Text style={{ opacity: 0.4, fontWeight: 'bold' }}>Didn't received a code ? </Text>
                    <TouchableOpacity >
                        <Text style={{ color: '#072A52', fontWeight: 'bold', textDecorationLine: "underline", textDecorationStyle: "solid", textDecorationColor: '#072A52' }}>
                           Resend Code
                        </Text>
                    </TouchableOpacity>

                </View>

            </ImageBackground>

        </>


    )
}
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: "space-evenly"
        },
        mainheader: {

            flexDirection: "row",


        },
        headerlogin: {
            flexDirection: 'row',

            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            alignItems: "center",
            // marginLeft:'30%'
            flexGrow: 1,

        },
        logoimage: {

        },
        seprator: {
            flexDirection: 'row',
            paddingTop: '0.2%',
            paddingLeft: '2.5%'

        },
        textview: {
            paddingTop: '0.2%',
            paddingLeft: '2.5%'

        },
        text1: {
            fontSize: 15,
            fontWeight: '900',
            paddingBottom: 5
        },

        text2: {
            fontWeight: '200'

        },

        backbtn: {
            
        },
        vfview1: {

        },

        text3: {
            color: '#072A52',
            textAlign: "center",
            fontSize: 18,
            fontWeight: '500'
        },
        text4: {
            color: "grey",
            fontSize: 18,
            fontWeight: '500',
            opacity: 0.8,
           
        },
        vfview2: {

        },

        mainplaceholder: {
            borderColor: '#072A52',
            borderWidth: 2,
            width: "40%",
            height:50,
            padding:10,
           
           
            borderRadius:10,
            

        
        },
        mainplaceholdercontainer: {
            flexDirection: "row",
            justifyContent:"center"
        },
        navbarText1:{
            justifyContent:"center",
            alignItems:"center",
           
        },
        buttonview: {

           
             
            borderRadius: 100,
            flexDirection: 'row',
            justifyContent: 'center',
    
    
        },
        borderStyleBase: {
            width: 30,
            height: 45
          },
        
          borderStyleHighLighted: {
            borderColor:'#072A52',
          },
        
          underlineStyleBase: {
            width: 50,
            height: 45,
            borderWidth: 0,
            borderBottomWidth: 2,
            borderColor:'#072A52',
            color: "grey"
            
          },
        
          underlineStyleHighLighted: {
            borderColor:'#072A52',
          },
    }
)