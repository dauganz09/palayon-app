import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants'
import Header from './Header'

const Orders = () => {
  return (
    <View style={styles.container}>
     <Header title="Orders" />
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({
  container: {
    display : 'flex',
    flex: 1,
    backgroundColor: colors.darkMaroon,
    alignItems: 'center',
    // justifyContent: 'center',
  },
})