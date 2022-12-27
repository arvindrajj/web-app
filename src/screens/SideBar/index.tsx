import { StyleSheet, Text, View,Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../colors'
import {SVGS} from '../../Assets'

interface HeaderTemp {
    id: string,
    tabName: string,
    selectedTab?: boolean,
    activeImg?: string | any,
    unActiveImg?: string | any,
}
 

function createItems<Type>(items:Type[]):Type[]{ return [...items]}


const tabs = createItems<HeaderTemp>([
    { 
      id: '1',
      tabName: 'Home',
      selectedTab: false,
      activeImg: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNS4yNDMiIGhlaWdodD0iMTUuOTgiIHZpZXdCb3g9IjAgMCAxNS4yNDMgMTUuOTgiPgogIDxwYXRoIGlkPSJTdWJ0cmFjdGlvbl8xMiIgZGF0YS1uYW1lPSJTdWJ0cmFjdGlvbiAxMiIgZD0iTTExLjcsMTUuOThIMy41NDFhMS43NjksMS43NjksMCwwLDEtMS44NTQtMS42NjVWNy42SDEuMTE2QTEuMSwxLjEsMCwwLDEsLjA2NCw2LjkzNWEuOTE3LjkxNywwLDAsMSwuMjgtMS4wNDlMNi44NS4yOGExLjIsMS4yLDAsMCwxLDEuNTQzLDBMMTQuOSw1Ljg4NmEuOTE3LjkxNywwLDAsMSwuMjgsMS4wNDksMS4xLDEuMSwwLDAsMS0xLjA1Mi42NjhoLS41NzF2Ni43MTJBMS43NjksMS43NjksMCwwLDEsMTEuNywxNS45OFpNNy42ODMsOC4zNDRhMi4wODcsMi4wODcsMCwxLDAsMi4xNTMsMi4wODdBMi4xMjMsMi4xMjMsMCwwLDAsNy42ODMsOC4zNDRaIiBmaWxsPSIjNjRlNmJhIi8+Cjwvc3ZnPgo=',
      unActiveImg: SVGS.HomeIcon,
    },
    { 
      id: '2',
      tabName: 'Channel',
      selectedTab: false,
      activeImg: SVGS.HomeIconFocused,
      unActiveImg: SVGS.HomeIcon,
    },
    {
      id: '3',
      tabName: 'Sales',
      selectedTab: true,
      activeImg: SVGS.HomeIconFocused,
      unActiveImg: SVGS.HomeIcon,
    },
    {
      id: '4',
      tabName: 'Zono Money',
      selectedTab: false,
      activeImg: SVGS.ZonoMoneyIconActive,
      unActiveImg: SVGS.ZonoMoneyIcon,
    },
    {
      id: '5',
      tabName: 'Reports',
      selectedTab: false,
      activeImg: SVGS.HomeIconFocused,
      unActiveImg: SVGS.HomeIcon,
    },
])



const SideBar = ({navigation}) => {
    const [tabList, setTabList] = useState(tabs)
    type Id = string
 
    const setTab = (id: Id) => {
     setTabList(tabList.map(item => {
       if (id === item.id) {
         return { ...item, selectedTab: true}
       } else {
         return {...item, selectedTab: false}
       }
     }))
     }
  return (
    <View style={styles.container}>
    <View style={styles.flatList}>
      {tabList.map(item => {
        const color = item.selectedTab === true? '#64e6ba' : '#a1a3b4';
        const img = item.selectedTab === true? item.activeImg : item.unActiveImg
        return (
          <Pressable
            onPress={async () => {
              await setTab(item.id)
              switch(item.tabName) {
                case 'Home':
                  navigation.navigate('Home')
                  break;
                case 'Channel':
                  navigation.navigate('Channels')
                  break;
                case 'Sales':
                  navigation.navigate('Sales')
                  break;
                case 'Zono Money':
                  navigation.navigate('ZonoMoney')
                  break;
                case 'Reports':
                  navigation.navigate('Reports')
                  break;
                default:
                  return;
              }
            }}
            key= {item.id}
          >
            <Image
              style={{
                alignSelf: 'center',
                paddingBottom: 2,
                height: 26,
                width: 26,
              }}
              source={{
                uri: img,
              }}
            />
            <Text 
              style={{
                marginBottom: 20,
                color,
                textAlign: 'center',
                fontSize: 13,
                fontFamily: '"Fira Sans", sans-serif',
                width: 48,
              }}                     
            >
                {item.tabName}
            </Text>
            
          </Pressable>
        )  
      })}
    </View>
  </View>
  )
}

export default SideBar

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2D2F39',
        height: '100vh',
        width: '7vw',
        minWidth: 67, 
        display : 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#ffffff'
      },
      flatList: {
        display: 'flex',
        marginTop: 20,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        listStyleType: 'none',
      },
  
})
