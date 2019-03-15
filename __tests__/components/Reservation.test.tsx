import { mount } from 'enzyme'
import React from 'react'
import 'react-native'

import Reservation from '../../src/components/Reservation'

describe('Reservation', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <Reservation name="Sunny Mittal" hotelName="Hilton Garden Inn" />
    )

    expect(wrapper.text()).toContain('Sunny Mittal')
  })
})
