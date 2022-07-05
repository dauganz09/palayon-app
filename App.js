import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import RootNavigator from './src/navigation';


export default function App() {
  return (
    <NavigationContainer>
       <StatusBar style="auto" />
      
       <RootNavigator/>
    </NavigationContainer>
   
  );
}

