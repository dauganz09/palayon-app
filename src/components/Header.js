import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants'

export default function Header({title}) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        width: '100%',
        height: 50,
        backgroundColor : colors.gold,
        marginBottom : 10
    },
    title : {
        fontWeight : 700,
        fontSize : 20,
    }
})