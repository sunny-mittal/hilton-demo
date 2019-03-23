import { mount } from 'enzyme'
import React from 'react'
import 'react-native'

import Reservation from '../../src/components/Reservation'

describe('Reservation', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <Reservation
        name="Sunny Mittal"
        hotelName="Hilton Garden Inn"
        arrivalDate="03/03/2008"
        departureDate="03/05/2008"
      />
    )

    expect(wrapper.text()).toContain('Hilton Garden Inn')
  })
})
