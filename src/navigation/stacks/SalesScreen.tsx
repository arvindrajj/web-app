
import { createStackNavigator } from '@react-navigation/stack';
import Ledger from '../../screens/Ledger';
import ChequeBook from '../../screens/ChequeBook';
import Orders from '../../screens/Orders';
import Clims from '../../screens/Clims';
import SalesHeader from '../../screens/SalesHeader';
const SalesStack = createStackNavigator();

const SalesScreen = ({route, navigation}) => {
  return (
      <>
        <SalesHeader navigation={navigation} />
        <SalesStack.Navigator
          initialRouteName="orders"
          screenOptions={{
            animationEnabled: false,
            headerShown: false,
          }}>
        <SalesStack.Screen name="ledger" component={Ledger} />
        <SalesStack.Screen name="chequeBook" component={ChequeBook} />
        <SalesStack.Screen name="orders" component={Orders} />
        <SalesStack.Screen name="clims" component={Clims} />
      </SalesStack.Navigator>
      </>
  )
}

export default SalesScreen