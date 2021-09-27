import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
//import StackNavigation from './src/navigation/StackNavigaton';
import { Tabs } from './src/navigation/Tabs';


const App = () => {
  return(
    <NavigationContainer>
      {/* <StackNavigation />*/}
      <Tabs />
    </NavigationContainer>
  )
}

export default App