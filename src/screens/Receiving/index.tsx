import {Text, View, StyleSheet} from 'react-native'
import React from 'react'
import {Colors} from '../../colors'
import ReactTable from './ReactTable'

interface MoneyTemp {
    id: string,
    moneyType: string,
    total: number | string,
  } 
  
export interface CoustomerTemp {
    customerId: number,
    date:   string,
    teamMember: string,
    amountRecived: number | string,
    recivedCash: number | string,
    receivedCheque: number | string,
    noOfPayments: string,
    cashierName: string,
  }

export interface TeamHeader {
    Header: string,
    accessor: string,
}  
  
  interface Customer {
      teamHeaders: TeamHeader[],
      teamDetails: CoustomerTemp[],
  
  }
  
  function createItems<Type>(items:Type[]):Type[]{return [...items]}
  
  
  const zonoMoney = createItems<MoneyTemp>([
      {   
          id: '1',
          moneyType: 'total Money Received', 
          total: '2,35,875,45'
      },
      {
          id: '2',
          moneyType: 'total Number Of Payments',
          total: 434,
      },
      {
          id: '3',
          moneyType: 'Amount Recived By Cash',
          total: '1,98,879',
      },
      {
          id: '4',
          moneyType: 'Amount Received By Cheque',
          total: 545,
      },
      {
          id: '5',
          moneyType: 'Amount Received By Others',
          total: 754,
      },
  ])

  
  const customers:Customer = {
    teamHeaders: [
        {Header: 'Date', accessor: 'date'},
        {Header: 'Team Member', accessor: 'teamMember'},
        {Header: 'Amount Recived', accessor: 'amountRecived'},
        {Header: 'Recived Cash', accessor: 'recivedCash'},
        {Header: 'Received Cheque', accessor: 'receivedCheque'},
        {Header: 'No Of Payments', accessor: 'noOfPayments'},
        {Header: 'Cashier Name', accessor: 'cashierName'},
       ],
      teamDetails: [
          { 
              customerId: 1,
              date: "20ᵗʰseptember,2020",
              teamMember: 'Mahesh sharma',
              amountRecived: '24,000',
              recivedCash: '24,000',
              receivedCheque: '-',
              noOfPayments: '5 Pyments',
              cashierName: 'Manish Kumar',
          },
          {
              customerId: 2,
              date: "20ᵗʰseptember,2020",
              teamMember: 'Mahesh sharma',
              amountRecived: '24,000',
              recivedCash: '24,000',
              receivedCheque: '-',
              noOfPayments: '5 Pyments',
              cashierName: 'Manish Kumar',
          },
          {
              customerId: 3,
              date: "20ᵗʰseptember,2020",
              teamMember: 'Mahesh sharma',
              amountRecived: '24,000',
              recivedCash: '24,000',
              receivedCheque: '-',
              noOfPayments: '5 Pyments',
              cashierName: 'Manish Kumar',
          },
          {
              customerId: 4,
              date: "20ᵗʰseptember,2020",
              teamMember: 'Mahesh sharma',
              amountRecived: '24,000',
              recivedCash: '24,000',
              receivedCheque: '-',
              noOfPayments: '5 Pyments',
              cashierName: 'Manish Kumar',
          },
          {
              customerId: 5,
              date: "20ᵗʰseptember,2020",
              teamMember: 'Mahesh sharma',
              amountRecived: '24,000',
              recivedCash: '24,000',
              receivedCheque: '-',
              noOfPayments: '5 Pyments',
              cashierName: 'Manish Kumar',
          },
          {
              customerId: 6,
              date: "20ᵗʰseptember,2020",
              teamMember: 'Mahesh sharma',
              amountRecived: '24,000',
              recivedCash: '24,000',
              receivedCheque: '-',
              noOfPayments: '5 Pyments',
              cashierName: 'Manish Kumar',
          },
          {
              customerId: 7,
              date: "20ᵗʰseptember,2020",
              teamMember: 'Mahesh sharma',
              amountRecived: '24,000',
              recivedCash: '24,000',
              receivedCheque: '-',
              noOfPayments: '5 Pyments',
              cashierName: 'Manish Kumar',
          },
          {
              customerId: 8,
              date: "20ᵗʰseptember,2020",
              teamMember: 'Mahesh sharma',
              amountRecived: '24,000',
              recivedCash: '24,000',
              receivedCheque: '-',
              noOfPayments: '5 Pyments',
              cashierName: 'Manish Kumar',
          },
          {
              customerId: 9,
              date: "20ᵗʰseptember,2020",
              teamMember: 'Mahesh sharma',
              amountRecived: '24,000',
              recivedCash: '24,000',
              receivedCheque: '-',
              noOfPayments: '5 Pyments',
              cashierName: 'Manish Kumar',
          },
          {
              customerId: 10,
              date: "20ᵗʰseptember,2020",
              teamMember: 'Mahesh sharma',
              amountRecived: '24,000',
              recivedCash: '24,000',
              receivedCheque: '-',
              noOfPayments: '5 Pyments',
              cashierName: 'Manish Kumar',
          },
          {
              customerId: 11,
              date: "20ᵗʰseptember,2020",
              teamMember: 'Mahesh sharma',
              amountRecived: '24,000',
              recivedCash: '24,000',
              receivedCheque: '-',
              noOfPayments: '5 Pyments',
              cashierName: 'Manish Kumar',
          },
  
      ],
  
  }

  const columns = customers.teamHeaders
  const data = customers.teamDetails

