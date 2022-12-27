
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import ZonoMoneyScreen from '../stacks/ZonoMoneyScreen';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import SalesScreen from '../stacks/SalesScreen';
import Home from '../../screens/Home';
import Channels from '../../screens/Channels';
import Reports from '../../screens/Reports';
import {View, StyleSheet} from 'react-native'
import SideBar from '../../screens/SideBar';


export type CreateHomeParamList = {
    Login: undefined;
    TermsAndConditions: undefined;
  };

// const NavigatorRef: any = React.useRef();


const App = createStackNavigator();

const linking: any = {
    prefixes:  ['zono://'],
    config: {
      screens: {
        app: {
          path: 'admin',
          screens: {
            Home: {
              path: 'home'
            },
            Channels: {
              path: 'channels'
            },
            Sales: {
              path: 'sales',
              screens: {
                ledger: {
                  path: 'ledger'
                },
                chequeBook: {
                  path: 'chequeBook'
                },
                orders: {
                  path: 'orders'
                },
                clims: {
                  path: 'clims',
                },
              },
            },
            ZonoMoney: {
              path: 'payments',
              screens: {
                dayBook: {
                  path: 'dayBook',
              },
              receiving: {
                  path: 'receiving',
              },
              customers: {
                path: 'customers',
              },
              settlements: {
                path: 'settlements',
              },
              payments: {
                path: 'transaction',
              },
            },
          },
          Reports: {
            path: '/reports',
          },
          },
        },
      }
      },
  };

const AppStack = createStackNavigator()  

const AppStackNavigator = ({navigation, route,}) => {
    return (
      <View style={style.container} >
        <SideBar navigation={navigation} />
        <AppStack.Navigator
          initialRouteName="Sales"
          screenOptions={{
            headerShown: false,
            animationEnabled: false,
          }} 
        >
              <App.Screen 
                name="Home" 
                component={Home} 
                options={{
                  animationEnabled: false,
                  headerShown: false,
                }} 
              />
              <App.Screen 
                name="Channels" 
                component={Channels}
                options={{
                  animationEnabled: false,
                  headerShown: false,
                }}   
              />
              <App.Screen 
                name="ZonoMoney" 
                component={ZonoMoneyScreen}
                options={{
                  animationEnabled: false,
                  headerShown: false,
                }}  
              />
              <App.Screen 
                name="Sales" 
                component={SalesScreen}
                options={{
                  animationEnabled: false,
                  headerShown: false,
                }}   
              />
              <App.Screen 
                name="Reports" 
                component={Reports}
                options={{
                  animationEnabled: false,
                  headerShown: false,
                }}   
              />
        </AppStack.Navigator>
      </View>
    )
}

const Routes: React.FC = () => {
  return (
    <NavigationContainer
      linking={linking}
    >
      <App.Navigator
        initialRouteName="App"
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}
      >
          <App.Screen
            name="app"
            options={{
              // animationEnabled: false,
              headerShown: false,
            }}
            component={AppStackNavigator}
          />
      </App.Navigator>
    </NavigationContainer>
  )
}

export default Routes

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  }
})