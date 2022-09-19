/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, Text, Image, View, useWindowDimensions, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


import NotFoundScreen from '../screens/NotFoundScreen';
import ShareScreen from '../screens/ShareScreen';

import HomeScreen from '../screens/HomeScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen'; //////////////
import FastShareFTF from '../screens/FastShareFTF';


import Contacts from '../screens/Contacts';

import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';





export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
  
      <Stack.Screen 
          name="Chats"
          component={TabNavigator}
          options={{ headerTitle: HomeHeader, }}
          />
       
      <Stack.Group screenOptions={{ presentation: "card" ,}}>
      <Stack.Screen 
        name="ChatRoom" 
        component={ChatRoomScreen} 
        options={{ 
          headerTitle: ChatRoomHeader, 
          headerBackTitleVisible: false,
        }} 
      />
      </Stack.Group>

      <Stack.Screen name='FastShareFTF' component={FastShareFTF}/>

      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Share" component={ShareScreen} />
      </Stack.Group>

      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}



const HomeHeader = (props) => {

  const { width} = useWindowDimensions();
  const navigation = useNavigation();
  return (
    
    <View style={{ 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginRight: 62,
        width,
        
      }}>
      <Image 
        source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg'}}
        style= {{ width: 37, height: 37, borderRadius: 20, marginLeft: 8}}
      />
      <Text style= {{flex: 1, textAlign: 'center', marginLeft: 35 , fontWeight: 'bold', fontSize:18 }}>Chats</Text>
      <Feather name="search" size={25} color="black"  />

      <Pressable
              onPress={() => navigation.navigate('Share')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
                <MaterialIcons name="wifi-tethering" 
                size={28} color="black" 
                style={{marginHorizontal: 13}}
              />
            </Pressable>
    </View>
  )
};

const ChatRoomHeader = (props) => {

  const { width} = useWindowDimensions();
  const navigation = useNavigation();
  return (
    
    <View style={{ 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginRight: 65,
        width: -50,

        
      }}>
      <Image 
        source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg'}}
        style= {{ width: 35, height: 35, borderRadius: 20, marginLeft: Platform.OS === "android" ? -20 : 5}}
      />
      <Text style= {{flex: 1, marginLeft: 12 , fontWeight: 'bold', fontSize:18 }}>{props.children}</Text>
      <Feather name="video" size={24} color="black" style={{ marginRight:10}}/>
      <Ionicons name="ios-call-outline" size={24} color="black" style={{ margin:5}}/>
      <MaterialCommunityIcons name="dots-vertical" size={24} color="black" style={{ marginRight: Platform.OS === "android" ? 13 : -5}}/>
  
    </View>
  )
};


const HomeTabs = createBottomTabNavigator();

const TabNavigator = () => (
  
    <HomeTabs.Navigator     
    screenOptions={{
      headerShown: false,
      // tabBarShowLabel: false,
      tabBarLabelStyle:{fontWeight:'bold', fontSize: 10},
      tabBarActiveTintColor: '#ff7e00'
      
    }}>
      
    <HomeTabs.Screen 
      name='Chats' 
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color }) => 
            <AntDesign name="message1" size={22} color={color} />,
           }}
       
    />

    <HomeTabs.Screen 
      name='Contacts' 
      component={Contacts}
      options={{
        tabBarIcon: ({ color }) => 
            <AntDesign name="contacts" size={22} color={color} />,
           }}
    />
   </HomeTabs.Navigator>


);