const Receiving = () => {
    return (
        <View style={styles.container}>
            <View style={styles.flatList}>
                {zonoMoney.map(item => (
                    <View 
                    key={item.id}
                    style={styles.view1}
                  >
                      <View
                        style={styles.view2}
                      >
                          <Text style={styles.text1}>{item.moneyType}</Text>
                          <Text style={styles.text2}><sup style={{fontSize: '11px'}}>₹</sup>{item.total}</Text>
                      </View>
                      {item.id !== '5' && (
                           <View style={styles.view3}></View>
                      )}

                  </View>
                ))}
            </View>
            <ReactTable data={data} columns={columns} />
            {/* <DataTable 
                style={styles.dataTable}>
                <DataTable.Header>
                  {customers.teamHeaders.map(each => (
                    <DataTable.Title style={{width: "15.65%"}}>
                     <Text style={styles.text3}>{each}</Text>
                     <hr style={{
                        maxHeight: 0.3,
                        width: '100%',
                        backgroundColor: '#909195',
                      }}  
                    />
                    </DataTable.Title>
                  ))}
                </DataTable.Header>
                {customers.teamDetails.map(item => {
                  const backgroundColor = item.customerId % 2 === 0 ? Colors.zonoMidnightGrety : 'none'  
                  return (
                    <DataTable.Row style={{
                        textAlign: 'center',
                        fontSize: 13,
                        height: 36,
                        backgroundColor: backgroundColor,
                        padding: 10,
                       }}
                       key={item.customerId}
                       >
                          <DataTable.Cell>{item.date}<sup style={{fontSize: '11px'}}>th</sup>{item.fullDate}</DataTable.Cell>
                          <DataTable.Cell>{item.teamMember}</DataTable.Cell>
                          <DataTable.Cell>{item.amountRecived}</DataTable.Cell>
                          <DataTable.Cell>{item.recivedCash}</DataTable.Cell>
                          <DataTable.Cell>{item.receivedCheque}</DataTable.Cell>
                          <DataTable.Cell>{item.noOfPayments}</DataTable.Cell>
                          <DataTable.Cell>{item.cashierName}</DataTable.Cell>
                    </DataTable.Row> 
                  )  
                })}
            </DataTable> */}
        </View>
    )
}

export default Receiving

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.zonoBlackishShade,
        height: "auto",
        marginBottom: 20,
    },
    flatList: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 0,
        marginTop: 35,
        width: '95vw',
        minHeight: 70,
        margin: 'auto',
        paddingLeft: 9,
        backgroundColor: Colors.zonoMidnightGrety,
        borderRadius: 6,
    },
    view1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '15%',
        alignItems: 'center',
    },
    view2: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    view3: {
        height: '50%',
        width: 1,
        backgroundColor: '#909195',
    },
    text1: {
        color: '#909195', 
        fontSize: 13, 
        marginBottom: 3,
        marginHorizontal: 20,
    },
    text2: {
        color: '#ffffff', 
        fontSize: 19, 
        marginTop: 0,
    },

})