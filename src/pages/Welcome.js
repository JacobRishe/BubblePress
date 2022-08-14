import { View, Text, StyleSheet, ImageBackground, Dimensions, TouchableHighlight} from 'react-native'
import React from 'react'

export default function Welcome({navigation}) {

  return (

        <View style={styles.container}>
            <ImageBackground
                style={styles.welcomeImage}
                source={require('../images/bubbleBackground.jpeg')}
                resizeMode='cover'
            >       
                <View style={styles.textBackground}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>BubblePress</Text>
                    </View>
                    <View style={styles.desContainer}>
                        <Text style={styles.description}>Press the bubble to make them pop!</Text>
                    </View>
                </View>
                <TouchableHighlight style={styles.bubbleContainer} onPress={() => navigation.navigate('Round1')}>
                    <View style={styles.button}>
                        <View style={styles.innerBubble}>
                            <Text style={styles.btnText}>Begin</Text>
                        </View>
                    </View>
                </TouchableHighlight>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Bubbles Background Vectors by Vecteezy</Text>
                </View>
            </ImageBackground>
        </View>
  )
}       

const styles = StyleSheet.create({
    beginContainer: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.26,
        height: Dimensions.get('window').width * 0.26,
        justifyContent: 'center',
        backgroundColor:'transparent',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: '#53B220',
        backgroundColor: '#6BE62A'
    },
    bubbleContainer: {
        alignSelf: 'center',
        marginTop: -20,
        margin: 10,
        borderWidth: 4,
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.24,
        height: Dimensions.get('window').width * 0.24,
        borderColor: '#A10FAB',
        backgroundColor: '#C21CD1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').width * 0.2,
        justifyContent: 'center',
        backgroundColor:'#A10FAB',
        alignItems: 'center',
        borderWidth: 6,
        borderColor: '#D72BDB',
    }, 
    btnText: {
        fontFamily: 'Arial',
        color: '#fff',
        fontWeight: '900'
    },
    container: {
        flex: 1,
    },
    description: {
        color: '#fff',
        fontSize: 20
    },
    desContainer: {
        flex: 1,
    },
    footer: {
        position: 'absolute',
        bottom: 25,
        alignSelf: 'center',

    },
    footerText: {
        color: '#fff'
    },
    innerBubble: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.15,
        height: Dimensions.get('window').width * 0.15,
        justifyContent: 'center',
        backgroundColor:'#D72BDB',
        alignItems: 'center',
        borderWidth: 6,
        borderColor: '#D72BDB',
    },
    textBackground: {
        backgroundColor: "#000000b0",
        alignItems: 'center',
        height: 120,
    },
    title: {
        fontFamily: 'verdana',
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
   },
   titleContainer: {
        flex: 1.2,
   },
    welcomeImage: {
        flex: 1,
        justifyContent: "center"
   }
})