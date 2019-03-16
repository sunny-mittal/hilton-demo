import { Navigation } from 'react-native-navigation'

import App from './components/App'
import CreateReservation from './components/CreateReservation'

const registerScreens = () => {
  Navigation.registerComponent('Home', () => App)
  Navigation.registerComponent('CreateReservation', () => CreateReservation)
}

export default registerScreens
