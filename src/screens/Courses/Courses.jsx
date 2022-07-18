import React, { useState, useEffect, useRef } from 'react';
import {Alert, View, Text, StyleSheet, SafeAreaView, StatusBar, ScrollView, Animated, useWindowDimensions, ImageBackground, Image } from 'react-native';
import {Button} from 'native-base'
import { ProgressBar, MD3Colors } from 'react-native-paper';

import screenBg from '../../screen_images/images/learning_backgroud.png';

const images = new Array(6).fill('https://images.unsplash.com/photo-1556740749-887f6717d7e4');
console.log(images);

const Courses = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const { width: windowWidth, height: windowHeight } = useWindowDimensions();

    return (
        <ImageBackground source={require('../../screen_images/images/learning_backgroud.png')} style={styles.container}>
            <View style={styles.scrollContainer}>
                <ScrollView
                    horizontal={true}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={
                        Animated.event([
                            {
                                nativeEvent: {
                                    contentOffset: {
                                        x: scrollX,
                                    }
                                }
                            }
                        ])
                    }
                    scrollEventThrottle={1}
                >
                    {
                        images.map((image, imageIndex) => {
                            return (
                                <View
                                    style={{
                                        width: windowWidth,
                                    }}
                                    key={imageIndex}
                                >
                                    <View style={styles.innerCard1}>
                                        <View style={styles.innerCrad2}>
                                            <Image
                                                style={{ borderRadius: 15 , borderColor : 'rgba(0,0,0,0.1)', borderWidth : 1}}
                                                source={require('../../screen_images/images/CoursesCard.jpg')}
                                            />
                                        </View>
                                        <View style={styles.innercard3}>
                                            <View style={{
                                                flexDirection: 'row'
                                            }}>
                                                <Image style={styles.icon} source={require('../../screen_images/images/book_card.png')} />
                                                <Text style={styles.gradeText}>Grade 1-</Text>
                                                <Text style={styles.gradeText}>Mathematics</Text>
                                            </View>
                                            <View style={{
                                                flexDirection: 'column'
                                            }}>
                                                <Text style={styles.fadeText}>Class 3</Text>
                                                <Text style={styles.fadeText}>Sindh Text Book Board</Text>
                                                <Text style={styles.NofadeText}>Language : English</Text>
                                                <Text style={styles.NofadeText}>Level : Pre-Assessment</Text>
                                            </View>
                                            <View style={{
                                                flexDirection: 'row'
                                            }}>
                                                <View style={styles.column}>
                                                    <Text style={styles.column__percentage}>56%</Text>
                                                    <ProgressBar progress={0.5} color='#548c2f'/>
                                                </View>
                                                <View style={{flexGrow : 5}}>
                                                    <Button style={styles.btn} onPress={()=>Alert.alert('Hii')}>
                                                        <Text style={styles.btn__text}>View Course</Text>
                                                    </Button>
                                                </View>

                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
            {/* <View style={styles.indicatorContainer}>
                {images.map((image, imageIndex) => {
                    const width = scrollX.interpolate({
                        inputRange: [
                            windowWidth * (imageIndex - 1),
                            windowWidth * imageIndex,
                            windowWidth * (imageIndex + 1)
                        ],
                        outputRange: [8, 16, 8],
                        extrapolate: "clamp"
                    });
                    return (
                        <Animated.View
                            key={imageIndex}
                            style={[styles.normalDot, { width }]}
                        />
                    );
                })}
            </View> */}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollContainer: {
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        flex: 1,
        marginVertical: 4,
        marginHorizontal: 16,
        borderRadius: 5,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center"
    },
    innerCard1: {
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1,
        borderRadius: 15,
        height: '100%',
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'row',
    },
    innerCrad2: {
        borderRadius: 15,
        width: '50%',
        // marginTop : '1%',
        marginLeft: '-5%',
        // marginTop : '1%'
    },
    innercard3: {
        justifyContent : 'space-around',
        width : '60%'
    },
    icon: {
        // borderColor : 'red',
        // borderWidth : 1,
        width: 50,
        height: 50
    },
    gradeText: {
        // borderColor : 'red',
        // borderWidth : 2,
        height: 50,
        lineHeight: 50,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#072A52',
        paddingLeft: 10
    },
    fadeText: {
        opacity: 0.5,
        fontWeight: 'bold'
    },
    NofadeText: {
        fontWeight: 'bold',
        color: '#072A52'
    },
    column: {
        // borderColor: 'blue',
        // borderWidth: 1,
        width : '50%',
        paddingLeft : 1,
        paddingRight : 10,
    },
    column__percentage : {
        color : '#548c2f',
        fontWeight : 'bold'
    },
    btn : {
        backgroundColor : '#072A52',
        borderRadius : 10,
        paddingLeft : 5,
        paddingRight : 5
    },
    btn__text : {
        color : 'white'
    }, 
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: "#072A52",
        marginHorizontal: 4
    },
})

export default Courses;