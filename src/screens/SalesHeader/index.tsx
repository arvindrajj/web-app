import {View, Text, StyleSheet, Pressable, Image} from 'react-native'
import {Colors} from '../../colors'
import React, {useState} from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { HeaderTemp, Brand } from '../types'
import { style } from 'd3'
import { SVGS } from '../../Assets'
 
function createItems<Type>(items:Type[]):Type[]{ return [...items]}

const tabs = createItems<HeaderTemp>([
    { 
      id: '1',
      tabName: 'Ledger',
      selectedTab: false,
    },
    { 
      id: '2',
      tabName: 'Cheque Book',
      selectedTab: false,
    },
    {
      id: '3',
      tabName: 'Orders',
      selectedTab: false,
    },
    {
      id: '4',
      tabName: 'Clims',
      selectedTab: true,
    },
])

const brand: Brand = {
  brandName: 'Godrej',
  brandImg: 'https://www.liblogo.com/img-logo/go8779g321-godrej-logo-godrej-expert.png',
}

const SalesHeader = ({ navigation }) => {
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
          <View style={styles.brand}>
          <Image
              style={{
                alignSelf: 'center',
                height: 30,
                width: 30,
                borderRadius: 35,
              }}
              source={{
                uri: brand.brandImg,
              }}
            />
            <Text style={styles.text}>{brand.brandName}</Text>
            <Image
              style={{
                alignSelf: 'center',
                height: 11,
                width: 11,
                cursor: 'pointer',
              }}
              source={{
                uri: SVGS.DropdownIcon,
              }}
            />
          </View>
          <View style={styles.flatList}>
            {tabList.map(item => {
              const color = item.selectedTab? '#ffffff' : '#9295A5'
              const backgroundColor = item.selectedTab? '#E85B49' : 'transperent' 
              return (
                <Pressable
                  onPress={async () => {
                    await setTab(item.id)
                    await storeData(item.id)
                    switch(item.tabName) {
                      case 'Ledger':
                        navigation.navigate('ledger')
                        break;
                      case 'Cheque Book':
                        navigation.navigate('chequeBook')
                        break;
                      case 'Orders':
                        navigation.navigate('orders')
                        break;
                      case 'Clims':
                        navigation.navigate('clims')
                        break;
                        return;
                    }
                  }}
                  key= {item.id}
                >
                  <Text 
                    style={{
                      color,
                      fontSize: 14,
                      paddingBottom: 5,
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
      flexDirection: 'row',
      alignItems: 'center',
      width: '100vw',
      color: '#ffffff'
    },
    brand: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: 120,
      justifyContent: 'space-around',
    },
    text: {
      color: '#ffffff',
      fontSize: 14,
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

});

export default SalesHeader