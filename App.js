import IndexScreen from "./src/screens/indexScreen";
import { createStackNavigator} from "react-navigation-stack";
import { createAppContainer } from 'react-navigation'

const navigator = createStackNavigator({
  Index: IndexScreen
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
})

export default createAppContainer(navigator)
