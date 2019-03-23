import { mount } from 'enzyme'
import React from 'react'
import { MockedProvider } from 'react-apollo/test-utils'
import 'react-native'

import Reservations from '../../src/components/Reservations'
import { GET_RESERVATIONS } from '../../src/graphql/queries'

const mockReservations = [
  {
    request: {
      query: GET_RESERVATIONS
    },
    result: {
      data: {
        reservations: [
          {
            id: '123',
            name: 'Michael Bluth',
            hotelName: 'Sitwell Inn',
            arrivalDate: '03/22/2019',
            departureDate: '03/26/2019'
          }
        ]
      }
    }
  }
]

// jest.useFakeTimers()

describe('Reservations', () => {
  it('renders a list of reservations', async done => {
    const wrapper = await mount(
      <MockedProvider mocks={mockReservations} addTypename={false}>
        <Reservations />
      </MockedProvider>
    )

    // Ensure the loading text is rendered immediately
    expect(wrapper.text()).toContain('Loading reservations')

    // Verify the mock data is rendered after some time
    setTimeout(() => {
      expect(wrapper.text()).toContain('Sitwell Inn')
      done()
    }, 100)
  })
})
