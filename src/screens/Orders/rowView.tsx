import { StyleSheet, Text, View, Image } from 'react-native'
import { SVGS } from '../../Assets'
import React from 'react'

interface Sales {
    averageSalesCount: number,
    closingStackCount: number,
}

const sales: Sales = {
    averageSalesCount: 0,
    closingStackCount: 0,
}

const RowView = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header} >
          <Image
            style={{
                height: 20,
                width: 20,
                marginRight: 4,
            }}
            source={{
                uri: SVGS.Percentage,
            }}
          />
          <Text style={styles.text}>Get 4 quantity free with 50.</Text>
        </View>
        <View style={styles.content}>
            <View style={styles.item}>
                <Text style={styles.text1}>Average Sales</Text>
                <Text style={styles.text2}>{sales.averageSalesCount}</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.text1}>Closing Stock</Text>
                <Text style={styles.text2}>{sales.closingStackCount}</Text>
            </View>
        </View>
    </View>
  )
}

export default RowView

const styles = StyleSheet.create({
    container: {
        width: 461,
        marginRight: 'auto',
        height: 'auto',
        borderRadius: 4,
        backgroundColor: '#3d424a',
    },
    header: {
        width: 461,
        height: 27,
        backgroundColor: '#706e55',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    content: {
        width: 461,
        height: 27,
        backgroundColor: '#3d424a',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    text: {
        color: '#A39B36',
        fontFamily: 'Fira Sans',
        fontSize: 12,
        fontStyle: 'italic',
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        width: '48%',
    },
    text1: {
        color: '#A1A3B4',
        fontSize: 12,
    },
    text2: {
        color: '#ffffff',
        fontSize: 12,
    }

})