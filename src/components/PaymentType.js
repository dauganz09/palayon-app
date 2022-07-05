import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants'

const PaymentType = () => {
  return (
    <View style={styles.paymentBox}>
      <TouchableOpacity style={styles.innerBox}>
            <Text style={styles.title}>Payment</Text>
            <Text style={styles.subtitle}>In Cash</Text>

      </TouchableOpacity>
        <View style={styles.divider}>

        </View>
      <TouchableOpacity style={styles.innerBox}>
            <Text style={styles.title}>Date and Time</Text>
            <Text style={styles.subtitle}>Now</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PaymentType

const styles = StyleSheet.create({
    paymentBox : {
        flexDirection: 'row',
        height: 50,
        width: '100%',
        borderTopWidth : '1px',
        borderTopColor : '#F5F5F5',
        borderTopStyle : 'solid',
        borderBottomWidth : '1px',
        borderBottomColor : '#F5F5F5',
        borderBottomStyle : 'solid',
        justifyContent : 'space-between',
        alignItems: 'center'

    },
    innerBox : {
        justifyContent :'center',
        paddingLeft: 20,
        width: '48%',
        height: '100%',
        
    },
    divider : {
        height: '60%',
        border: '1px solid #f5f5f5'
    },
    title : {
        fontSize : 12,
        color : '#EFEFEF'
    },
    subtitle : {
        fontSize : 14,
        color : colors.orange
    }
})