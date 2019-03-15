import { mount } from 'enzyme'
import React from 'react'
import { MockedProvider } from 'react-apollo/test-utils'
import 'react-native'

import { GET_RESERVATIONS_QUERY } from '../../src/components/Reservations'

const mockReservations = [
  {
    request: {
      query: GET_RESERVATIONS_QUERY
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

import Home from '../../src/components/Home'

describe('Home', () => {
  it('renders correctly', async done => {
    const wrapper = await mount(
      <MockedProvider mocks={mockReservations} addTypename={false}>
        <Home />
      </MockedProvider>
    )

    expect(wrapper.text()).toContain('Hilton Demo App')

    // Timeout is necessary to ensure the mock data has rendered
    setTimeout(done, 100)
  })
})
