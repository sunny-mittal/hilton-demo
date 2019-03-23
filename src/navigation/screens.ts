import { Navigation } from 'react-native-navigation'

import CreateReservation from '../components/CreateReservation'
import Home from '../components/HomeWrapper'

const registerScreens = () => {
  Navigation.registerComponent('Home', () => Home)
  Navigation.registerComponent('CreateReservation', () => CreateReservation)
}

export default registerScreens
