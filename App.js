import * as React from 'react';
import { View, Text, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

console.disableYellowBox = true;

import LoginScreen from './app/LoginScreen'
import HomeScreen from './app/HomeScreen' 
import SearchScreen from './app/SearchScreen'
import AddPostScreen from './app/AddPostScreen'
import NotificationScreen from './app/NotificationScreen'
import ProfilScreen from './app/ProfilScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



function LogoTitle() {
  return (
      <Image
        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCtXE9_m-XXWJmgdFjowBMrV7wBJlkazWJORTyOUYp1t4sysJy&usqp=CAU'}}
        style={{ width:115, height:32}}
      />
  );
}

function LoginStack(){
  return (
    <Stack.Navigator initialRouteName={'LoginScren'}>
      <Stack.Screen name="LoginScreen" component={LoginScreen}/>
    </Stack.Navigator>
  )
}

function HomeStack(){
  return (
    <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={HomeScreen}
        options={{  
          headerTitle: props => <LogoTitle {...props} />,
          headerRight: () => (
            <Icon
            name='sc-telegram'
            type='evilicon'
            color='#517fa4'
            size={45}
            />
          ),
        }}>
        </Stack.Screen>
    </Stack.Navigator>
  );
}

function AddPostStack(){
  return (
    <Stack.Navigator initialRouteName={'AddPost'}>
        <Stack.Screen name="AddPost" component={AddPostScreen}
        options={{  
          headerTitle: props => 
          <View>
            <Text style={{ fontWeight:'bold', fontSize: 20, textAlign: 'left', color: '#517fa4'}}>
              Upload Foto
            </Text>
          </View>
          //headerRight: () => (
            //<View>
            //<Text style={{ fontWeight:'bold', marginRight:10, fontSize: 20, textAlign: 'left', color: '#517fa4'}}>
              //Selanjutnya
            //</Text>
          //</View>
          //),
        }}>
        </Stack.Screen>
    </Stack.Navigator>
  );
}

function NotificationStack(){
  return (
    <Stack.Navigator initialRouteName={'Notification'}>
        <Stack.Screen name="Notification" component={NotificationScreen}
        options={{  
          headerTitle: props => 
          <View>
            <Text style={{ fontWeight:'bold', fontSize: 20, textAlign: 'left', color: '#517fa4'}}>
              Notifikasi
            </Text>
          </View>
        }}>
        </Stack.Screen>
    </Stack.Navigator>
  );
}

function ProfilStack(){
  return (
    <Stack.Navigator initialRouteName={'Profil'}>
        <Stack.Screen name="Profil" component={ProfilScreen}
        options={{  
          headerTitle: props => 
          <View>
            <Text style={{ fontWeight:'bold', fontSize: 20, textAlign: 'left', color: '#517fa4'}}>
              Profil Pengguna
            </Text>
          </View>
        }}>
        </Stack.Screen>
    </Stack.Navigator>
  );
}

function App() {
  return (

    <NavigationContainer>
    <Stack.Screen name="Login" component={LoginStack}/>

      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
            activeTintColor: '#517fa4',
        }}>
        <Tab.Screen name="HomeStack" component={HomeStack}
          options={{
            tabBarLabel:'',
            tabBarIcon: () => (
              
                <MaterialCommunityIcons  
                name="home-outline" 
                color='#517fa4' 
                size={35}
                />
            ),
          }}/>

        <Tab.Screen name="SearchScreen" component={SearchScreen}
          options={{
            tabBarLabel:'',
            tabBarIcon: () => (
                <MaterialCommunityIcons  
                name="magnify" 
                color='#517fa4' 
                size={35}
                />
            ),
          }}/>

        <Tab.Screen name="AddPostStack" component={AddPostStack}
          options={{
            tabBarLabel:'',
            tabBarIcon: () => (
              <View style={{alignItems: 'center', borderRadius:35, height:63, width:63,
              justifyContent:'center', alignItems:'center',
              bottom:5}}>
              <MaterialCommunityIcons  
              name="plus-circle" 
              color='#517fa4' 
              size={60}
              />
              </View>
            ),
          }}/>

        <Tab.Screen name="NotificationStack" component={NotificationStack}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
                <MaterialCommunityIcons
                name="bell-outline" 
                color='#517fa4'  
                size={35} 
                />
            ),
          }} />

        <Tab.Screen name="ProfilStack" component={ProfilStack}
          options={{
            tabBarLabel:'',
            tabBarIcon: () => (
                <MaterialCommunityIcons  
                name="account-circle-outline" 
                color='#517fa4' 
                size={35}
                />
            ),
          }}/>  
      </Tab.Navigator> 
    </NavigationContainer>
  );
}
export default App;