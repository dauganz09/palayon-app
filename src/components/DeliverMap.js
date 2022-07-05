import { StyleSheet, Text, View,TouchableOpacity,useWindowDimensions, TextInput } from 'react-native'
import React, {useEffect} from 'react'
import { colors } from '../constants'
import { MaterialIcons } from '@expo/vector-icons';



const DeliverMap = () => {
  
    return (
        <TouchableOpacity style={styles.buymap}>
         <View style={styles.circle}>
         <MaterialIcons name="radio-button-on" size={18} color={colors.orange} />
         </View>
     
         <View style={styles.locationText}>
             <Text style={styles.title}>Where to Deliver</Text>
             {/* <TouchableOpacity 
                style={styles.addressButton}
                >
                    <Text style={styles.btnText} numberOfLines={1} ellipsizeMode='tail'>
                     Street Number, Apartment Number, Other
                    </Text>
            </TouchableOpacity> */}
             
         </View>
          
     
        </TouchableOpacity>
          
        
       )
}

export default DeliverMap

const styles = StyleSheet.create({
    buymap : {
        // border : '1px solid yellow',
        height: 65,
        width: '100%',
        display : 'flex',
        flexDirection : 'row',
        borderBottomWidth : '1px',
        borderBottomColor : '#F5F5F5',
        borderBottomSytle : 'solid',

    },
    circle : {
        height : 65,
        width : 50,
        display : 'flex',
        alignItems : 'center',
        justifyContent :'center'
    },
    locationText : {
        width : '80vw',
        padding: 5,
        marginLeft: 2,
    
        justifyContent : 'space-evenly'
    },
    title : {
        fontWeight : 700,
        fontSize : 16,
        color : colors.text
    },
    subTitle : {
        fontSize : 12,
        color : colors.text
    },
    addressButton : {
        border: '1px solid #F5F5F5',
        height: 30,
        width : '70vw',
        display : 'flex',
        alignItems : 'center',
        justifyContent: 'center',
        color : '#F5F5F5',
        borderRadius : 12,
        paddingHorizontal : 14,
        
    },
    btnText : {
        color : "#F5F5F5",
    }


})