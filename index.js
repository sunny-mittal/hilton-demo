import { Navigation } from 'react-native-navigation'

import registerScreens from './src/navigation/screens'
import defaultOptions from './src/navigation/config'

registerScreens()

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions(defaultOptions)

  Navigation.setRoot({
    root: {
      bottomTabs: {
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
