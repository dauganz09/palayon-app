import  {createNativeStackNavigator} from "@react-navigation/native-stack"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../screens/Home";
import Orders from "../components/Orders";
import Profile from "../components/Profile";
import { AntDesign,Ionicons  } from '@expo/vector-icons';
import { colors } from "../constants";
import MapViewBuy from "../components/MapViewBuy";
import OrderPage from "../components/OrderPage";

const Stack = createNativeStackNavigator();


const RootNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeTabs}/>
        </Stack.Navigator>
        )
};


const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () =>{
    return (
        <Tab.Navigator barStyle={{backgroundColor : colors.gold}}>
            <Tab.Screen name='Home' component={HomeStackNavigator} 
                options={{tabBarIcon : ({color}) => <Ionicons name="home-outline" size={24} color={color} /> }}/>
            <Tab.Screen name="Orders" component={Orders}
                options={{tabBarIcon : ({color})=> <Ionicons name="fast-food-outline" size={24} color={color} />}} />

        </Tab.Navigator>
    )
}

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () =>{
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="MapViewBuy" component={MapViewBuy} />
            <HomeStack.Screen name="Orders" component={Orders} />
            <HomeStack.Screen name="OrderPage" component={OrderPage} />
        </HomeStack.Navigator>
    )
}

export default RootNavigator;


// export default RootNavigator;
