import React,{useState} from 'react';
import { useTable } from 'react-table';
import { Table } from 'react-bootstrap';
import {OrderTemp} from '../types'
import { StyleSheet, TextInput, Image, View, Pressable} from 'react-native'

import { SVGS, PNGS } from '../../Assets'; 
import RowView from './rowView';

interface Props {
  columns: any[],
  data: OrderTemp[],
  setData: any,
  pading?: number,
}
type RowList = number[]

const OrderTable = (props: Props) => {
  const { columns, data, setData } = props;
  const [rowView, setRowView] = useState<RowList>([])
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

 const updateData = (id: string) => {
    setData(data.map(each => {
      if (each.orderId === id) {
        return {...each, isChecked: !each.isChecked}
      } else {
        return each
      }
    }))
 }
 type Id = number

 const setRowViewItems = async (i: any) => {
    if(rowView.includes(i)){
      const index = rowView.indexOf(i)
      setRowView(rowView.filter((each, index)=> each !== i && each))
    } else {
      setRowView([...rowView, i])
    }
 }

 const setSearchInput = (e: string, id: string) => {
  setData(data.map(each => {
    if (each.orderId === id) {
      return {...each, quantity: e}
    } else {
      return each
    }
  }))
 }  
  

  // Render the UI for your table
  return (
    <Table {...getTableProps()} style={styles.table}>
    <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th
              {...column.getHeaderProps()}
              style={{
                borderBottom: 'solid 0.3px #292933',
                background: 'transperent',
                color: '#909195',
                height: 40,
                paddingLeft: 10,
                maxWidth: '14%',
                fontSize: 11,
                textAlign: 'start',
              }}
            >
              {column.render('Header')}
            </th>
          ))}
        </tr>
      ))}
    </thead>
    <tbody
    {...getTableBodyProps()} 
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      overflowY: 'scroll',
      overflowX: 'hidden',
      maxHeight: 395,
    }}
    >
      {rows.map((row, i) => {
        prepareRow(row)
          console.log(rowView)
          const checkbox = row.original.isChecked? SVGS.CheckBoxGreenSVG : SVGS.CheckBox
          // console.log(row.original)
          const borderColor = row.original.isChecked? '#64E6BA': '#9295A580'
          
          return (
         <>   
          <tr {...row.getRowProps()}
            style={{flexWrap: 'wrap'}}
          >
            {row.cells.map(cell => {
              const color = cell.column.Header === 'Quantity' ? '#9295A5' : '#ffffff'
              const minWidth = cell.column.Header === 'Value(₹)' ? 120 : undefined
              return (
                <td
                  {...cell.getCellProps()}
                  style={{
                    cursor: 'pointer',
                    padding: 10,
                    backgroundColor: 'transparent',
                    font: 'normal normal normal',
                    color,
                    // width: 200,
                  }}  
                >
                  <View  style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  {cell.column.Header === 'Quantity' &&
                   <TextInput
                      style={{
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor,
                        borderRadius: 4,
                        width: 47,
                        height: 35,
                        fontSize: 14,
                        padding: 3,
                        color: '#ffffff',
                        marginRight: 4,
                        textAlign: 'center',
                      }}
                      keyboardType="numeric"
                      placeholder="0"
                      value={row.original.quantity}
                      onChangeText={e => 
                        setSearchInput(e.replace(/[^0-9]/gi, ""), row.original.orderId)
                      }
                    />}
                   {cell.column.Header === 'SKU' && <img src={checkbox} onClick={() => updateData(row.original.orderId)} style={{paddingRight: 8}} />  }
                  <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    minWidth,
                    }}>
                    {cell.render('Cell')}
                    {cell.column.Header === 'Title' && row.original.icon !== undefined && 
                      <Image
                        style={{
                          marginLeft: 5,
                          height: 20,
                          width: 20,
                        }}
                        source={{
                          uri: row.original.icon,
                      }}
                    />
                    }
                    {cell.column.Header === 'Value(₹)' &&
                    <Pressable onPress={() => setRowViewItems(i)}>
                      <Image
                          style={{
                            marginRight: 5,
                            height: 20,
                            width: 20,
                          }}
                          source={{
                            uri: PNGS.Download,
                        }}
                      />
                    </Pressable>
                      }
                  </View>
                  </View>
                </td>  
              )
            })}
          </tr>
          {rowView.includes(i) && <RowView />}
          </>
        )
      })}
    </tbody>
  </Table>
  );
};

export default OrderTable;

const styles = StyleSheet.create({
  table: {
    color: '#ffffff',
    width: '74vw',
    padding: 10,
    borderSpacing: 0,
    backgroundColor: 'transperent',
    minWidth: 900,
 },
 checkbox: {
    width: 15,
    height: 15,
    borderType: 'solid',
    borderWidth: 1,
    borderColor: "grey",
    marginRight: 6,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    color: "#ffffff",
  },
  input: {
    border: '1px solid #9295A580',
    borderRadius: 4,
    marginLeft: 10,
    width: 47,
    height: 35,
    fontSize: 14,
    padding: 3,
    color: '#ffffff',
    marginRight: 4,
    textAlign: 'center',
  }
})