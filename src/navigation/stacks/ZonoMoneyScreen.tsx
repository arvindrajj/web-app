
import { createStackNavigator } from '@react-navigation/stack';
import DayBook from '../../screens/DayBook';
import Receiving from '../../screens/Receiving';
import Customers from '../../screens/Customers';
import Payments from '../../screens/Payments';
import Settlements from '../../screens/Settlements';
import Header from '../../screens/PrincipleHeader';


const ZonoMoneyStack = createStackNavigator();
const ZonoMoneyScreen = ({navigation}) => {
  return (
    <>
      <Header navigation={navigation} />
      <ZonoMoneyStack.Navigator
        initialRouteName="receiving"
        screenOptions={{
            headerShown: false,
            animationEnabled: false,
        }}>
        <ZonoMoneyStack.Screen name="dayBook" component={DayBook} />
        <ZonoMoneyStack.Screen name="receiving" component={Receiving} />
        <ZonoMoneyStack.Screen name="customers" component={Customers} />
        <ZonoMoneyStack.Screen name="settlements" component={Settlements} />
        <ZonoMoneyStack.Screen name="payments" component={Payments} />
    </ZonoMoneyStack.Navigator>
    </>
  )
}

export default ZonoMoneyScreen