import { StyleSheet, Text, View, Modal, TouchableOpacity, TextInput, Image, Button, Pressable } from 'react-native'
import React,{useState} from 'react'
import { Colors } from '../../colors'
import { BlurView } from '../../Assets/BlurView/'
import {BsSearch} from 'react-icons/bs'
import OrderTable from './orderTable'
import { Order } from '../types'
import { LinearGradient } from 'expo-linear-gradient';
import { SVGS, PNGS } from '../../Assets'
// import LinearGradient from 'react-native-linear-gradient';


// import Icon from 'react-native-easy-icon';
const Orders = () => {
  const [modalVisible, setModalVisiable ] = useState(false)
  const [searchinput, setSearchInput] = useState('')
  const onClose = () => {
    setModalVisiable(false);
  };
  
  const customers:Order = {
    orderHeaders: [
        // {Header: '   ', accessor: 'checkbox'},
        {Header: 'SKU', accessor: 'sku'},
        {Header: 'Title', accessor: 'title'},
        {Header: 'Price', accessor: 'price'},
        {Header: 'Quantity', accessor: 'quantityType'},
        {Header: 'UOM Conversion', accessor: 'uomConversion'},
        {Header: 'Value(₹)', accessor: 'value'},
       ],
      orderDetails: [
          { 
              orderId: '1',
              sku: "834AE36442",
              title: 'GoodKnight Active +Coil(Low Smoke)',
              price: '175.00',
              quantity: '0',
              quantityType: 'DZ',
              uomConversion: 12,
              value: '0',
              isChecked: false,
              icon: SVGS.Percentage,
          },
          {
              orderId: '2',
              sku: "834AE36443",
              title: 'GoodKnight Cool Gel',
              price: '175.00',
              quantity: '0',
              quantityType: 'CSE',
              uomConversion: 34,
              value: '₹58,656.00',
              isChecked: false,
          },
          {
              orderId: '3',
              sku: "834AE36444",
              title: 'Goodknight Fabric Roll -on',
              price: '175.00',
              quantity: '0',
              quantityType: 'DZ',
              uomConversion: 56,
              value: '0',
              isChecked: false,
              icon: SVGS.CopyLink,
          },
          {
              orderId: '4',
              sku: "834AE36445",
              title: 'GoodKnight Fast Card',
              price: '175.00',
              quantity: '0',
              quantityType: 'DZ',
              uomConversion: 12,
              value: '0',
              isChecked: false,
              icon: SVGS.Percentage,
          },
          {
              orderId: '5',
              sku: "834AE36446",
              title: 'GoodKnight Gold Flash',
              price: '175.00',
              quantity: '0',
              quantityType: 'CSE',
              uomConversion: 34,
              value: '0',
              isChecked: false,
          },
          {
              orderId: '6',
              sku: "834AE36447",
              title: 'GoodKnight Green Shakti Coil',
              price: '175.00',
              quantity: '0',
              quantityType: 'DZ',
              uomConversion: 15,
              value: '0',
              isChecked: false,
          },
          {
              orderId: '7',
              sku: "834AE36447",
              title: 'GoodKnight Jumbo /Mini-jumbo Coil',
              price: '175.00',
              quantity: '0',
              quantityType: 'CSE',
              uomConversion: 12,
              value: '0',
              isChecked: false,
              icon: SVGS.CopyLink,
          },
      ],
  
  }
  const [data, setData] = useState(customers.orderDetails)
  const columns = customers.orderHeaders

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create Order</Text>
      <View style={styles.container2}>
        <Image
          style={{
            alignSelf: 'center',
            height: 70,
            width: 70,
          }}
          source={{
            uri: SVGS.CartIcon,
          }}
        />
        <Text style={styles.text3}>Add items to create orders</Text>
        <Pressable style={styles.button} onPress={() => setModalVisiable(!modalVisible)} >
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>
      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={onClose}
      >
        <View style={styles.blur} />
        <View style={styles.modal}>
          <TouchableOpacity style={styles.iconView} onPress={onClose}>
          <Image
              style={{
                alignSelf: 'center',
                paddingBottom: 2,
                height: 20,
                width: 20,
              }}
              source={{
                uri: SVGS.CloseIconSVG,
              }}
            />
          </TouchableOpacity>
          <View style={styles.modalBody}>
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="Search BY SKU, Product Name..."
                value={searchinput}
                onChangeText={e => setSearchInput(e)}
              />
              <BsSearch color="#a1a3b4" height={30} width={30} style={styles.search} />
            </View>
            <Text style={styles.text2}>Frequently Ordered SKUs</Text>
            <OrderTable data={data} columns={columns} setData={setData} />
            <TouchableOpacity>
              <LinearGradient
              start={{x:0, y:0.25}}
              end={{x:0.5, y: 1}}
              locations={[0.2, 10]}
              colors={['#50C9FF','#007AB2']}
              style={styles.linearGradient}
              >
                <Text style={styles.buttonText}>Add To Order</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.zonoBlackishShade,
    height: "92vh",
  },
  container2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  text: {
    color: '#ffffff',
    backgroundColor: '#21222B',
    fontSize: 19,
    padding: 20,
  },
  text2: {
    color: '#9295A5',
    fontSize: 15,
    padding: 10,
  },
  text3: {
    color: '#9295A5',
    fontSize: 22,
    padding: 15,
  },
  button: {
    width: 187,
    height: 34,
    borderRadius: 4,
    backgroundColor: '#5BBE84',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  modal: {
    width: '81%',
    height: '80%',
    margin: 'auto',
    borderRadius: 22,
    // paddingHorizontal: 60,
    backgroundColor: '#21222B',
    // shadowColor: '#000',
  },
  modalBody: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
  },
  iconView: {
    position: 'absolute',
    top: 25,
    right: 25,
    backgroundColor: 'transperent',
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99,

  },
  iconStyles: {
    color: '#4a4c57',
    fontSize: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    border: '1px solid #2D2E38',
    borderRadius: 3,
    marginLeft: 10,
    height: 39,
    width: "90%",
  },
  input: {
    fontSize: 14,
    padding: 3,
    color: '#9295A5',
    width: "95%",
  },
  search: {
    // cursor: 'pointer',
  },
  buttonText: {
    fontSize: 14,
    color: "#ffffff",
    fontWeight: '500',
  },
  linearGradient: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    margin: 'auto',
    borderRadius: 4,
    height: 38,
  },
  blur: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backdropFilter: 'blur(1px)',
    backgroundColor: 'rgba(255, 255, 255, 0.18)',
  },
});