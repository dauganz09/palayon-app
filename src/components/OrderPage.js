import { StyleSheet, Text, View,SafeAreaView,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../constants'
import Header from './Header'

const OrderPage = () => {
  return (
   <SafeAreaView style={styles.container}>
       <Header />
       <View style={{flexDirection : 'row', width : '100%',alignItems : 'center',justifyContent : 'space-evenly',height : 40,marginVertical:10}}>
            <Text style={{color : colors.text}}>Order Name: </Text>
            <TextInput style={{border : '1px solid yellow', color: colors.text ,width : '70vw'}} multiline={true} numberOfLines={2} placeholder='Order name' />
            
       </View>
       <TouchableOpacity style={{width: '80%',height: 40,border: '1px solid yellow',borderRadius : 20, alignItems:'center',justifyContent: 'center'}}> 
                <Text style={{color : colors.text}}>Order</Text>
            </TouchableOpacity>
   </SafeAreaView>
  )
}

export default OrderPage

const styles = StyleSheet.create({
    container: {
        display : 'flex',
        flex: 1,
        backgroundColor: colors.darkMaroon,
        alignItems: 'center',
        // justifyContent: 'center',
      },
})