import { StyleSheet, Text, View,TouchableOpacity,useWindowDimensions,Modal } from 'react-native'
import React, {useEffect} from 'react'
import { colors } from '../constants'
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const BuyMap = ({isClose =false}) => {
   
    const navigation = useNavigation();
    

  return (
   <TouchableOpacity onPress={()=>navigation.navigate('MapViewBuy')} style={styles.buymap}>
    <View style={styles.circle}>
    <MaterialIcons name="radio-button-on" size={18} color={colors.gold} />
    </View>

    <View style={styles.locationText}>
        <View>
            <Text style={styles.title}>Where to Buy</Text>
            <Text style={styles.subTitle}>In any store</Text>
        </View>
    {
        isClose && <Entypo onPress={()=> console.log('x is pressed')} name="cross" size={18} color="#F5F5F5" />
    }
       
    </View>
     

   </TouchableOpacity>
     
   
  )
}

export default BuyMap

const styles = StyleSheet.create({
    buymap : {
        // border : '1px solid yellow',
        height: 50,
        width: '100%',
        display : 'flex',
        flexDirection : 'row'
    },
    circle : {
        height : 50,
        width : 50,
        display : 'flex',
        alignItems : 'center',
        justifyContent :'center'
    },
    locationText : {
        display : 'flex',
        flexDirection : 'row',
        width : '80vw',
        padding: 5,
        marginLeft: 2,
        borderBottomWidth : '1px',
        borderBottomColor : '#F5F5F5',
        borderBottomSytle : 'solid',
        justifyContent : 'space-between',
        alignItems : 'center'
        
    },
    title : {
        fontWeight : 700,
        fontSize : 16,
        color : colors.text
    },
    subTitle : {
        fontSize : 12,
        color : colors.text
    }


})