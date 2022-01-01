import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Icon  from 'react-native-vector-icons/Ionicons';
import StackNavigation from './StackNavigaton';
import SearchScreen from '../screen/search'

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
        initialRouteName="StackNavigation"
        screenOptions={{
            headerShown: false,       
            tabBarActiveTintColor: '#5b1ee9',            
            tabBarLabelStyle:{
                fontSize: 20,
                marginBottom: 5
            },
            tabBarStyle:{
                position: 'absolute',
                backgroundColor: '#ffffffdf',
                height: 60,
                borderWidth: 0,
                elevation: 0,
            }
        }}
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        
    >
        <Tab.Screen 
            name="StackNavigation" 
            component={StackNavigation}
            options={{
                tabBarLabel: 'Listado',
                tabBarIcon: ({color}) => <Icon name='list' color={color} size={25}/>,
                lazy: true,
            }} 
        />
        <Tab.Screen 
            name="SearchScreen" 
            component={SearchScreen}
            options={{
                tabBarLabel: 'Search',
                tabBarIcon: ({color}) => <Icon name='search' color={color} size={25}/>,
                lazy: true
            }}
        />
    </Tab.Navigator>
  );
}