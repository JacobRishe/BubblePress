import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React, {useState} from 'react'

import Bubble from '../components/Bubble1'
import Bubble2 from '../components/Bubble2'

export default function Play() {

  return (

    <View style={styles.container}>
      <ImageBackground
          style={styles.welcomeImage}
          source={require('../images/round1bkgd.jpg')}
          resizeMode='cover'
      >       
          <View style={styles.textBackground}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>BubblePress</Text>
            </View>
          </View>
          <View>
            <Bubble />
          </View>
          <View>
            <Bubble2 />
          </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  description: {
      color: '#fff',
      fontSize: 20
  },
  textBackground: {
      alignItems: 'center',
  },
  title: {
      marginTop: 25,
      paddingTop: 10,
      fontFamily: 'verdana',
      color: "white",
      fontSize: 42,
      fontWeight: "bold",
  },
  welcomeImage: {
      flex: 1,
  }
})

