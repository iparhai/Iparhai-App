import React from "react";
import { Alert,View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { Button } from 'native-base'
import { ProgressBar, MD3Colors } from 'react-native-paper';
export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCardItem = ({ item, index }) => {
    return (
        <View style={styles.container} key={index}>
            <View style={{ flexGrow: 1, marginTop: 'auto', marginBottom: 'auto' }}>
                <Image source={require('../screen_images/images/CoursesCard.jpg')} style={styles.image} >
                </Image>
            </View>

            <View style={styles.innercard3}>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Image style={styles.icon} source={require('../screen_images/images/book_card.png')} />
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

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 8,
        width: "90%",
        height: "98%",
        // paddingBottom: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    image: {
        width: '80%',
        height: '120%',
        borderRadius: 15,
        
     

    },

    body: {
        color: "#222",
        fontSize: 18,
        paddingLeft: 20,
        paddingLeft: 20,
        paddingRight: 20,
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
        justifyContent: 'space-around',
        // width : '60%'
        paddingBottom:"auto",
        paddingTop:"auto",

        height: 'auto'
        // flexGrow : 2

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
});

export default CarouselCardItem;