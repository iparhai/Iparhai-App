import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native'
import { Form, Item, Input, Icon, Radio, Content, ListItem, Button } from 'native-base'
import axios from 'axios';


function Registration({ navigation }) {

    const goBack = () => {
        navigation.navigate('Login')
    }
    const goLogin = () => {
        navigation.navigate('Login')
    }

    return (
        <ImageBackground
            source={require('../screen_images/images/learning_backgroud.png')}
            style={styles.container}
        >
            <View style={styles.navBar}>
                <View style={styles.backBtnHolder}>
                    <TouchableOpacity onPress={goBack}>
                        <Image
                            source={require('../screen_images/images/back_button.png')}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.navbarText1}>
                    <Text style={styles.navbarText1__inner1}>Create an Account</Text>
                    <Text style={styles.navbarText1__inner2}>Hello Dost, Welcome to iParhai</Text>
                </View>
                <View style={styles.navbarText2}>
                    <Text style={styles.navbarText2__inner1}>
                        Already have an Account?
                        <TouchableOpacity onPress={goLogin}>
                            <Text style={styles.navbarText1__innerInner2}> Login</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </View>
            <Form style={styles.form__main}>
                <View style={styles.form__mainRow1}>
                    <View style={styles.navbarText1}>
                        <Item rounded>
                            <Icon active name='person' />
                            <Input placeholder='Name' />
                        </Item>
                    </View>
                    <View style={styles.navbarText1}>
                        <Item rounded>
                            <Icon active name='mail' />
                            <Input placeholder='Email Address' />
                        </Item>
                    </View>
                </View>
                <View style={styles.form__mainRow1}>
                    <View style={styles.navbarText1}>
                        <Item rounded>
                            <Icon active name='key' />
                            <Input placeholder='Password' />
                            <Icon active name='eye' />
                        </Item>
                    </View>
                    <View style={styles.navbarText1}>
                        <Item rounded>
                            <Icon active name='key' />
                            <Input placeholder='Re Enter Password' />
                            <Icon active name='eye' />
                        </Item>
                    </View>
                </View>
                <View style={styles.form__mainRow1}>
                    <View style={styles.navbarText1}>
                        <Item rounded>
                            <Icon active name='location' />
                            <Input placeholder='Country' />
                        </Item>
                    </View>
                    <View style={styles.navbarText1}>
                        <Item rounded>
                            <Icon active name='location' />
                            <Input placeholder='City' />
                        </Item>
                    </View>
                    <View style={styles.navbarText1}>
                        <Item rounded>
                            <Icon active name='calendar' />
                            <Input placeholder='Date' />
                        </Item>
                    </View>
                </View>
                <View style={styles.form__mainRow1}>
                    <View style={styles.navbarText1}>
                        <Content>
                            <ListItem>
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Gender </Text>
                                <Radio
                                />
                                <Text>Male</Text>
                                <Radio
                                />
                                <Text>Female</Text>
                            </ListItem>
                        </Content>
                    </View>
                    <View style={styles.navbarText1}>
                        <Item rounded style={{ backgroundColor: '#072A52' }}>
                            <Button transparent style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                                <TouchableOpacity onPress={()=>navigation.navigate('Courses')}>
                                    <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>CREATE ACCOUNT</Text>
                                </TouchableOpacity>
                            </Button>
                        </Item>
                    </View>
                    <View style={styles.navbarText1}>
                        <Item rounded>
                            <Button transparent style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                                <TouchableOpacity onPress={goLogin}>
                                    <Image
                                        source={require('../screen_images/images/facebook.png')}
                                        style={{ marginRight: 5 }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={goLogin} sty>
                                    <Image
                                        source={require('../screen_images/images/google.png')}
                                    />
                                </TouchableOpacity>
                            </Button>
                        </Item>
                    </View>
                </View>
            </Form>

            <SafeAreaView>
                <StatusBar
                    backgroundColor='#072A52'
                    style='light'
                >
                </StatusBar>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default Registration;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        padding: 20
    },
    navBar: {
        // borderColor: 'blue',
        // borderWidth: 1,
        flexDirection: 'row'
    },
    backBtnHolder: {
        // borderColor: 'blue',
        // borderWidth: 1
    },
    navbarText1: {
        flexGrow: 5,
        paddingLeft: 15
        // borderColor: 'green',
        // borderWidth: 1
    },
    navbarText1__inner1: {
        color: 'black',
        fontWeight: '600',
        fontSize: 16
    },
    navbarText1__inner2: {
        color: 'black',
        opacity: 0.5
    },
    navbarText2: {
        flexGrow: 5,
        // borderColor: 'yellow',
        // borderWidth: 5,
    },
    navbarText2__inner1: {
        textAlign: 'right',
        opacity: 0.5,
        color: 'black',
        marginTop: 0,
        paddingBottom: 0
    },
    navbarText1__innerInner2: {
        color: '#072A52',
        fontWeight: 'bold',
    },
    form__main: {
        flex: 1,
        justifyContent: 'space-evenly'
    },
    form__mainRow1: {
        // borderColor: 'blue',
        // borderWidth: 2,
        flexDirection: 'row'
    }
})