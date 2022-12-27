
export interface HeaderTemp {
    id: string,
    tabName: string,
    selectedTab?: boolean,
}
 
export interface MoneyTemp {
    id: string,
    moneyType: string,
    total: number | string,
  } 
  
export interface CustomerTemp {
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
    accessor: any,
}  
  
export interface Customer {
    teamHeaders: TeamHeader[],
    teamDetails: CustomerTemp[],
  
}

export interface Brand {
  brandName: string,
  brandImg: string,
}

export interface OrderTemp {
  orderId: string,
  sku: any,
  title: string,
  price: string,
  quantity: number,
  quantityType: string,
  uomConversion: number,
  value: string,
  isChecked: boolean,
  icon?: any,
}

export interface Order {
  orderHeaders: TeamHeader[],
  orderDetails: OrderTemp[],
}