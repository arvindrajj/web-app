import React from 'react';
import { useTable } from 'react-table';
import { Table } from 'react-bootstrap';
import {CoustomerTemp} from './index'
import { StyleSheet,View } from 'react-native'
import { Colors } from '../../colors';

interface Props {
  columns: any[],
  data: CoustomerTemp[],
  pading?: number,

}


const ReactTable = (props: Props) => {
  const { columns, data } = props;
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

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
                borderBottom: 'solid 0.2px #292933',
                background: Colors.zonoBlackishShade,
                color: '#909195',
                fontSize: 12,
              }}
            >
              {column.render('Header')}
            </th>
          ))}
          <View style={{ borderStyle: 'solid', borderWidth: 0.2, borderColor: '#292933', marginTop: 10 }} />
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
    }}
    >
      {rows.map((row, i) => {
        const backgroundColor = i % 2 === 0?  Colors.zonoBlackishShade : '#1b1c24'
        prepareRow(row)
        // const rowId = row.original.id;
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => {
              return (
                <td
                  {...cell.getCellProps()}
                  style={{
                    padding: '10px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    cursor: 'pointer',
                    width: '15%',
                    backgroundColor: backgroundColor,
                  }}
                >
                  {cell.render('Cell')}
                </td>
              )
            })}
          </tr>
        )
      })}
    </tbody>
  </Table>
  );
};

export default ReactTable;

const styles = StyleSheet.create({
  table: {
    color: '#ffffff',
    width: '95vw',
    margin: 'auto', 
    borderSpacing: 0,
    backgroundColor: '#000000',
    marginTop: 15,
 },
})