import React, { useState, useEffect, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, View, Text, StyleSheet, SafeAreaView, StatusBar, ScrollView, Animated, useWindowDimensions, ImageBackground, Image } from 'react-native';
import { Button } from 'native-base'
import { ProgressBar, MD3Colors } from 'react-native-paper';
import { Container, Header, Item, Input, Icon } from 'native-base';


import screenBg from '../screen_images/images/learning_backgroud.png';
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "../Text_Animations/carotext";

const data = [
    {
        imgUrl: ""
    },
    {
        imgUrl: "https://picsum.photos/id/10/200/300",

    },
    {
        imgUrl: "https://picsum.photos/id/12/200/300",
    },
];

const images = new Array(6).fill('https://images.unsplash.com/photo-1556740749-887f6717d7e4');
console.log(images);


   
const Courses = ({navigation}) => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const { width: windowWidth, height: windowHeight } = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const isCarousel = React.useRef(null);

    return (
        <ImageBackground style={styles.container} source={require('../screen_images/images/learning_backgroud.png')}>
            <View style={{
                flexDirection: "row", justifyContent: "space-around"
            }}>
                <View style={{ flexGrow: 3 }}>
                    <Image style={{ width: 200, height: 30, objectFit: 'fill', marginTop: 'auto', marginBottom: 'auto', marginLeft: 4 }} source={require('../screen_images/images/splash_logo.png')}>
                    </Image>
                </View>
                <View style={{}}>
                    <Item rounded style={{ width: 350, paddingBottom: 5, height: 50 }}>

                        <Input style={{ paddingLeft: 15 }} placeholder='Search Courses' />
                        <Icon style={{ paddingTop: 7 }} name="ios-search" />
                    </Item>
                </View>
                <View style={{}}>
                    <Button style={{ backgroundColor: "green", paddingLeft: 7, paddingRight: 7, borderRadius: 20, marginTop: 'auto', marginBottom: 'auto', marginLeft: 4 }}>
                        <Text style={{ color: "white", fontWeight: "bold" }}>Enroll Courses</Text>
                    </Button>
                </View>
            </View>
            <View style={styles.scrollContainer}>
                <Carousel
      s              layout="tinder"
                    layoutCardOffset={9}
                    ref={isCarousel}
                    data={data}
                    renderItem={CarouselCardItem}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    onSnapToItem={(index) => setIndex(index)}
                    useScrollView={true}
                />
        {/* <ImageBackground source={require('../../screen_images/images/learning_backgroud.png')} style={styles.container}>
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
                                                style={{ borderRadius: 15, borderColor: 'rgba(0,0,0,0.1)', borderWidth: 1 }}
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
                                                    <ProgressBar progress={0.5} color='#548c2f' />
                                                </View>
                                                <View style={{ flexGrow: 5 }}>
                                                    <Button style={styles.btn} onPress={() => Alert.alert('Hii')}>
                                                        <Text style={styles.btn__text}>View Course</Text>
                                                    </Button>
                                                </View>

            </View> */}
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
            </View>
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
        // alignItems: 'center',
        // justifyContent: 'center',
        // padding: 30,
        justifyContent: 'space-evenly'


    },
    scrollContainer: {
        // marginTop: 30,
        height: 250,
        alignItems: 'center',
        // justifyContent: 'center',
        padding: 1,


    },
    card: {
        flex: 1,
        marginVertical: 4,
        marginHorizontal: 16,
        borderRadius: 5,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",


    },
    innerCard1: {
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1,
        borderRadius: 15,
        height: '90%',
        width: '70%',
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
        justifyContent: 'space-around',
        width: '60%'
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
        width: '50%',
        paddingLeft: 1,
        paddingRight: 10,
    },
    column__percentage: {
        color: '#548c2f',
        fontWeight: 'bold'
    },
    btn: {
        backgroundColor: '#072A52',
        borderRadius: 10,
        paddingLeft: 5,
        paddingRight: 5
    },
    btn__text: {
        color: 'white'
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