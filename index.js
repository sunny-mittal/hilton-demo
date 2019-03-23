import { Navigation } from 'react-native-navigation'
import Home from './src/components/HomeWrapper'

Navigation.registerComponent('MainApp', () => Home)

import registerScreens from './src/screens'
import defaultOptions from './src/navigation/config'

registerScreens()

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions(defaultOptions)

  Navigation.setRoot({
    root: {
      bottomTabs: {
        backgroundColor: '#000',
        children: [
          {
            component: {
              name: 'Home',
              options: {
                bottomTab: {
                  text: 'Reservations'
                }
              }
            }
          },
          {
            component: {
              name: 'CreateReservation',
              options: {
                bottomTab: {
                  text: 'Create Reservation'
                }
              }
            }
          }
        ]
      }
    }
  })
})
