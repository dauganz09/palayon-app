import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Feather,AntDesign } from '@expo/vector-icons';
import { colors } from '../constants';

const RequestOrder = () => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=> navigation.navigate("OrderPage")  } style={styles.requestBtn}>
        <View style={styles.iconBox}>
            <Feather name="check-square" size={14} color={colors.orange} />
            <Text style={styles.requestText}>Request for your order</Text>
        </View>
        <View style={styles.iconBox2}>
            {/* <View style={{alignItems: 'center',justifyContent: 'center',width: 16,height:16,borderRadius: '100%',backgroundColor: colors.orange}}> 
                <Text style={{fontSize: 10,fontWeight :'bold',color: colors.text}}>2</Text>
            </View> */}
            <AntDesign name="right" size={18} color={colors.orange} />
        </View>
        
    </TouchableOpacity>
  )
}

export default RequestOrder

const styles = StyleSheet.create({
    requestBtn : {
        width: '100vw', 
        height : 40,
        paddingHorizontal : 14,
        flexDirection : 'row', 
        alignItems :'center',
        justifyContent:'space-between',
        // border : '1px solid yellow'
    },
    iconBox : {
        height : '100%',
        width : '50%',
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent:'space-evenly'
    },
    iconBox2:{
        height : '100%',
        width : '50%',
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent:'flex-end',
        // border : '1px solid yellow'

    },
    requestText : {
        fontSize : 12,
        color : colors.orange
    }
})