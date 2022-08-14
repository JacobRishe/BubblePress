import { View, Text, Dimensions, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

export default function Bubble() {

  // const [bubbleCount, setBubbleCount] = useState(true)
  // const [bubblePress, setBubblePress] = useState(false)
  // const [bubbleCount, setBubbleCount] = useState(0)

  const [bubbles, setBubbles ] = useState([
    { pressed: 'false', id: '1'},
    { pressed: 'false', id: '2'},
    { pressed: 'false', id: '3'},
    { pressed: 'false', id: '4'},
    { pressed: 'false', id: '5'},
    { pressed: 'false', id: '6'},
    { pressed: 'false', id: '7'},
    { pressed: 'false', id: '8'},
    { pressed: 'false', id: '9'},
    { pressed: 'false', id: '10'},
    { pressed: 'false', id: '11'},
    { pressed: 'false', id: '12'},
    { pressed: 'false', id: '13'},
    { pressed: 'false', id: '14'},
    { pressed: 'false', id: '15'},
    { pressed: 'false', id: '16'},
    { pressed: 'false', id: '17'},
    { pressed: 'false', id: '18'},
  ])

  const bubblePressHandler = (id) => {
    console.log(id, 'this is the id')
    setBubbles((prevBubble) => {
      return prevBubble.filter(bubble => bubble.id != id)
      // return prevBubble.filter(bubble => bubble.id != id);
    })
  }

  return (
    <View>
      <FlatList
        numColumns={3}
        keyExtractor={(item) => item.id}
        data={bubbles}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => bubblePressHandler(item.id) } style={styles.outerBubble}>
            <View style={styles.middleBubble}>
              <Text style={styles.item}>{ item.name }</Text>
            </View>
          </TouchableOpacity>
        )}/>
    </View>
  ) 
}

const styles = StyleSheet.create({
  outerBubble: {
    margin: 10,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.27,
    height: Dimensions.get('window').width * 0.27,
    borderWidth: 3,
    borderColor: '#FE4E67',
    backgroundColor: '#FFB0B6',
    alignItems: 'center',
    justifyContent: 'center'
  },
  outerBubble2: {
    margin: 10,
    borderWidth: 1,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.27,
    height: Dimensions.get('window').width * 0.27,
    borderColor: '#FFf',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  middleBubble: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.23,
    height: Dimensions.get('window').width * 0.23,
    justifyContent: 'center',
    backgroundColor:'#FF8B98',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#FE4E67',
  }, 
  btnContainer: {
    alignSelf: 'center',
  }, 
  coreBubble: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.15,
    height: Dimensions.get('window').width * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  }
})