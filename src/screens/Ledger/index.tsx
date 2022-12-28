import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React,{useState} from 'react'

const Ledger = () => {
  const [data, setData] = useState([])
  React.useEffect(() => {
    const fetchJobs = async () => {
      const url = 'https://apis.ccbp.in/blogs'
      const response = await fetch(url)
      const result = await response.json()
      if (response.ok) {
        setData(result)
        console.log(result)
      }
    }
    fetchJobs()
  },[])
  return (
    <View style={styles.container}>
      <Text>Ledger</Text>
      <View style={styles.scrollView}>
        {data.map((each, index) => {
          return (
            <Pressable style={styles.item}>
              <Text style={{color: '#ffffff'}}>{index}</Text>
            </Pressable>
          )
        })}
      </View>
    </View>
  )
}

export default Ledger

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  scrollView: {
    flexWrap: 'wrap',
    overflowY: 'scroll',
    overflowX: 'hidden',
    width: '80%',
    height: '72%',
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-around',
    backgroundColor: '#000000',
  },
  item: {
    backgroundColor: '#2D2F39',
    height: 300,
    width: '32%',
    minWidth: 300,
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

})