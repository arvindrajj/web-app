import {View, Text, StyleSheet, Pressable} from 'react-native'
import React, {useState} from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { HeaderTemp } from '../types'


function createItems<Type>(items:Type[]):Type[]{ return [...items]}



const tabs = createItems<HeaderTemp>([
    { 
      id: '1',
      tabName: 'Daybook',
      selectedTab: false,
    },
    { 
      id: '2',
      tabName: 'Payments',
      selectedTab: false,
    },
    {
      id: '3',
      tabName: 'Settlements',
      selectedTab: false,
    },
    {
      id: '4',
      tabName: 'Received',
      selectedTab: true,
    },
    {
      id: '5',
      tabName: 'Customers',
      selectedTab: false,
    },
])

const Header = ({ navigation }) => {
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

    const readData = async () => {
      try {
        const value: any = await AsyncStorage.getItem('tab');
        if (value !== null) {
          await setTab(value)
        }
      } catch (e) {
        // saving error
      }
    };
   
    const storeData = async (id: any) => {
      try {
        await AsyncStorage.setItem('tab', id)
      } catch (e) {

        // saving error
      }
    }   
   

    React.useEffect(() => {
      
      readData()
    }, [])

    return (
        <View style={styles.container}>
          <View style={styles.flatList}>
            {tabList.map(item => {
              const color = item.selectedTab === true? '#e85b49' : '#9295A5'
              const backgroundColor = item.selectedTab? '#E85B49' : 'transperent' 
              return (
                <Pressable
                  onPress={async () => {
                    await setTab(item.id)
                    await storeData(item.id)
                    switch(item.tabName) {
                      case 'Daybook':
                        navigation.navigate('dayBook')
                        break;
                      case 'Received':
                        navigation.navigate('receiving')
                        break;
                      case 'Payments':
                        navigation.navigate('payments')
                        break;
                      case 'Settlements':
                        navigation.navigate('settlements')
                        break;
                      case 'Customers':
                        navigation.navigate('customers')
                        break;
                      default:
                        return;
                    }
                  }}
                  key= {item.id}
                >
                  <Text 
                    style={{
                      color,
                      paddingBottom: 5,
                      fontSize: 14,
                    }}                     
                  >
                          {item.tabName}
                  </Text>
                  <View style={{
                    backgroundColor,
                    height: 2,
                    width: '100%',
                  }} />
                </Pressable>
              )  
            })}
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#2D2F39',
      height: '8vh',
      display : 'flex',
      justifyContent: 'center',
      width: '100vw',
      color: '#ffffff'
    },
    flatList: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 0,
      justifyContent: 'space-between',
      width: '36%',
      paddingLeft: 39,
      listStyleType: 'none',
    },
    text: {
      
    }

});

export default Header