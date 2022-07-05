import { StyleSheet, Text, View ,SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import {colors } from '../constants'
import Header from '../components/Header'
import BuyMap from '../components/BuyMap'
import DeliverMap from '../components/DeliverMap'
import RequestOrder from '../components/RequestOrder'
import PaymentType from '../components/PaymentType'
import DeliveryType from '../components/DeliveryType'
import { useNavigation } from '@react-navigation/native'


const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
        <Header title='Palayon App'/>
        <BuyMap  />
        <DeliverMap/>
        <RequestOrder/>
        <PaymentType />
        <DeliveryType />
        
        <TouchableOpacity style={styles.orderBtn} >Order</TouchableOpacity>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
      display : 'flex',
      flex: 1,
      backgroundColor: colors.darkMaroon,
      alignItems: 'center',
      // justifyContent: 'center',
    },
    orderBtn : {
      height: 40,
      width : 300,
      borderRadius : 20,
      backgroundColor : colors.gold,
      alignItems : 'center',
      justifyContent : 'center',
      color : colors.text,
      fontSize : 20,
      fontWeight : 700,
      textTransform : 'uppercase'
    }
  });