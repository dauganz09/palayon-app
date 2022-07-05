import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { colors } from '../constants'
import deliveryIcon from '../../assets/images/deliveryIcon.png'
const DeliveryType = () => {
  return (
    <View style={styles.deliveryBox}>
      <Text style={styles.deliverText}>Palayon</Text>
      <Image 
        source ={deliveryIcon}
        style={styles.deliveryImage}
        />
      
    </View>
  )
}

export default DeliveryType

const styles = StyleSheet.create({
  deliveryBox : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-evenly',
    margin: 8,
    width : '90%',
    height : 100,
    border : '1px solid yellow',
    backgroundColor : colors.lightMaroon,
    borderRadius : 20,
    borderColor : colors.gold
  },
  deliverText : {
    fontSize : 30,
    fontWeight : 700,
    textTransform : 'uppercase',
    color : colors.text

  },
  deliveryImage : {
    width : 80,
    height :80

  }
})