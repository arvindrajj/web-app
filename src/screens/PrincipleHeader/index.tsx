import {View, Text, StyleSheet, Pressable} from 'react-native'
import {Colors} from '../../colors'
import {useState} from 'react'

interface HeaderTemp {
    id: string,
    tabName: string,
    selectedTab?: boolean,
}
 

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

const Header = () => {
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
              const color = item.selectedTab === true? '#e85b49' : '#909195'
              const textDecoration = item.selectedTab === true? 'underline #e85b49 3px' : 'none'
              return (
                <Pressable
                  onPress={() => setTab(item.id)}
                  key= {item.id}
                >
                  <Text 
                    style={{
                      color: color,
                      textDecoration,
                      cursor: 'pointer',
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

const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.zonoPrimaryDark,
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
      width: '56%',
      paddingLeft: 39,
      listStyleType: 'none',
    },

});

export default Header
        //  <FlatList
        //     data={tabList}
        //     keyExtractor={(item) => item.id}
        //     horizontal={true}
        //     renderItem={({ item }) => {
        //       const color = item.selectedTab? '#e85b49' : '#909195'
        //       const textDecoration = item.selectedTab? 'underline #e85b49 3px' : 'none'
        //       return (
        //         <Pressable
        //           style={{
        //           color: color,
        //           textDecoration: textDecoration,
        //           cursor: 'pointer',
        //         }}
        //         onPress={() => setTabList(tabList.map((each) => {
        //           if (item.id === each.id) {
        //             return { ...item, selectedTab: true}
        //           } else {
        //             return {...item, selectedTab: false}
        //           }
        //         }))}
        //       >
        //         <Text>{item.selectedTab}</Text>
        //       </Pressable>
              
        //     );
        //   }}
        // />